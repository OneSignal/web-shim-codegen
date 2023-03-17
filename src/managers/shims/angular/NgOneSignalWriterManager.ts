import { ReaderManager } from '../../ReaderManager';
import { Shim } from '../../../models/Shim';
import { OneSignalWriterManagerBase } from '../../bases/OneSignalWriterManagerBase';
import { TextWriter } from '@yellicode/core';
import IOneSignalApi from '../../../models/OneSignalApi';

export class NgOneSignalWriterManager extends OneSignalWriterManagerBase {
  constructor(writer: TextWriter, readonly api: IOneSignalApi) {
    super(writer, Shim.Angular)
  }

  // implements abstract function
  async writeSupportCode(): Promise<void> {
    const supportFileContents = await ReaderManager.readFile(__dirname.replace('ts-to-es6/', '') + `/../../../snippets/${Shim.Angular}/support.ts`);

    this.writeLine(supportFileContents);
  }

  // implements abstract function
  async writeExportCode(): Promise<void> {
    // unused stub
  }
}
