import { IFunctionSignature } from "./FunctionSignature";

interface ITemplateFunctionTuple {
  sync: (sig: IFunctionSignature, uniqueFunctionName: string, namespaceChain: string[]) => string;
  async: (sig: IFunctionSignature, uniqueFunctionName: string, namespaceChain: string[]) => string;
  addListenerOverloads: string;
  removeListenerOverloads: string;
}

export interface ITemplateFunctionMap {
  [key: string]: ITemplateFunctionTuple
}
