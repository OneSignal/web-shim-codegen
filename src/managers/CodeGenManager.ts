import { TextWriter } from "@yellicode/core";
import { Generator } from "@yellicode/templating";
import { FileFetchManager } from "./FileFetchManager";
import { Shim } from "../models/Shim";
import { ReactOneSignalWriterManager } from "./shims/react/ReactOneSignalWriterManager";
import { Vue2OneSignalWriterManager } from "./shims/vue2/Vue2OneSignalWriterManager";
import { Vue3OneSignalWriterManager } from "./shims/vue3/Vue3OneSignalWriterManager";
import { OneSignalWriterManagerBase } from "./bases/OneSignalWriterManagerBase";
import { NgOneSignalWriterManager } from "./shims/angular/NgOneSignalWriterManager";
import { NgTypingsWriterManager } from "./shims/angular/NgTypingsWriterManager";
import IOneSignalApi from "../models/OneSignalApi";

export class CodeGenManager {
  /**
   * @param  {Shim} shim - Vue, React, or Angular
   * @param  {IFunctionSignature[]} functions - Function signature array
   */
  constructor(readonly shim: Shim, readonly api: IOneSignalApi) {}

  static async fetchApi(): Promise<IOneSignalApi> {
    const rawJson = await FileFetchManager.getApiSpec();
    return JSON.parse(rawJson) as IOneSignalApi;
  }

  public write(): void {
    switch (this.shim) {
      case Shim.React:
      case Shim.Vue2:
      case Shim.Vue3:
        this.writeIndexFile();
        break;
      case Shim.Angular:
        this.writeNgServiceFile();
        break;
      default:
        break;
    }
  }

  private writeIndexFile(): void {
    Generator.generateAsync({outputFile: `../build/${this.shim}/index.ts`}, async (writer: TextWriter) => {
      let oneSignalWriter: OneSignalWriterManagerBase;
      switch (this.shim) {
        case Shim.React:
          oneSignalWriter = new ReactOneSignalWriterManager(writer, this.api);
          break;
        case Shim.Vue2:
          oneSignalWriter = new Vue2OneSignalWriterManager(writer, this.api);
          break;
        case Shim.Vue3:
          oneSignalWriter = new Vue3OneSignalWriterManager(writer, this.api);
          break;
      }
      await oneSignalWriter.writeSupportCode();
      oneSignalWriter.writeOneSignalFunctions(this.api);
      await oneSignalWriter.writeExportCode(this.api);
    });
  }

  public writeNgServiceFile(): void {
    Generator.generateAsync({ outputFile: `../src/scaffolds/angular-workspace/projects/onesignal-ngx/src/lib/onesignal-ngx.service.ts` }, async (writer: TextWriter) => {
      if (this.shim !== Shim.Angular) {
        console.error(`writeNgServiceFile: this function can only be used with the Angular shim build.`);
        return;
      }

      const oneSignalWriter = new NgOneSignalWriterManager(writer, this.api);
      const typingsWriter = new NgTypingsWriterManager(writer);
      await typingsWriter.writeInterfaces(0);
      await oneSignalWriter.writeSupportCode();
      oneSignalWriter.writeOneSignalFunctions(this.api);
      oneSignalWriter.writeLine('}');
    })
  }
}
