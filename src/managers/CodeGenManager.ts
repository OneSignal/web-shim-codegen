import { TextWriter } from "@yellicode/core";
import { Generator } from "@yellicode/templating";
import { FileFetchManager } from "./FileFetchManager";
import { IFunctionSignature } from "../models/FunctionSignature";
import { BuildHelperWriterManager } from "./BuildHelperWriterManager";
import { OneSignalWriterManager } from "./OneSignalWriterManager";
import { TypingsWriterManager } from "./TypingsWriterManager";

export class CodeGenManager {
  private oneSignalFunctions: IFunctionSignature[];

  public async fetchOneSignalFunctions(): Promise<void> {
    this.oneSignalFunctions = await FileFetchManager.getFunctions();
  }

  public writeIndexFile(): void {
    Generator.generateAsync({outputFile: './build/index.js'}, async (writer: TextWriter) => {
      const oneSignalWriter = new OneSignalWriterManager(writer);
      await oneSignalWriter.writeSupportCode();
      this.writeOneSignalFunctions(oneSignalWriter);
      const functionNames = this.oneSignalFunctions.map(sig => (sig.name));
      oneSignalWriter.writeExportCode(["initialize", ...functionNames]);
    });
  }

  public writeTypingsFile(): void {
    Generator.generate({outputFile: './build/index.d.ts'}, async (writer: TextWriter) => {
      const oneSignalWriter = new TypingsWriterManager(writer);
      oneSignalWriter.writeOneSignalInterface(this.oneSignalFunctions);
    });
  }

  public writeBuildHelperFiles(): void {
    this.writePackageJsonFile();
    this.writeRollupConfigFile();
    this.writeBabelRcConfigFile();
    this.writeNpmIgnoreFile();
  }

  /* P R I V A T E */
  private writePackageJsonFile(): void {
    Generator.generateAsync({ outputFile: './build/package.json' }, async (writer: TextWriter) => {
      const buildHelperWriter = new BuildHelperWriterManager(writer);
      await buildHelperWriter.writePackageJsonFile();
    });
  }


  private writeRollupConfigFile(): void {
    Generator.generateAsync({outputFile: './build/rollup.config.js'}, async (writer: TextWriter) => {
      const buildHelperWriter = new BuildHelperWriterManager(writer);
      await buildHelperWriter.writeRollupConfigFile();
    });
  }

  private writeBabelRcConfigFile(): void {
    Generator.generate({outputFile: './build/.babelrc'}, async (writer: TextWriter) => {
      const buildHelperWriter = new BuildHelperWriterManager(writer);
      buildHelperWriter.writeBabelRcConfigFile();
    });
  }

  private writeNpmIgnoreFile(): void {
    Generator.generate({outputFile: './build/.npmignore'}, async (writer: TextWriter) => {
      const buildHelperWriter = new BuildHelperWriterManager(writer);
      buildHelperWriter.writeNpmIgnoreFile();
    });
  }

  private writeOneSignalFunctions(writer: OneSignalWriterManager): void {
    this.oneSignalFunctions.forEach(signature => {
      let argNames: string[];

      if (!!signature.arguments) {
       argNames = signature.arguments.map(arg => arg.name);
      }
      writer.writeOneSignalFunction(signature.name, argNames);
    });
  }
}
