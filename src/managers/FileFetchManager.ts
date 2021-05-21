import { FUNCTION_IGNORE, PATHS } from "../constants";
import { IFunctionSignature } from "../models/FunctionSignature";
import { createRegex, remoteFetchFile, parseFunctionSig } from "../utils";

export class FileFetchManager {
  static async getStubs() {
    const stubFile = await remoteFetchFile(PATHS.ONESIGNAL_STUBS);
    let regex = /FUNCTION_LIST_WITH_PROMISE_TO_STUB = \[([a-zA-Z\s,\"_]*)\]/;
    return stubFile.match(regex)[1].split("\n    \"").join("").split("\",").join(',').split("\"\n  ").join("").split(",");
  }

  static async getFunctions(): Promise<IFunctionSignature[]> {
    const mainFile = await remoteFetchFile(PATHS.ONESIGNAL_MAIN);
    let signatures = [];
    (await FileFetchManager.getStubs()).forEach(stub => {
      const reg = createRegex(stub);

      let match = mainFile.match(reg);
      if (match && match.length > 0) {
        const sig = parseFunctionSig(match[0]);
        if (FUNCTION_IGNORE.indexOf(sig.name) === -1) {
          signatures.push(sig);
        }
      }
    });
    return signatures as IFunctionSignature[];
  }
}
