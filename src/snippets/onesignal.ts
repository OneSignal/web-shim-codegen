import { spreadArgs } from "../utils";

export const oneSignalFunctionTemplate = (name: string, args: string[]) => (`
const ${name} = (${spreadArgs(args)}) => new Promise((resolve, reject) => {
  const oneSignal = getOneSignalInstance();

  if (!oneSignal) {
    reject(new Error(ONESIGNAL_NOT_SETUP_ERROR));
    return;
  }

  try {
    oneSignal.${name}(${spreadArgs(args)})
      .then((value) => resolve(value))
      .catch((error) => reject(error));
  } catch (error) {
    reject(error);
  }
});`);
