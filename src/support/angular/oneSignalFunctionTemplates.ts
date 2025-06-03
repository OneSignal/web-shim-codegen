import { IFunctionSignature } from "../../models/FunctionSignature";
import { getChainedNamespaceString, hasNonVoidReturnType, spreadArgs, spreadArgsWithTypes } from "../utils";

export const ngOneSignalAsyncFunctionTemplate = (
  sig: IFunctionSignature,
  uniqueFunctionName: string,
  namespaceChain: string[]
): string => {
  const args = sig.args?.map(arg => arg.name);
  const chainedNamespaceString = getChainedNamespaceString(namespaceChain);
  const needsPromise = hasNonVoidReturnType(sig);

  const asyncModifier = needsPromise ? 'async ' : '';
  const returnTypePrefix = needsPromise ? 'Promise<' : '';
  const returnTypeSuffix = needsPromise ? '>' : '';
  const retValDeclaration = needsPromise ? `let retVal: Promise<${sig.returnType}>;` : '';

  return `
${asyncModifier}function ${uniqueFunctionName}${sig.genericTypeParameter ?? ''}(${spreadArgsWithTypes(sig)}): ${returnTypePrefix}${sig.returnType || 'void'}${returnTypeSuffix} {
  ${retValDeclaration}
  return new Promise((resolve, reject) => {
    if (isOneSignalScriptFailed) {
      reject(new Error('OneSignal script failed to load.'));
      return;
    }

    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      ${needsPromise ? 'resolve(' : ''}oneSignal.${chainedNamespaceString}${
    chainedNamespaceString !== '' ? '.' : ''
  }${sig.name}(${spreadArgs(args)})${needsPromise ? ')' : '.then(() => resolve())'};
    });
  });
}
`.trim();
};

export const ngOneSignalFunctionTemplate = (
  sig: IFunctionSignature,
  uniqueFunctionName: string,
  namespaceChain: string[]
): string => {
  const args = sig.args?.map(arg => arg.name);
  const chainedNamespaceString = getChainedNamespaceString(namespaceChain);
  const needsPromise = hasNonVoidReturnType(sig);

  const asyncModifier = needsPromise ? 'async ' : '';
  const returnTypePrefix = needsPromise ? 'Promise<' : '';
  const returnTypeSuffix = needsPromise ? '>' : '';
  const retValDeclaration = needsPromise ? `let retVal: Promise<${sig.returnType}>;` : '';
  const retValAssignment = needsPromise ? 'retVal = ' : '';
  const retValReturn = needsPromise ? `// @ts-ignore\n  return retVal;` : '';
  const deferredAwait = needsPromise ? 'await ' : '';

  return `
${asyncModifier}function ${uniqueFunctionName}${sig.genericTypeParameter ?? ''}(${spreadArgsWithTypes(sig)}): ${returnTypePrefix}${sig.returnType || 'void'}${returnTypeSuffix} {
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
