import { IFunctionSignature } from "./FunctionSignature";

interface ITemplateFunctionTuple {
  sync: (sig: IFunctionSignature, uniqueFunctionName: string, namespaceChain: string[]) => string;
  async: (sig: IFunctionSignature, uniqueFunctionName: string, namespaceChain: string[]) => string;
}

export interface ITemplateFunctionMap {
  [key: string]: ITemplateFunctionTuple
}
