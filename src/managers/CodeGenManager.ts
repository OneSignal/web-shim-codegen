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
    Generator.generate({outputFile: './build/index.js'}, async (writer: TextWriter) => {
      const oneSignalWriter = new OneSignalWriterManager(writer);
      oneSignalWriter.writeSupportCode();
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
    this.writeRollupConfigFile();
    this.writeBabelRcConfigFile();
    this.writePackageJsonFile();
    this.writeNpmIgnoreFile();
  }

  /* P R I V A T E */

  private writeRollupConfigFile(): void {
    Generator.generate({outputFile: './build/rollup.config.js'}, async (writer: TextWriter) => {
      const buildHelperWriter = new BuildHelperWriterManager(writer);
      buildHelperWriter.writeRollupConfigFile();
    });
  }

  private writeBabelRcConfigFile(): void {
    Generator.generate({outputFile: './build/.babelrc'}, async (writer: TextWriter) => {
      const buildHelperWriter = new BuildHelperWriterManager(writer);
      buildHelperWriter.writeBabelRcConfigFile();
    });
  }

  private writePackageJsonFile(): void {
    Generator.generate({outputFile: './build/package.json'}, async (writer: TextWriter) => {
      const buildHelperWriter = new BuildHelperWriterManager(writer);
      buildHelperWriter.writePackageJsonFile();
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
