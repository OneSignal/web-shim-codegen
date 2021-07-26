import { IFunctionSignature } from "../../models/FunctionSignature";
import { spreadArgs } from "../../support/utils";

export const reactOneSignalAsyncFunctionTemplate = (sig: IFunctionSignature) => {
  const args = sig.arguments?.map(arg => arg.name);
  return `
  function ${sig.name}(${spreadArgs(args)}) {
    return new Promise((resolve, reject) => {
      if (!doesOneSignalExist()) {
        reactOneSignalFunctionQueue.push({
          name: "${sig.name}",
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      try {
        OneSignal.push(() => {
          OneSignal.${sig.name}(${spreadArgs(args)})
            .then((value) => resolve(value))
            .catch((error) => reject(error));
        });
      } catch (error) {
        reject(error);
      }
    });
  };`
};

export const reactOneSignalFunctionTemplate = (sig: IFunctionSignature) => {
  const args = sig.arguments?.map(arg => arg.name);
  return `
  function ${sig.name}(${spreadArgs(args)}) {
    const oneSignal = window["OneSignal"] || null;
    if (!oneSignal) {
      reactOneSignalFunctionQueue.push({
        name: "${sig.name}",
        args: arguments,
      });
      return;
    }

    OneSignal.push(() => {
      OneSignal.${sig.name}(${spreadArgs(args)})
    });
  };`
};
