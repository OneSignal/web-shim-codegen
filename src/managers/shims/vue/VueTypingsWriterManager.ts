import { IFunctionSignature } from "../../../models/FunctionSignature";
import { TypingsWriterManagerBase } from "../../bases/TypingsWriterManagerBase";

export class VueTypingsWriterManager extends TypingsWriterManagerBase {
  public writeOneSignalInterface(functions: IFunctionSignature[]): void {
    this.writeLine(`interface IOneSignal {`);
    this.writeFunctionTypes(functions, 1);
    this.writeLine(`\t[index: string]: Function;`);
    this.writeLine(`}`)
    this.writeLine('\n');
  }
}