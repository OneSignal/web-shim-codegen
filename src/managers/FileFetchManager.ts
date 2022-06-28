import { FUNCTION_IGNORE, PATHS } from "../support/constants";
import { IFunctionSignature } from "../models/FunctionSignature";
import { createRegex, remoteFetchFile, parseFunctionSig } from "../support/utils";

export class FileFetchManager {
  static async getStubs(): Promise<string[]> {
    const stubFile = await remoteFetchFile(PATHS.ONESIGNAL_STUBS);
    const regex = /FUNCTION_LIST_WITH_PROMISE_TO_STUB = \[([a-zA-Z\s,\"_]*)\]/;
    const match = stubFile.match(regex)[1]
    // removes unwanted characters and returns simple array of functions
    return match.split("\n    \"").join("").split("\",").join(',').split("\"\n  ").join("").split(",");
  }

  static async getFunctions(): Promise<IFunctionSignature[]> {
    const mainFile = await remoteFetchFile(PATHS.ONESIGNAL_MAIN);
    const signatures = [];
    (await FileFetchManager.getStubs()).forEach(stub => {
      const reg = createRegex(stub);

      const match = mainFile.match(reg);
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
