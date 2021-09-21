import { IFunctionSignature } from "../../../models/FunctionSignature";
import { TypingsWriterManagerBase } from "../../bases/TypingsWriterManagerBase";

export class ReactTypingsWriterManager extends TypingsWriterManagerBase {
  public async writeOneSignalModule(functions: IFunctionSignature[]): Promise<void> {
    this.writeLine("declare module 'react-onesignal' {");
    await this.writeInterfaces(1);
    this.writeLine("\tinterface OneSignalReact {");
    this.writeFunctionTypes(functions, 2);
    this.writeLine("\t}\n\tconst OneSignalReact: OneSignalReact;\n\texport default OneSignalReact;");
    this.writeLine("}");
  }
}
