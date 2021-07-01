import { IArgument } from "./Argument";

export interface IFunctionSignature {
  name: string;
  isAsync: boolean;
  arguments?: IArgument[];
  returnType?: string;
}
