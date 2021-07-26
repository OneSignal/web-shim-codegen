import { spreadArgs } from "../utils";

export const oneSignalAsyncFunctionTemplate = (name: string, args: string[]) => (`
function ${name}(${spreadArgs(args)}) {
  return new Promise((resolve, reject) => {
    const oneSignal = window["OneSignal"] || null;
    if (!oneSignal) {
      reactOneSignalFunctionQueue.push({
        name: "${name}",
        args: arguments,
        promiseResolver: resolve,
      });
      return;
    }

    try {
      OneSignal.push(() => {
        OneSignal.${name}(${spreadArgs(args)})
          .then((value) => resolve(value))
          .catch((error) => reject(error));
      });
    } catch (error) {
      reject(error);
    }
  });
};`);

export const oneSignalFunctionTemplate = (name: string, args: string[]) => (`
function ${name}(${spreadArgs(args)}) {
  const oneSignal = window["OneSignal"] || null;
  if (!oneSignal) {
    reactOneSignalFunctionQueue.push({
      name: "${name}",
      args: arguments,
    });
    return;
  }

  OneSignal.push(() => {
    OneSignal.${name}(${spreadArgs(args)})
  });
};`);
