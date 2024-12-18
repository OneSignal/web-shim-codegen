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

  return `
function ${uniqueFunctionName}${sig.genericTypeParameter ?? ''}(${spreadArgsWithTypes(sig)}): ${sig.returnType || 'void'} {
  ${hasNonVoidReturnType(sig) ? `let retVal: ${sig.returnType};` : ''}
  window.OneSignalDeferred?.push((OneSignal) => {
    ${hasNonVoidReturnType(sig) ? 'retVal = ' : ''}OneSignal.${chainedNamespaceString}${
    chainedNamespaceString !== '' ? '.' : ''
  }${sig.name}(${spreadArgs(args)});
  });
  ${hasNonVoidReturnType(sig) ? 'return retVal;' : ''}
}
`.trim();
};
