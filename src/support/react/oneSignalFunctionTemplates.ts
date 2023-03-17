import { IFunctionSignature } from "../../models/FunctionSignature";
import { spreadArgs, spreadArgsWithTypes } from "../utils";

export const reactOneSignalAsyncFunctionTemplate = (sig: IFunctionSignature, namespaceName?: string) => {
  const args = sig.args?.map(arg => arg.name);
  return `
function ${sig.name}(${spreadArgsWithTypes(sig)}): ${sig.returnType || 'void'} {
  return new Promise((resolve, reject) => {
    if (isOneSignalScriptFailed) {
      reject();
    }

    if (!doesOneSignalExist()) {
      reactOneSignalFunctionQueue.push({
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
          .then((value: any) => resolve(value))
          .catch((error: any) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
}`
};

export const reactOneSignalFunctionTemplate = (sig: IFunctionSignature, namespaceName?: string) => {
  const args = sig.args?.map(arg => arg.name);
  return `
function ${sig.name}(${spreadArgsWithTypes(sig)}): ${sig.returnType || 'void'} {
  if (!doesOneSignalExist()) {
    reactOneSignalFunctionQueue.push({
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
