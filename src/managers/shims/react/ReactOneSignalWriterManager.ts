import * as path from 'path';

import { TextWriter } from '@yellicode/core';

import IOneSignalApi from '../../../models/OneSignalApi';
import { Shim } from '../../../models/Shim';
import { OneSignalWriterManagerBase } from '../../bases/OneSignalWriterManagerBase';
import { ReaderManager } from '../../ReaderManager';
import { TypingsWriterManager } from '../../TypingsWriterManager';

const SNIPPETS_DIR = path.resolve(__dirname, '..', 'src', 'snippets');

export class ReactOneSignalWriterManager extends OneSignalWriterManagerBase {
  constructor(
    writer: TextWriter,
    readonly api: IOneSignalApi,
  ) {
    super(writer, Shim.React);
  }

  // implements abstract function
  async writeSupportCode(): Promise<void> {
    const typingsWriter = new TypingsWriterManager(this);
    const supportFileContents = await ReaderManager.readFile(
      path.join(SNIPPETS_DIR, Shim.React, 'support.ts'),
    );
    this.writeLine(supportFileContents);
    await typingsWriter.writeInterfaces(0);
    typingsWriter.writeOneSignalInterfaces(this.api);
  }

  // implements abstract function
  async writeExportCode(api: IOneSignalApi): Promise<void> {
    Object.keys(api)
      .reverse()
      .forEach(async (key) => {
        await this.writeNamespaceExport(api, key);
      });

    this.writeLine('const OneSignal = OneSignalNamespace;');
    this.writeLine('export default OneSignal;');
  }
}
