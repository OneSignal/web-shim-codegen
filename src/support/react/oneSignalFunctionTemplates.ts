import { IFunctionSignature } from "../../models/FunctionSignature";
import { spreadArgs, spreadArgsWithTypes } from "../utils";

export const reactOneSignalAsyncFunctionTemplate = (sig: IFunctionSignature) => {
  const args = sig.arguments?.map(arg => arg.name);
  return `
  function ${sig.name}(${spreadArgsWithTypes(sig)}): ${sig.returnType || 'void'} {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        resolve();
        return;
      }

      if (!doesOneSignalExist()) {
        reactOneSignalFunctionQueue.push({
          name: '${sig.name}',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      try {
        window["OneSignal"].push(() => {
          window["OneSignal"].${sig.name}(${spreadArgs(args)})
            .then((value: any) => resolve(value))
            .catch((error: any) => reject(error));
        });
      } catch (error) {
        reject(error);
      }
    });
  }`
};

export const reactOneSignalFunctionTemplate = (sig: IFunctionSignature) => {
  const args = sig.arguments?.map(arg => arg.name);
  return `
  function ${sig.name}(${spreadArgsWithTypes(sig)}): ${sig.returnType || 'void'} {
    if (!doesOneSignalExist()) {
      reactOneSignalFunctionQueue.push({
        name: '${sig.name}',
        args: arguments,
      });
      return;
    }

    window["OneSignal"].push(() => {
      window["OneSignal"].${sig.name}(${spreadArgs(args)})
    });
  }`
};
