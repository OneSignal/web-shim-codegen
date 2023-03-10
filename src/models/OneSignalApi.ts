import { IFunctionSignature } from "./FunctionSignature"

export default interface IOneSignalApi {
  [key: string]: {
    functions: IFunctionSignature[],
    namespaces: string[]
  }
}
