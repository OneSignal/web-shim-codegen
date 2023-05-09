import { IArgument } from "./Argument";

export interface IFunctionSignature {
  name: string;
  isAsync: boolean;
  genericTypeParameter?: string;
  args?: IArgument[];
  returnType?: string;
}
