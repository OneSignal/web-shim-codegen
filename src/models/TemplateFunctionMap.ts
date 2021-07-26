interface ITemplateFunctionTuple {
  sync: Function;
  async: Function;
}

export interface ITemplateFunctionMap {
  [key: string]: ITemplateFunctionTuple
}
