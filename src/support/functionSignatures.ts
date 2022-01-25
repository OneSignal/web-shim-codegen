import { IFunctionSignature } from "../models/FunctionSignature";

export const INIT_FUNCTION_SIG = {
  name: "init",
  isAsync: true,
  arguments: [
    {
      name: "options",
      type: "IInitObject",
      optional: false
    },
  ],
  returnType: "Promise<void>"
} as IFunctionSignature;

const EVENTS_FUNCTION_SIG = {
  isAsync: false,
  arguments: [
    {
      name: "event",
      type: "string",
      optional: false
    },
    {
      name: "listener",
      type: "() => void",
      optional: false
    }
  ],
  returnType: 'void'
} as IFunctionSignature;

export const ON_FUNCTION_SIG = { name: "on", ...EVENTS_FUNCTION_SIG };
export const OFF_FUNCTION_SIG = { name: "off", ...EVENTS_FUNCTION_SIG };
export const ONCE_FUNCTION_SIG = { name: "once", ...EVENTS_FUNCTION_SIG };