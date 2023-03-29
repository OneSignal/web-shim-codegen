import { IFunctionSignature } from "./FunctionSignature"
import IProperty from "./IProperty"

export default interface IOneSignalApi {
  [key: string]: {
    properties?: IProperty[]
    functions: IFunctionSignature[],
    namespaces: string[],
  }
}
