import { spreadArgs } from "../utils";

export const oneSignalFunctionTemplate = (name: string, args: string[]) => (`
export function ${name}(${spreadArgs(args)}) {
  return new Promise((resolve, reject) => {
    const oneSignal = getOneSignalInstance();
    if (!oneSignal) {
      REACT_ONESIGNAL_FUNCTION_QUEUE.push({
        name: "${name}",
        args: arguments
      });
      return;
    }

    try {
      oneSignal.${name}(${spreadArgs(args)})
        .then((value) => resolve(value))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  })
};`);
