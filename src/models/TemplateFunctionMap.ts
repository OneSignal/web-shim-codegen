import { IFunctionSignature } from "./FunctionSignature";

interface ITemplateFunctionTuple {
  sync: (sig: IFunctionSignature, uniqueFunctionName: string, namespaceName: string) => string;
  async: (sig: IFunctionSignature, uniqueFunctionName: string, namespaceName: string) => string;
  addListenerOverloads: string;
  removeListenerOverloads: string;
}

export interface ITemplateFunctionMap {
  [key: string]: ITemplateFunctionTuple
}
