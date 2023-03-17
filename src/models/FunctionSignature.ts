import { IArgument } from "./Argument";

export interface IFunctionSignature {
  name: string;
  isAsync: boolean;
  args?: IArgument[];
  returnType?: string;
}
