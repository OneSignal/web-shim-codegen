import { IFunctionSignature } from "./models/FunctionSignature";

export const PATHS = {
  ONESIGNAL_STUBS : '/OneSignal/OneSignal-Website-SDK/master/src/utils/OneSignalStub.ts',
  ONESIGNAL_MAIN  : '/OneSignal/OneSignal-Website-SDK/master/src/OneSignal.ts',
};

export const GITHUB_URL = "https://raw.githubusercontent.com";

// OneSignal WebSDK functions we should not add to the package
export const FUNCTION_IGNORE = ["init"];

export const INITIALIZE_FUNCTION_SIG = {
  name: "initialize",
  isAsync: true,
  arguments: [
    {
      name: "appId",
      type: "string",
      optional: false
    },
    {
      name: "options",
      type: "any",
      optional: true
    },
    {
      name: "events",
      type: "Array<IOneSignalEvent>",
      optional: true
    }
  ],
  returnType: "Promise<void>"
} as IFunctionSignature;

export const FILE_WRITTEN_IN_PURE_JS = "// file written in pure JS";
