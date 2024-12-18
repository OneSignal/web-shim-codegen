import { IFunctionSignature } from "../../models/FunctionSignature";
import { getChainedNamespaceString, hasNonVoidReturnType, spreadArgs, spreadArgsWithTypes } from "../utils";

export const ngOneSignalAsyncFunctionTemplate = (
  sig: IFunctionSignature,
  uniqueFunctionName: string,
  namespaceChain: string[]
): string => {
  const args = sig.args?.map(arg => arg.name);
  const chainedNamespaceString = getChainedNamespaceString(namespaceChain);

  return `
function ${uniqueFunctionName}${sig.genericTypeParameter ?? ''}(${spreadArgsWithTypes(sig)}): ${sig.returnType} {
  return new Promise((resolve, reject) => {
    if (isOneSignalScriptFailed) {
      reject(new Error('OneSignal script failed to load.'));
      return;
    }

    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      ${hasNonVoidReturnType(sig) ? 'resolve(' : ''}oneSignal.${chainedNamespaceString}${
    chainedNamespaceString !== '' ? '.' : ''
  }${sig.name}(${spreadArgs(args)})${hasNonVoidReturnType(sig) ? ')' : '.then(() => resolve())'};
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

  const retValDeclaration = hasNonVoidReturnType(sig)
    ? `let retVal: ${sig.returnType};`
    : '';
  const retValAssignment = hasNonVoidReturnType(sig) ? 'retVal = ' : '';
  const retValReturn = hasNonVoidReturnType(sig)
    ? `// @ts-ignore\n  return retVal;`
    : '';

  return `
function ${uniqueFunctionName}${sig.genericTypeParameter ?? ''}(${spreadArgsWithTypes(sig)}): ${
    sig.returnType || 'void'
  } {
  ${retValDeclaration}
  window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
    ${retValAssignment}oneSignal.${chainedNamespaceString}${
    chainedNamespaceString !== '' ? '.' : ''
  }${sig.name}(${spreadArgs(args)});
  });
  ${retValReturn}
}
`.replace(/^\s*[\r\n]/gm, ''); // Remove extra newlines
};
