import { Shim } from '../../../models/Shim';
import { ReaderManager } from '../../ReaderManager';
import { OneSignalWriterManagerBase } from '../../bases/OneSignalWriterManagerBase';
import { TextWriter } from '@yellicode/core';

export class ReactOneSignalWriterManager extends OneSignalWriterManagerBase {

  constructor(writer: TextWriter) {
    super(writer, Shim.React);
  }

  // implements abstract function
  async writeSupportCode(): Promise<void> {
    const supportFileContents = await ReaderManager.readFile(__dirname + `/../../../snippets/${Shim.React}/support.ts`);
    this.writeLine(supportFileContents);
  }

  // implements abstract function
  async writeExportCode(exportFunctions: string[]): Promise<void> {
    this.writeLine("\nconst OneSignalReact = {");

    exportFunctions.forEach(func => {
      this.writeLine(`\t${func},`);
    });

    this.writeLine("};");
    this.writeLine("export default OneSignalReact");
  }
}
