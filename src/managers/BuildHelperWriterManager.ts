import { CodeWriter } from "@yellicode/core";
import { BABELRC_CONFIG } from "../snippets/babelrc";
import { NPM_IGNORE } from "../snippets/npmIgnore";
import { ReaderManager } from "./ReaderManager";

/**
 * Writes files needed for building
 */
export class BuildHelperWriterManager extends CodeWriter {
  public async writePackageJsonFile(): Promise<void> {
    const fileContents = await ReaderManager.readFile(__dirname + '/../snippets/package.json');
    this.writeLine(fileContents);
  }

  public async writeRollupConfigFile(): Promise<void> {
    const fileContents = await ReaderManager.readFile(__dirname + '/../snippets/rollupConfig.ts');
    this.writeLine(fileContents);
  }

  public writeBabelRcConfigFile(): void {
    this.writeLine(BABELRC_CONFIG);
  }

  public writeNpmIgnoreFile(): void {
    this.writeLine(NPM_IGNORE);
  }
}
