import { IFunctionSignature } from '../../models/FunctionSignature';
import {
  getChainedNamespaceString,
  hasNonVoidReturnType,
  spreadArgs,
  spreadArgsWithTypes,
} from '../utils';

export const ngOneSignalAsyncFunctionTemplate = (
  sig: IFunctionSignature,
  uniqueFunctionName: string,
  namespaceChain: string[],
): string => {
  const args = sig.args?.map((arg) => arg.name);
  const chainedNamespaceString = getChainedNamespaceString(namespaceChain);
  const needsPromise = hasNonVoidReturnType(sig);

  const asyncModifier = needsPromise ? 'async ' : '';

  // Check if returnType already includes Promise
  const isAlreadyPromise = sig.returnType?.includes('Promise<');
  const returnType =
    needsPromise && !isAlreadyPromise
      ? `Promise<${sig.returnType}>`
      : sig.returnType || 'void';
  const retValType =
    needsPromise && !isAlreadyPromise
      ? `Promise<${sig.returnType}>`
      : sig.returnType;
  const retValDeclaration = needsPromise ? `let retVal: ${retValType};` : '';

  return `
${asyncModifier}function ${uniqueFunctionName}${
    sig.genericTypeParameter ?? ''
  }(${spreadArgsWithTypes(sig)}): ${returnType} {
  ${retValDeclaration}
  return new Promise((resolve, reject) => {
    if (isOneSignalScriptFailed) {
      reject(new Error('OneSignal script failed to load.'));
      return;
    }

    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      ${needsPromise ? 'resolve(' : ''}oneSignal.${chainedNamespaceString}${
    chainedNamespaceString !== '' ? '.' : ''
  }${sig.name}(${spreadArgs(args)})${
    needsPromise ? ')' : '.then(() => resolve())'
  };
    });
  });
}
`.trim();
};

export const ngOneSignalFunctionTemplate = (
  sig: IFunctionSignature,
  uniqueFunctionName: string,
  namespaceChain: string[],
): string => {
  const args = sig.args?.map((arg) => arg.name);
  const chainedNamespaceString = getChainedNamespaceString(namespaceChain);
  const needsPromise = hasNonVoidReturnType(sig);

  const asyncModifier = needsPromise ? 'async ' : '';
  const returnTypePrefix = needsPromise ? '' : '';
  const returnTypeSuffix = needsPromise ? '' : '';
  const retValDeclaration = needsPromise
    ? `let retVal: ${sig.returnType};`
    : '';
  const retValAssignment = needsPromise ? 'retVal = ' : '';
  const retValReturn = needsPromise ? `// @ts-ignore\n  return retVal;` : '';
  const deferredAwait = needsPromise ? 'await ' : '';

  return `
${
  needsPromise
    ? '// @ts-expect-error - return non-Promise type despite needing to await OneSignalDeferred'
    : ''
}
${asyncModifier}function ${uniqueFunctionName}${
    sig.genericTypeParameter ?? ''
  }(${spreadArgsWithTypes(sig)}): ${returnTypePrefix}${
    sig.returnType || 'void'
  }${returnTypeSuffix} {
  ${retValDeclaration}
  ${deferredAwait}window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
    ${retValAssignment}oneSignal.${chainedNamespaceString}${
    chainedNamespaceString !== '' ? '.' : ''
  }${sig.name}(${spreadArgs(args)});
  });
  ${retValReturn}
}
`.replace(/^\s*[\r\n]/gm, ''); // Remove extra newlines
};
