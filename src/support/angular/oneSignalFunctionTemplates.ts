import { IFunctionSignature } from "../../models/FunctionSignature";
import { spreadArgs, spreadArgsWithTypes } from "../utils";

export const ngOneSignalAsyncFunctionTemplate = (sig: IFunctionSignature) => {
  const args = sig.arguments?.map(arg => arg.name);
  return `
  ${sig.name}(${spreadArgsWithTypes(sig)}): ${sig.returnType || 'void'} {
    return new Promise((resolve, reject) => {
      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: '${sig.name}',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignal.push(() => {
        window.OneSignal.${sig.name}(${spreadArgs(args)})
          .then((value: ${sig.returnType}) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }`
};

export const ngOneSignalFunctionTemplate = (sig: IFunctionSignature) => {
  const args = sig.arguments?.map(arg => arg.name);
  return `
  ${sig.name}(${spreadArgsWithTypes(sig)}): ${sig.returnType || 'void'} {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: '${sig.name}',
        args: arguments,
      });
      return;
    }

    window.OneSignal.push(() => {
      window.OneSignal.${sig.name}(${spreadArgs(args)});
    });
  }`
};
