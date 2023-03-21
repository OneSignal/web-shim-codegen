import { IFunctionSignature } from "../../models/FunctionSignature";
import { getChainedNamespaceString, spreadArgs, spreadArgsWithTypes } from "../utils";

export const reactOneSignalAsyncFunctionTemplate = (sig: IFunctionSignature, uniqueFunctionName: string, namespaceChain: string[]) => {
  const args = sig.args?.map(arg => arg.name);
  const chainedNamespaceString = getChainedNamespaceString(namespaceChain);
  return `
function ${uniqueFunctionName}(${spreadArgsWithTypes(sig)}): ${sig.returnType || 'void'} {
  return new Promise((resolve, reject) => {
    if (isOneSignalScriptFailed) {
      reject();
    }

    try {
      window["OneSignalDeferred"].push((OneSignal: IOneSignalOneSignal) => {
        OneSignal.${chainedNamespaceString}${chainedNamespaceString !== '' ? '.' : ''}${sig.name}(${spreadArgs(args)})
          .then((value: any) => resolve(value))
          .catch((error: any) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}`
};

export const reactOneSignalFunctionTemplate = (sig: IFunctionSignature, uniqueFunctionName: string, namespaceChain: string[]) => {
  const args = sig.args?.map(arg => arg.name);
  const chainedNamespaceString = getChainedNamespaceString(namespaceChain);
  return `
function ${uniqueFunctionName}(${spreadArgsWithTypes(sig)}): ${sig.returnType || 'void'} {
  window["OneSignalDeferred"].push((OneSignal: IOneSignalOneSignal) => {
    OneSignal.${chainedNamespaceString}${chainedNamespaceString !== '' ? '.' : ''}${sig.name}(${spreadArgs(args)})
  });
}`
};
