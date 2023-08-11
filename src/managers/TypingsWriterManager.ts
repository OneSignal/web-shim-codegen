import { CodeWriter } from "@yellicode/core";
import { IFunctionSignature } from "../models/FunctionSignature";
import IOneSignalApi from "../models/OneSignalApi";
import {
  AUTO_PROMPT_OPTIONS,
  CATEGORY_OPTIONS,
  NOTIFICATION_BUTTON_ACTION_BUTTON,
  NOTIFICATION_CLICK_EVENT,
  NOTIFICATION_CLICK_RESULT,
  NOTIFICATION_DISMISS_EVENT,
  NOTIFICATION_EVENT_NAME,
  NOTIFICATION_EVENT_TYPE_MAP,
  NOTIFICATION_FOREGROUND_WILL_DISPLAY_EVENT,
  ONESIGNAL_DEFERRED_CALLBACK,
  OS_NOTIFICATION,
  PUSH_SUBSCRIPTION_NAMESPACE_PROPERTIES,
  SLIDEDOWN_EVENT_NAME,
  SLIDEDOWN_OPTIONS,
  SUBSCRIPTION_CHANGE_EVENT,
  TAG_CATEGORY } from "../snippets/types";
import { INTERFACE_PREFIX } from "../support/constants";
import { ReaderManager } from "./ReaderManager";

export class TypingsWriterManager extends CodeWriter {
  public getFunctionSignatureString(sig: IFunctionSignature): string {
    let argumentsString = "";

    if (sig.args) {
      sig.args.forEach(arg => {
        const optionalValue = arg.optional ? "?" : "";
        argumentsString = argumentsString + arg.name + optionalValue + ": "+arg.type+", ";
      });
      argumentsString = argumentsString.trim();
    }
    return `${sig.name}${sig.genericTypeParameter ?? ''}(${argumentsString.slice(0, -1)}): ${sig.returnType}`;
  }

  public writeFunctionTypes(functions: IFunctionSignature[], tabs?: number): void {
    const prefix = '\t'.repeat(tabs || 1);
    [...functions].forEach(func => {
      this.writeLine(`${prefix}${this.getFunctionSignatureString(func)};`);
    });
  }

  public writeOneSignalInterfaces(api: IOneSignalApi): void {
    Object.keys(api).forEach(key => {
      const namespace = api[key];
      const { functions, namespaces, properties } = namespace;
      this.writeLine(`interface ${INTERFACE_PREFIX}${key} {`);

      if (properties) {
        properties.forEach(prop => {
          this.writeLine(`\t${prop.name}: ${prop.type};`);
        });
      }

      // Declaration of instance field not allowed after declaration of instance method. Instead, this should come at the beginning of the class/interface.
      if (namespaces) {
        this._writeNamespaces(namespaces, 1);
      }

      this.writeFunctionTypes(functions, 1);

      this.writeLine(`}`);
    });
  }

  private _writeNamespaces(namespaces: string[], tabs?: number): void {
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
    const initObjectInterfaceContents = await ReaderManager.readFile(__dirname.replace('ts-to-es6/', '') + `/../snippets/InitObject.ts`);

    const prefix = "\t".repeat(tabs);
    this.writeLine(prefix+AUTO_PROMPT_OPTIONS);
    this.writeLine(prefix+SLIDEDOWN_OPTIONS);
    this.writeLine(prefix+CATEGORY_OPTIONS);
    this.writeLine(prefix+TAG_CATEGORY);
    this.writeLine(prefix+PUSH_SUBSCRIPTION_NAMESPACE_PROPERTIES);
    this.writeLine(prefix+SUBSCRIPTION_CHANGE_EVENT);
    this.writeLine(prefix+NOTIFICATION_EVENT_NAME);
    this.writeLine(prefix+SLIDEDOWN_EVENT_NAME);
    this.writeLine(prefix+ONESIGNAL_DEFERRED_CALLBACK);
    this.writeLine(prefix+OS_NOTIFICATION);
    this.writeLine(prefix+NOTIFICATION_BUTTON_ACTION_BUTTON);
    this.writeLine(prefix+NOTIFICATION_CLICK_RESULT);
    this.writeLine(prefix+NOTIFICATION_EVENT_TYPE_MAP);
    this.writeLine(prefix+NOTIFICATION_FOREGROUND_WILL_DISPLAY_EVENT);
    this.writeLine(prefix+NOTIFICATION_DISMISS_EVENT);
    this.writeLine(prefix+NOTIFICATION_CLICK_EVENT);
    this.writeLine();
    this.writeLine(initObjectInterfaceContents);
  }
}
