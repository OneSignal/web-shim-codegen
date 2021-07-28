import { IFunctionSignature } from "../../../models/FunctionSignature";
import { TypingsWriterManagerBase } from "../../bases/TypingsWriterManagerBase";

export class ReactTypingsWriterManager extends TypingsWriterManagerBase {
  public writeOneSignalModule(functions: IFunctionSignature[]): void {
    this.writeLine("declare module 'react-onesignal' {");
    this.writeInterfaces(1);
    this.writeLine("\n\tinterface OneSignalReact {");
    this.writeFunctionTypes(functions, 2);
    this.writeLine("\t}\n\tconst OneSignalReact: OneSignalReact;\n\texport default OneSignalReact;");
    this.writeLine("}");
  }
}
