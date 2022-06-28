import { CodeWriter } from "@yellicode/core";
import { IFunctionSignature } from "../../models/FunctionSignature";
import { ACTION,
  AUTO_PROMPT_OPTIONS,
  CATEGORY_OPTIONS,
  REGISTER_OPTIONS,
  SET_EMAIL_OPTIONS,
  SET_SMS_OPTIONS,
  SLIDEDOWN_OPTIONS,
  TAGS_OBJECT,
  TAG_CATEGORY } from "../../snippets/types";
import { ReaderManager } from "../ReaderManager";

export abstract class TypingsWriterManagerBase extends CodeWriter {
  public getFunctionSignatureString(sig: IFunctionSignature): string {
    let argumentsString = "";

    if (sig.arguments) {
      sig.arguments.forEach(arg => {
        const optionalValue = arg.optional ? "?" : "";
        argumentsString = argumentsString + arg.name + optionalValue + ": "+arg.type+", ";
      });
      argumentsString = argumentsString.trim();
    }
    return `${sig.name}(${argumentsString.slice(0, -1)}): ${sig.returnType}`;
  }

  public writeFunctionTypes(functions: IFunctionSignature[], tabs?: number): void {
    const prefix = '\t'.repeat(tabs || 1);
    [...functions].forEach(func => {
      this.writeLine(`${prefix}${this.getFunctionSignatureString(func)}`);
    });
  }
  /**
   * @param  {number} tabs - how many tabs should be added in front of helper interfaces
   * @returns void
   */
  public async writeInterfaces(tabs: number): Promise<void> {
    const initObjectInterfaceContents = await ReaderManager.readFile(__dirname.replace('ts-to-es6/', '') + `/../../snippets/InitObject.ts`);

    const prefix = "\t".repeat(tabs);
    this.writeLine(prefix+ACTION);
    this.writeLine(prefix+AUTO_PROMPT_OPTIONS);
    this.writeLine(prefix+REGISTER_OPTIONS);
    this.writeLine(prefix+SET_SMS_OPTIONS);
    this.writeLine(prefix+SET_EMAIL_OPTIONS);
    this.writeLine(prefix+TAGS_OBJECT);
    this.writeLine(prefix+SLIDEDOWN_OPTIONS);
    this.writeLine(prefix+CATEGORY_OPTIONS);
    this.writeLine(prefix+TAG_CATEGORY);
    this.writeLine();
    this.writeLine(initObjectInterfaceContents);
  }
}
