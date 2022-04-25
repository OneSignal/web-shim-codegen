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

  public writeBuildHelperFiles(): void {
    this.writePackageJsonFile();
    this.writeNpmIgnoreFile();
    this.writeEslintFile();
    this.writeLicenseFile();
    this.writeReadmeFile();
    this.writeGitignoreFile();

    switch (this.shim) {
      case Shim.Vue:
      case Shim.React:
        this.writeTsConfigFile();
        break;
    }

    switch (this.shim) {
      case Shim.Angular:
      case Shim.React:
        this.writeRollupConfigFile();
        this.writeBabelRcConfigFile();
        break;
    }
  }

  /* P R I V A T E */
  private writePackageJsonFile(): void {
    Generator.generateAsync({ outputFile: `./build/${this.shim}/${this.subdir}/package.json` }, async (writer: TextWriter) => {
      const buildHelperWriter = new BuildHelperWriterManager(writer);
      await buildHelperWriter.writePackageJsonFile(this.shim);
    });
  }

  private writeRollupConfigFile(): void {
    Generator.generateAsync({outputFile: `./build/${this.shim}/${this.subdir}/rollup.config.js`}, async (writer: TextWriter) => {
      const buildHelperWriter = new BuildHelperWriterManager(writer);
      await buildHelperWriter.writeRollupConfigFile(this.shim);
    });
  }

  private writeBabelRcConfigFile(): void {
    Generator.generateAsync({outputFile: `./build/${this.shim}/${this.subdir}/.babelrc`}, async (writer: TextWriter) => {
      const buildHelperWriter = new BuildHelperWriterManager(writer);
      await buildHelperWriter.writeBabelRcConfigFile(this.shim);
    });
  }

  private writeNpmIgnoreFile(): void {
    Generator.generateAsync({outputFile: `./build/${this.shim}/${this.subdir}/.npmignore`}, async (writer: TextWriter) => {
      const buildHelperWriter = new BuildHelperWriterManager(writer);
      await buildHelperWriter.writeNpmIgnoreFile();
    });
  }

  private writeEslintFile(): void {
    Generator.generateAsync({outputFile: `./build/${this.shim}/${this.subdir}/.eslintrc.js`}, async (writer: TextWriter) => {
      const buildHelperWriter = new BuildHelperWriterManager(writer);
      await buildHelperWriter.writeEslintFile(this.shim);
    });
  }

  private writeTsConfigFile(): void {
    Generator.generateAsync({outputFile: `./build/${this.shim}/${this.subdir}/tsconfig.json`}, async (writer: TextWriter) => {
      const buildHelperWriter = new BuildHelperWriterManager(writer);
      await buildHelperWriter.writeTsConfigFile();
    })
  }

  private writeLicenseFile(): void {
    Generator.generateAsync({outputFile: `./build/${this.shim}/${this.subdir}/LICENSE`}, async (writer: TextWriter) => {
      const buildHelperWriter = new BuildHelperWriterManager(writer);
      await buildHelperWriter.writeLicenseFile();
    })
  }

  private writeReadmeFile(): void {
    Generator.generateAsync({outputFile: `./build/${this.shim}/${this.subdir}/README.md`}, async (writer: TextWriter) => {
      const buildHelperWriter = new BuildHelperWriterManager(writer);
      await buildHelperWriter.writeReadmeFile(this.shim);
    })
  }

  private writeGitignoreFile(): void {
    Generator.generateAsync({outputFile: `./build/${this.shim}/${this.subdir}/.gitignore`}, async (writer: TextWriter) => {
      const buildHelperWriter = new BuildHelperWriterManager(writer);
      await buildHelperWriter.writeGitignoreFile();
    })
  }
}
