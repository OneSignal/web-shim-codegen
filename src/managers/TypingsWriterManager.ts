import { CodeWriter } from "@yellicode/core";
import { IFunctionSignature } from "../models/FunctionSignature";
import { ACTION,
  AUTO_PROMPT_OPTIONS,
  CATEGORY_OPTIONS,
  REGISTER_OPTIONS,
  SET_EMAIL_OPTIONS,
  SET_SMS_OPTIONS,
  SLIDEDOWN_OPTIONS,
  TAGS_OBJECT } from "../snippets/types";

export class TypingsWriterManager extends CodeWriter {
  public writeOneSignalInterface(functions: IFunctionSignature[]): void {
    this.writeLine("declare module 'react-onesignal' {");
    this.writeInterfaces();
    this.writeLine("\n\tinterface OneSignalReact {");
    [...functions].forEach(func => {
      this.writeLine(`\t\t${this.getFunctionSignatureString(func)}`);
    });
    this.writeLine("\t}\n\tconst OneSignalReact: OneSignalReact;\n\texport default OneSignalReact;");
    this.writeLine("}");
  }

  private getFunctionSignatureString(sig: IFunctionSignature): string {
    let argumentsString = "";

    if (sig.arguments) {
      sig.arguments.forEach(arg => {
        const optionalValue = arg.optional ? "?" : "";
        argumentsString = argumentsString + arg.name + optionalValue + ": "+arg.type+", ";
      });
      argumentsString = argumentsString.trim();
    }
    return `${sig.name}(${argumentsString.slice(0, -1)}): ${sig.returnType || "void"}`;
  }

  private writeInterfaces(): void {
    this.writeLine("\t"+ACTION);
    this.writeLine("\t"+AUTO_PROMPT_OPTIONS);
    this.writeLine("\t"+REGISTER_OPTIONS);
    this.writeLine("\t"+SET_SMS_OPTIONS);
    this.writeLine("\t"+SET_EMAIL_OPTIONS);
    this.writeLine("\t"+TAGS_OBJECT);
    this.writeLine("\t"+SLIDEDOWN_OPTIONS);
    this.writeLine("\t"+CATEGORY_OPTIONS);
  }
}
