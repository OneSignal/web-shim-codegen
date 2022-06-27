import { TextWriter } from "@yellicode/core";
import { Generator } from "@yellicode/templating";
import { FileFetchManager } from "./FileFetchManager";
import { IFunctionSignature } from "../models/FunctionSignature";
import { BuildHelperWriterManager } from "./BuildHelperWriterManager";
import { INIT_FUNCTION_SIG, OFF_FUNCTION_SIG, ONCE_FUNCTION_SIG, ON_FUNCTION_SIG } from "../support/functionSignatures";
import { Shim } from "../models/Shim";
import { ReactOneSignalWriterManager } from "./shims/react/ReactOneSignalWriterManager";
import { VueOneSignalWriterManager } from "./shims/vue/VueOneSignalWriterManager";
import { OneSignalWriterManagerBase } from "./bases/OneSignalWriterManagerBase";
import { NgOneSignalWriterManager } from "./shims/angular/NgOneSignalWriterManager";
import { NgTypingsWriterManager } from "./shims/angular/NgTypingsWriterManager";
import { BuildSubdirectory } from "../models/BuildSubdirectory";

export class CodeGenManager {
  private oneSignalFunctions: IFunctionSignature[];

  /**
   * @param  {Shim} shim - Vue, React, or Angular
   * @param  {IFunctionSignature[]} functions - Function signature array
   * @param  {BuildSubdirectory} subdir? - *optional* argument to create separate build subdirectory (e.g: vue/v2 and vue/v3)
   */
  constructor(readonly shim: Shim, functions: IFunctionSignature[], readonly subdir: BuildSubdirectory = "") {
    this.oneSignalFunctions = functions;
  }

  static async fetchOneSignalFunctions(): Promise<IFunctionSignature[]> {
    let oneSignalFunctions = await FileFetchManager.getFunctions();
    oneSignalFunctions.unshift(INIT_FUNCTION_SIG, ON_FUNCTION_SIG, OFF_FUNCTION_SIG, ONCE_FUNCTION_SIG);
    return oneSignalFunctions;
  }

  public writeIndexFile(extension: string): void {
    Generator.generateAsync({outputFile: `./build/${this.shim}/${this.subdir}/index.${extension}`}, async (writer: TextWriter) => {
      let oneSignalWriter: OneSignalWriterManagerBase;
      switch (this.shim) {
        case Shim.React:
          oneSignalWriter = new ReactOneSignalWriterManager(writer, this.oneSignalFunctions);
          break;
        case Shim.Vue:
          oneSignalWriter = new VueOneSignalWriterManager(writer, this.oneSignalFunctions, this.subdir);
          break;
      }
      await oneSignalWriter.writeSupportCode();
      oneSignalWriter.writeOneSignalFunctions(this.oneSignalFunctions);
      const functionNames = this.oneSignalFunctions.map(sig => (sig.name));
      await oneSignalWriter.writeExportCode([...functionNames]);
    });
  }

  public writeNgServiceFile(): void {
    Generator.generateAsync({ outputFile: `./src/scaffolds/angular-workspace/projects/onesignal-ngx/src/lib/onesignal-ngx.service.ts` }, async (writer: TextWriter) => {
      if (this.shim !== Shim.Angular) {
        console.error(`writeNgServiceFile: this function can only be used with the Angular shim build.`);
        return;
      }

      const oneSignalWriter = new NgOneSignalWriterManager(writer, this.oneSignalFunctions);
      const typingsWriter = new NgTypingsWriterManager(writer);
      await typingsWriter.writeInterfaces(0);
      await oneSignalWriter.writeSupportCode();
      await oneSignalWriter.writeServiceClass();
      oneSignalWriter.writeOneSignalFunctions(this.oneSignalFunctions);
      oneSignalWriter.writeLine('}');
    })
  }
}
