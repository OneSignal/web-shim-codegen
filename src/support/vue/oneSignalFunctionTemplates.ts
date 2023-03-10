import { IFunctionSignature } from "../../models/FunctionSignature";
import { spreadArgs, spreadArgsWithTypes } from "../../support/utils";

export const vueOneSignalAsyncFunctionTemplate = (sig: IFunctionSignature, namespaceName?: string) => {
  const args = sig.args?.map(arg => arg.name);
  return `
function ${sig.name}(${spreadArgsWithTypes(sig)}): ${sig.returnType || 'void'} {
  return new Promise(function (resolve, reject) {
    if (isOneSignalScriptFailed) {
      reject();
    }

    if (!doesOneSignalExist()) {
      vueOneSignalFunctionQueue.push({
        name: '${sig.name}',
        namespaceName: '${namespaceName}',
        args: arguments,
        promiseResolver: resolve,
      });
      return;
    }

    try {
      window["OneSignalDeferred"].push((OneSignal) => {
        OneSignal.${namespaceName}${namespaceName !== '' ? '.' : ''}${sig.name}(${spreadArgs(args)})
          .then(value => resolve(value))
          .catch(error => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}`
};

export const vueOneSignalFunctionTemplate = (sig: IFunctionSignature, namespaceName?: string) => {
  const args = sig.args?.map(arg => arg.name);
  return `
function ${sig.name}(${spreadArgsWithTypes(sig)}): ${sig.returnType || 'void'} {
  if (!doesOneSignalExist()) {
    vueOneSignalFunctionQueue.push({
      name: '${sig.name}',
      namespaceName: '${namespaceName}',
      args: arguments,
    });
    return;
  }

  window["OneSignalDeferred"].push((OneSignal) => {
    OneSignal.${namespaceName}${namespaceName !== '' ? '.' : ''}${sig.name}(${spreadArgs(args)})
  });
}`
};
