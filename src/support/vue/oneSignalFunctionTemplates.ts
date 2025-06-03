import { IFunctionSignature } from "../../models/FunctionSignature";
import { getChainedNamespaceString, hasNonVoidReturnType, spreadArgs, spreadArgsWithTypes } from "../../support/utils";

export const vueOneSignalAsyncFunctionTemplate = (
  sig: IFunctionSignature,
  uniqueFunctionName: string,
  namespaceChain: string[]
): string => {
  const args = sig.args?.map(arg => arg.name);
  const chainedNamespaceString = getChainedNamespaceString(namespaceChain);

  return `
function ${uniqueFunctionName}${sig.genericTypeParameter ?? ''}(${spreadArgsWithTypes(sig)}): ${sig.returnType} {
  return new Promise(function (resolve, reject) {
    if (isOneSignalScriptFailed) {
      reject(new Error('OneSignal script failed to load.'));
      return;
    }

    try {
      window.OneSignalDeferred?.push((OneSignal) => {
        ${hasNonVoidReturnType(sig) ? 'resolve(' : ''}OneSignal.${chainedNamespaceString}${
    chainedNamespaceString !== '' ? '.' : ''
  }${sig.name}(${spreadArgs(args)})${hasNonVoidReturnType(sig) ? ')' : '.then(() => resolve())'}
          .catch(error => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}
`.trim();
};

export const vueOneSignalFunctionTemplate = (
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
  const retValReturn = needsPromise ? 'return retVal;' : '';
  const deferredAwait = needsPromise ? 'await ' : '';

  return `
${asyncModifier}function ${uniqueFunctionName}${sig.genericTypeParameter ?? ''}(${spreadArgsWithTypes(sig)}): ${returnTypePrefix}${sig.returnType || 'void'}${returnTypeSuffix} {
  ${retValDeclaration}
  ${deferredAwait}window.OneSignalDeferred?.push((OneSignal) => {
    ${retValAssignment}OneSignal.${chainedNamespaceString}${
    chainedNamespaceString !== '' ? '.' : ''
  }${sig.name}(${spreadArgs(args)});
  });
  ${retValReturn}
}
`.trim();
};
