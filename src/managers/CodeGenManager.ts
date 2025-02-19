import { TextWriter } from "@yellicode/core";
import { Generator } from "@yellicode/templating";
import { FileFetchManager } from "./FileFetchManager";
import { Shim } from "../models/Shim";
import { ReactOneSignalWriterManager } from "./shims/react/ReactOneSignalWriterManager";
import { VueOneSignalWriterManager } from "./shims/vue/VueOneSignalWriterManager";
import { OneSignalWriterManagerBase } from "./bases/OneSignalWriterManagerBase";
import { NgOneSignalWriterManager } from "./shims/angular/NgOneSignalWriterManager";
import { BuildSubdirectory } from "../models/BuildSubdirectory";
import IOneSignalApi from "../models/OneSignalApi";
import { TypingsWriterManager } from "./TypingsWriterManager";

export class CodeGenManager {
  /**
   * @param  {Shim} shim - Vue, React, or Angular
   * @param {IOneSignalApi} api - API spec
   * @param  {BuildSubdirectory} subdir? - *optional* argument to create separate build subdirectory (e.g: vue/v2 and vue/v3)
   */
  constructor(readonly shim: Shim, readonly api: IOneSignalApi, readonly subdir: BuildSubdirectory = "") {}

  static async fetchApi(): Promise<IOneSignalApi> {
    const rawJson = await FileFetchManager.getApiSpec();
    return JSON.parse(rawJson) as IOneSignalApi;
  }

  public write(): void {
    switch (this.shim) {
      case Shim.React:
      case Shim.Vue:
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
    Generator.generateAsync({outputFile: `../build/${this.shim}/${this.subdir}/index.ts`}, async (writer: TextWriter) => {
      let oneSignalWriter: OneSignalWriterManagerBase;
      switch (this.shim) {
        case Shim.React:
          oneSignalWriter = new ReactOneSignalWriterManager(writer, this.api);
          break;
        case Shim.Vue:
          oneSignalWriter = new VueOneSignalWriterManager(writer, this.api, this.subdir);
          break;
      }
      await oneSignalWriter.writeSupportCode();
      oneSignalWriter.writeOneSignalFunctions(this.api, ["OneSignal"]);
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
      const typingsWriter = new TypingsWriterManager(writer);
      await typingsWriter.writeInterfaces(0);
      typingsWriter.writeOneSignalInterfaces(this.api);
      // write all the OneSignal functions we need to the outer-most scope of the file
      oneSignalWriter.writeOneSignalFunctions(this.api, ["OneSignal"]);
      oneSignalWriter.writeLine();
      // write the individual namespaces like User, Notification, etc. containing the previously written functions
      oneSignalWriter.defineFunctionNamespaces();
      // write the OneSignal class (open)
      await oneSignalWriter.writeSupportCode();
      // assign the previously written namespaces to the OneSignal class
      oneSignalWriter.assignOneSignalNamespaces();
      // assign the previously written functions to the OneSignal class
      oneSignalWriter.assignOneSignalFunctions();
      // close the OneSignal class
      oneSignalWriter.writeLine('}');
    })
  }
}
