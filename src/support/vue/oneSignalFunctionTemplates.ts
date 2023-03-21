import { IFunctionSignature } from "../../models/FunctionSignature";
import { getChainedNamespaceString, spreadArgs, spreadArgsWithTypes } from "../../support/utils";

export const vueOneSignalAsyncFunctionTemplate = (sig: IFunctionSignature, uniqueFunctionName: string, namespaceChain: string[]) => {
  const args = sig.args?.map(arg => arg.name);
  const chainedNamespaceString = getChainedNamespaceString(namespaceChain);
  return `
function ${uniqueFunctionName}(${spreadArgsWithTypes(sig)}): ${sig.returnType || 'void'} {
  return new Promise(function (resolve, reject) {
    if (isOneSignalScriptFailed) {
      reject();
    }

    if (!doesOneSignalExist()) {
      vueOneSignalFunctionQueue.push({
        name: '${uniqueFunctionName}',
        namespaceName: '${namespaceName}',
        args: arguments,
        promiseResolver: resolve,
      });
      return;
    }

    try {
      window["OneSignalDeferred"].push((OneSignal) => {
        OneSignal.${chainedNamespaceString}${chainedNamespaceString !== '' ? '.' : ''}${sig.name}(${spreadArgs(args)})
          .then(value => resolve(value))
          .catch(error => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}`
};

export const vueOneSignalFunctionTemplate = (sig: IFunctionSignature, uniqueFunctionName: string, namespaceChain: string[]) => {
  const args = sig.args?.map(arg => arg.name);
  const chainedNamespaceString = getChainedNamespaceString(namespaceChain);
  return `
function ${uniqueFunctionName}(${spreadArgsWithTypes(sig)}): ${sig.returnType || 'void'} {
  if (!doesOneSignalExist()) {
    vueOneSignalFunctionQueue.push({
      name: '${uniqueFunctionName}',
      namespaceName: '${namespaceName}',
      args: arguments,
    });
    return;
  }

  window["OneSignalDeferred"].push((OneSignal) => {
    OneSignal.${chainedNamespaceString}${chainedNamespaceString !== '' ? '.' : ''}${sig.name}(${spreadArgs(args)})
  });
}`
};
