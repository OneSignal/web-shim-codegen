import { IFunctionSignature } from "./FunctionSignature";

interface ITemplateFunctionTuple {
  sync: (sig: IFunctionSignature) => string;
  async: (sig: IFunctionSignature) => string;
}

export interface ITemplateFunctionMap {
  [key: string]: ITemplateFunctionTuple
}
