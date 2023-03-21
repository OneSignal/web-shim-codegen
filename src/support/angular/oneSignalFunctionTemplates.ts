import { IFunctionSignature } from "../../models/FunctionSignature";
import { getChainedNamespaceString, spreadArgs, spreadArgsWithTypes } from "../utils";

export const ngOneSignalAsyncFunctionTemplate = (sig: IFunctionSignature, uniqueFunctionName: string, namespaceChain: string[]) => {
  const args = sig.args?.map(arg => arg.name);
  const chainedNamespaceString = getChainedNamespaceString(namespaceChain);
  return `
  ${uniqueFunctionName}(${spreadArgsWithTypes(sig)}): ${sig.returnType || 'void'} {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
        oneSignal.${chainedNamespaceString}${chainedNamespaceString !== '' ? '.' : ''}${sig.name}(${spreadArgs(args)})
          .then((value: ${sig.returnType}) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }`
};

export const ngOneSignalFunctionTemplate = (sig: IFunctionSignature, uniqueFunctionName: string, namespaceChain: string[]) => {
  const args = sig.args?.map(arg => arg.name);
  const chainedNamespaceString = getChainedNamespaceString(namespaceChain);
  return `
  ${uniqueFunctionName}(${spreadArgsWithTypes(sig)}): ${sig.returnType || 'void'} {
    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.${chainedNamespaceString}${chainedNamespaceString !== '' ? '.' : ''}${sig.name}(${spreadArgs(args)});
    });
  }`
};
