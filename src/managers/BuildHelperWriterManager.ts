import { CodeWriter } from "@yellicode/core";
import { ReaderManager } from "./ReaderManager";
import { Shim } from "../models/Shim";

/**
 * Writes files needed for building
 */

export class BuildHelperWriterManager extends CodeWriter {
  public async writePackageJsonFile(shim: Shim): Promise<void> {
    const fileContents = await ReaderManager.readFile(__dirname + `/../static/${shim}/package.json`);
    this.write(fileContents);
  }

  public async writeRollupConfigFile(shim: Shim): Promise<void> {
    const fileContents = await ReaderManager.readFile(__dirname + `/../static/${shim}/rollupConfig.ts`);
    this.write(fileContents);
  }

  public async writeBabelRcConfigFile(shim: Shim): Promise<void> {
    const fileContents = await ReaderManager.readFile(__dirname + `/../static/${shim}/.babelrc`);
    this.write(fileContents);
  }

  public async writeNpmIgnoreFile(): Promise<void> {
    const fileContents = await ReaderManager.readFile(__dirname + `/../static/.npmignore`);
    this.write(fileContents);
  }

  public async writeEslintFile(shim: Shim): Promise<void> {
    const fileContents = await ReaderManager.readFile(__dirname + `/../static/${shim}/eslintrc.ts`);
    this.write(fileContents);
  }

  public async writeTsConfigFile(): Promise<void> {
    const fileContents = await ReaderManager.readFile(__dirname + `/../static/tsconfig.json`);
    this.write(fileContents);
  }

  public async writeLicenseFile(): Promise<void> {
    const fileContents = await ReaderManager.readFile(__dirname + `/../static/LICENSE`);
    this.write(fileContents);
  }

  public async writeReadmeFile(shim: Shim): Promise<void> {
    const fileContents = await ReaderManager.readFile(__dirname + `/../static/${shim}/README.md`);
    this.write(fileContents);
  }

  public async writeGitignoreFile(): Promise<void> {
    const fileContents = await ReaderManager.readFile(__dirname + `/../static/.gitignore`);
    this.write(fileContents);
  }
}
