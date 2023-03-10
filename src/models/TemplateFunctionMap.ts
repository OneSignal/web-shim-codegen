import { IFunctionSignature } from "./FunctionSignature";

interface ITemplateFunctionTuple {
  sync: (sig: IFunctionSignature, namespaceName?: string) => string;
  async: (sig: IFunctionSignature, namespaceName?: string) => string;
}

export interface ITemplateFunctionMap {
  [key: string]: ITemplateFunctionTuple
}
