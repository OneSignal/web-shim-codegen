import { IFunctionSignature } from './FunctionSignature';

export type TemplateVariant = 'sync' | 'async';

type TemplateFunction = (
  sig: IFunctionSignature,
  uniqueFunctionName: string,
  namespaceChain: string[],
) => string;

export interface ITemplateFunctionMap {
  [key: string]: Record<TemplateVariant, TemplateFunction>;
}
