import { IFunctionSignature } from "../../models/FunctionSignature";
import { spreadArgs, spreadArgsWithTypes } from "../../support/utils";

export const vueOneSignalAsyncFunctionTemplate = (sig: IFunctionSignature) => {
  const args = sig.arguments?.map(arg => arg.name);
  return `
  function ${sig.name}(${spreadArgsWithTypes(sig)}): ${sig.returnType || 'void'} {
    return new Promise(function (resolve, reject) {
      if (!doesOneSignalExist()) {
        vueOneSignalFunctionQueue.push({
          name: '${sig.name}',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.${sig.name}(${spreadArgs(args)})
          .then(value => resolve(value))
          .catch(error => reject(error));
      });
    });
  }`
};

export const vueOneSignalFunctionTemplate = (sig: IFunctionSignature) => {
  const args = sig.arguments?.map(arg => arg.name);
  return `
  function ${sig.name}(${spreadArgsWithTypes(sig)}): ${sig.returnType || 'void'} {
    if (!doesOneSignalExist()) {
      vueOneSignalFunctionQueue.push({
        name: '${sig.name}',
        args: arguments,
      });
      return;
    }

    window.OneSignal.push(() => {
      window.OneSignal.${sig.name}(${spreadArgs(args)})
    });
  }`
};
