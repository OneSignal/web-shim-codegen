import { CodeWriter } from "@yellicode/core";
import { NPM_IGNORE } from "../snippets/npmIgnore";
import { ReaderManager } from "./ReaderManager";
import { Shim } from "../models/Shim";

/**
 * Writes files needed for building
 */

export class BuildHelperWriterManager extends CodeWriter {
  public async writePackageJsonFile(shim: Shim): Promise<void> {
    const fileContents = await ReaderManager.readFile(__dirname + `/../snippets/${shim}/package.json`);
    this.writeLine(fileContents);
  }

  public async writeRollupConfigFile(shim: Shim): Promise<void> {
    const fileContents = await ReaderManager.readFile(__dirname + `/../snippets/${shim}/rollupConfig.ts`);
    this.writeLine(fileContents);
  }

  public async writeBabelRcConfigFile(shim: Shim): Promise<void> {
    const fileContents = await ReaderManager.readFile(__dirname + `/../snippets/${shim}/.babelrc`);
    this.writeLine(fileContents);
  }

  public writeNpmIgnoreFile(): void {
    this.writeLine(NPM_IGNORE);
  }

  public async writeEslintFile(shim: Shim): Promise<void> {
    const fileContents = await ReaderManager.readFile(__dirname + `/../snippets/${shim}/eslintrc.ts`);
    this.writeLine(fileContents);
  }

  public async writeTsConfigFile(shim: Shim): Promise<void> {
    const fileContents = await ReaderManager.readFile(__dirname + `/../snippets/${shim}/tsconfig.json`);
    this.writeLine(fileContents);
  }
}
