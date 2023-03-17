import { IFunctionSignature } from "../../models/FunctionSignature";
import { spreadArgs, spreadArgsWithTypes } from "../utils";

export const ngOneSignalAsyncFunctionTemplate = (sig: IFunctionSignature, namespaceName?: string) => {
  const args = sig.args?.map(arg => arg.name);
  return `
  ${sig.name}(${spreadArgsWithTypes(sig)}): ${sig.returnType || 'void'} {
    return new Promise((resolve, reject) => {
      if (isOneSignalScriptFailed) {
        reject();
      }

      if (!this.doesOneSignalExist()) {
        this.ngOneSignalFunctionQueue.push({
          name: '${sig.name}',
          namespaceName: '${namespaceName}',
          args: arguments,
          promiseResolver: resolve,
        });
        return;
      }

      window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
        oneSignal.${namespaceName}${namespaceName !== '' ? '.' : ''}${sig.name}(${spreadArgs(args)})
          .then((value: ${sig.returnType}) => resolve(value))
          .catch((error: Error) => reject(error));
      });
    });
  }`
};

export const ngOneSignalFunctionTemplate = (sig: IFunctionSignature, namespaceName?: string) => {
  const args = sig.args?.map(arg => arg.name);
  return `
  ${sig.name}(${spreadArgsWithTypes(sig)}): ${sig.returnType || 'void'} {
    if (!this.doesOneSignalExist()) {
      this.ngOneSignalFunctionQueue.push({
        name: '${sig.name}',
        namespaceName: '${namespaceName}',
        args: arguments,
      });
      return;
    }

    window.OneSignalDeferred?.push((oneSignal: IOneSignalOneSignal) => {
      oneSignal.${sig.name}(${spreadArgs(args)});
    });
  }`
};
