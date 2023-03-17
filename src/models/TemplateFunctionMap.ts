import { IFunctionSignature } from "./FunctionSignature";

interface ITemplateFunctionTuple {
  sync: (sig: IFunctionSignature, namespaceName?: string) => string;
  async: (sig: IFunctionSignature, namespaceName?: string) => string;
  addListenerOverloads: string;
  removeListenerOverloads: string;
}

export interface ITemplateFunctionMap {
  [key: string]: ITemplateFunctionTuple
}
