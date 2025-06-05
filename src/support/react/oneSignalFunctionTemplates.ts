import { IFunctionSignature } from "../../models/FunctionSignature";
import { getChainedNamespaceString, hasNonVoidReturnType, spreadArgs, spreadArgsWithTypes } from "../utils";

export const reactOneSignalAsyncFunctionTemplate = (
  sig: IFunctionSignature,
  uniqueFunctionName: string,
  namespaceChain: string[]
): string => {
  const args = sig.args?.map(arg => arg.name);
  const chainedNamespaceString = getChainedNamespaceString(namespaceChain);
  const needsPromise = hasNonVoidReturnType(sig);

  const resolvePrefix = needsPromise ? 'resolve(' : '';
  const resolveSuffix = needsPromise ? ')' : '.then(() => resolve())';

  return `
function ${uniqueFunctionName}${sig.genericTypeParameter ?? ''}(${spreadArgsWithTypes(sig)}): ${sig.returnType} {
  return new Promise((resolve, reject) => {
    if (isOneSignalScriptFailed) {
      reject(new Error('OneSignal script failed to load.'));
      return;
    }

    try {
      window.OneSignalDeferred?.push((OneSignal: IOneSignalOneSignal) => {
        ${resolvePrefix}OneSignal.${chainedNamespaceString}${
    chainedNamespaceString !== '' ? '.' : ''
  }${sig.name}(${spreadArgs(args)})${resolveSuffix}
          .catch((error: any) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}
`.trim();
};

export const reactOneSignalFunctionTemplate = (
  sig: IFunctionSignature,
  uniqueFunctionName: string,
  namespaceChain: string[]
): string => {
  const args = sig.args?.map(arg => arg.name);
  const chainedNamespaceString = getChainedNamespaceString(namespaceChain);
  const needsPromise = hasNonVoidReturnType(sig);

  const asyncModifier = needsPromise ? 'async ' : '';
  // const returnTypePrefix = needsPromise ? 'Promise<' : '';
  const returnTypePrefix = needsPromise ? '' : '';
  // const returnTypeSuffix = needsPromise ? '>' : '';
  const returnTypeSuffix = needsPromise ? '' : '';
  // const retValDeclaration = needsPromise ? `let retVal: Promise<${sig.returnType}>;` : '';
  const retValDeclaration = needsPromise ? `let retVal: ${sig.returnType};` : '';
  const retValAssignment = needsPromise ? 'retVal = ' : '';
  const retValReturn = needsPromise ? 'return retVal;' : '';
  const deferredAwait = needsPromise ? 'await ' : '';

  return `
${needsPromise ? '// @ts-expect-error - return non-Promise type despite needing to await OneSignalDeferred' : ''}
${asyncModifier}function ${uniqueFunctionName}${sig.genericTypeParameter ?? ''}(${spreadArgsWithTypes(sig)}): ${returnTypePrefix}${sig.returnType || 'void'}${returnTypeSuffix} {
  ${retValDeclaration}
  ${deferredAwait}window.OneSignalDeferred?.push((OneSignal: IOneSignalOneSignal) => {
    ${retValAssignment}OneSignal.${chainedNamespaceString}${
    chainedNamespaceString !== '' ? '.' : ''
  }${sig.name}(${spreadArgs(args)});
  });
  ${retValReturn}
}
`.trim();
};
