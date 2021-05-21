import { CodeWriter } from "@yellicode/core";
import { BABELRC_CONFIG } from "../snippets/babelrc";
import { NPM_IGNORE } from "../snippets/npmIgnore";
import { PACKAGE_JSON } from "../snippets/packageJson";
import { ROLLUP_CONFIG } from "../snippets/rollupConfig";

/**
 * Writes files needed for building
 */
export class BuildHelperWriterManager extends CodeWriter {
  public writeRollupConfigFile(): void {
    this.writeLine(ROLLUP_CONFIG);
  }

  public writeBabelRcConfigFile(): void {
    this.writeLine(BABELRC_CONFIG);
  }

  public writePackageJsonFile(): void {
    this.writeLine(PACKAGE_JSON);
  }

  public writeNpmIgnoreFile(): void {
    this.writeLine(NPM_IGNORE);
  }
}
