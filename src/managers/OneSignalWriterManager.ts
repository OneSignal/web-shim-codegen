import { CodeWriter } from '@yellicode/core';
import { oneSignalFunctionTemplate } from '../snippets/onesignal';
import {
  eventListenersTemplate,
  initOneSignalTemplate,
  injectModuleScriptTemplate,
  injectOneSignalSDKScriptTemplate,
  injectScriptTemplate,
  moduleScriptTemplate,
  oneSignalInstanceScriptTemplate,
  scriptConstantsTemplate } from '../snippets/support';

export class OneSignalWriterManager extends CodeWriter {
  public writeOneSignalFunction(name: string, args: string[]): void {
    this.writeLine(oneSignalFunctionTemplate(name, args));
  }

  public writeSupportCode(): void {
    this.writeConstants();
    this.writeEventListenersFunction();
    this.writeGetModuleScript();
    this.writeInjectScript();
    this.writeOneSignalSDKScript();
    this.writeModuleScript();
    this.writeOneSignalInstanceGetter();
    this.writeOneSignalInit();
  }

  public writeExportCode(exportFunctions: string[]): void {
    this.writeLine("\nconst OneSignalReact = {");
    exportFunctions.forEach(func => {
      this.writeLine(`\t${func},`);
    })
    this.writeLine("};");
    this.writeLine("export default OneSignalReact");
  }

  private writeConstants(): void {
    this.writeLine(scriptConstantsTemplate());
  }

  private writeEventListenersFunction(): void {
    this.writeLine(eventListenersTemplate());
  }

  private writeGetModuleScript(): void {
    this.writeLine(moduleScriptTemplate());
  }

  private writeInjectScript(): void {
    this.writeLine(injectScriptTemplate())
  }

  private writeOneSignalSDKScript(): void {
    this.writeLine(injectOneSignalSDKScriptTemplate());
  }

  private writeModuleScript(): void {
    this.writeLine(injectModuleScriptTemplate());
  }

  private writeOneSignalInit(): void {
    this.writeLine(initOneSignalTemplate());
  }

  private writeOneSignalInstanceGetter(): void {
    this.writeLine(oneSignalInstanceScriptTemplate());
  }
}
