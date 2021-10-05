import { TextWriter } from "@yellicode/core";
import { Generator } from "@yellicode/templating";
import { FileFetchManager } from "./FileFetchManager";
import { IFunctionSignature } from "../models/FunctionSignature";
import { BuildHelperWriterManager } from "./BuildHelperWriterManager";
import { INIT_FUNCTION_SIG, OFF_FUNCTION_SIG, ONCE_FUNCTION_SIG, ON_FUNCTION_SIG } from "../support/functionSignatures";
import { Shim } from "../models/Shim";
import { ReactTypingsWriterManager } from "./shims/react/ReactTypingsWriterManager";
import { ReactOneSignalWriterManager } from "./shims/react/ReactOneSignalWriterManager";
import { VueOneSignalWriterManager } from "./shims/vue/VueOneSignalWriterManager";
import { OneSignalWriterManagerBase } from "./bases/OneSignalWriterManagerBase";
import { NgOneSignalWriterManager } from "./shims/angular/NgOneSignalWriterManager";
import { NgTypingsWriterManager } from "./shims/angular/NgTypingsWriterManager";

export class CodeGenManager {
  private oneSignalFunctions: IFunctionSignature[];

  constructor(readonly shim: Shim, functions: IFunctionSignature[]) {
    this.oneSignalFunctions = functions;
  }

  static async fetchOneSignalFunctions(): Promise<IFunctionSignature[]> {
    let oneSignalFunctions = await FileFetchManager.getFunctions();
    oneSignalFunctions.unshift(INIT_FUNCTION_SIG, ON_FUNCTION_SIG, OFF_FUNCTION_SIG, ONCE_FUNCTION_SIG);
    return oneSignalFunctions;
  }

  public writeIndexFile(extension: string): void {
    Generator.generateAsync({outputFile: `./build/${this.shim}/index.${extension}`}, async (writer: TextWriter) => {
      let oneSignalWriter: OneSignalWriterManagerBase;
      switch (this.shim) {
        case Shim.React:
          oneSignalWriter = new ReactOneSignalWriterManager(writer);
          break;
        case Shim.Vue:
          oneSignalWriter = new VueOneSignalWriterManager(writer, this.oneSignalFunctions);
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

  public writeTypingsFile(): void {
    Generator.generateAsync({outputFile: `/build/${this.shim}/index.d.ts`}, async (writer: TextWriter) => {
      switch (this.shim) {
        case Shim.React:
          const reactWriter = new ReactTypingsWriterManager(writer);
          await reactWriter.writeOneSignalModule(this.oneSignalFunctions);
          break;
      }
    });
  }

  public writeBuildHelperFiles(): void {
    this.writePackageJsonFile();
    this.writeRollupConfigFile();
    this.writeBabelRcConfigFile();
    this.writeNpmIgnoreFile();
    this.writeEslintFile();

    switch (this.shim) {
      case Shim.Vue:
        this.writeTsConfigFile();
        break;
    }
  }

  /* P R I V A T E */
  private writePackageJsonFile(): void {
    Generator.generateAsync({ outputFile: `./build/${this.shim}/package.json` }, async (writer: TextWriter) => {
      const buildHelperWriter = new BuildHelperWriterManager(writer);
      await buildHelperWriter.writePackageJsonFile(this.shim);
    });
  }

  private writeRollupConfigFile(): void {
    Generator.generateAsync({outputFile: `./build/${this.shim}/rollup.config.js`}, async (writer: TextWriter) => {
      const buildHelperWriter = new BuildHelperWriterManager(writer);
      await buildHelperWriter.writeRollupConfigFile(this.shim);
    });
  }

  private writeBabelRcConfigFile(): void {
    Generator.generateAsync({outputFile: `./build/${this.shim}/.babelrc`}, async (writer: TextWriter) => {
      const buildHelperWriter = new BuildHelperWriterManager(writer);
      await buildHelperWriter.writeBabelRcConfigFile(this.shim);
    });
  }

  private writeNpmIgnoreFile(): void {
    Generator.generate({outputFile: `./build/${this.shim}/.npmignore`}, async (writer: TextWriter) => {
      const buildHelperWriter = new BuildHelperWriterManager(writer);
      buildHelperWriter.writeNpmIgnoreFile();
    });
  }

  private writeEslintFile(): void {
    Generator.generateAsync({outputFile: `./build/${this.shim}/.eslintrc.js`}, async (writer: TextWriter) => {
      const buildHelperWriter = new BuildHelperWriterManager(writer);
      await buildHelperWriter.writeEslintFile(this.shim);
    });
  }

  private writeTsConfigFile(): void {
    Generator.generateAsync({outputFile: `./build/${this.shim}/tsconfig.json`}, async (writer: TextWriter) => {
      const buildHelperWriter = new BuildHelperWriterManager(writer);
      await buildHelperWriter.writeTsConfigFile(this.shim);
    })
  }
}
