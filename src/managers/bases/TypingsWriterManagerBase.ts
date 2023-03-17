import { CodeWriter } from "@yellicode/core";
import { IFunctionSignature } from "../../models/FunctionSignature";
import { ACTION,
  AUTO_PROMPT_OPTIONS,
  CATEGORY_OPTIONS,
  NOTIFICATION_BUTTON_DATA,
  NOTIFICATION_EVENT_NAME,
  PUSH_SUBSCRIPTION_NAMESPACE_PROPERTIES,
  SLIDEDOWN_EVENT_NAME,
  SLIDEDOWN_OPTIONS,
  STRUCTURED_NOTIFICATION,
  SUBSCRIPTION_CHANGE_EVENT,
  TAG_CATEGORY } from "../../snippets/types";
import { INTERFACE_PREFIX } from "../../support/constants";
import { ReaderManager } from "../ReaderManager";

export abstract class TypingsWriterManagerBase extends CodeWriter {
  public getFunctionSignatureString(sig: IFunctionSignature): string {
    let argumentsString = "";

    if (sig.args) {
      sig.args.forEach(arg => {
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

  public writeNamespaces(namespaces: string[], tabs?: number): void {
    const prefix = '\t'.repeat(tabs || 1);
    namespaces.forEach(namespace => {
      this.writeLine(`${prefix}${namespace}: ${INTERFACE_PREFIX}${namespace};`);
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
    this.writeLine(prefix+SLIDEDOWN_OPTIONS);
    this.writeLine(prefix+CATEGORY_OPTIONS);
    this.writeLine(prefix+TAG_CATEGORY);
    this.writeLine(prefix+PUSH_SUBSCRIPTION_NAMESPACE_PROPERTIES);
    this.writeLine(prefix+SUBSCRIPTION_CHANGE_EVENT);
    this.writeLine(prefix+NOTIFICATION_EVENT_NAME);
    this.writeLine(prefix+NOTIFICATION_BUTTON_DATA);
    this.writeLine(prefix+STRUCTURED_NOTIFICATION);
    this.writeLine(prefix+SLIDEDOWN_EVENT_NAME);
    this.writeLine();
    this.writeLine(initObjectInterfaceContents);
  }
}
