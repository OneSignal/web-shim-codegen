import { Shim } from '../../../models/Shim';
import { ReaderManager } from '../../ReaderManager';
import { OneSignalWriterManagerBase } from '../../bases/OneSignalWriterManagerBase';
import { TextWriter } from '@yellicode/core';
import IOneSignalApi from '../../../models/OneSignalApi';
import { TypingsWriterManager } from '../../TypingsWriterManager';

export class ReactOneSignalWriterManager extends OneSignalWriterManagerBase {

  constructor(writer: TextWriter, readonly api: IOneSignalApi) {
    super(writer, Shim.React);
  }

  // implements abstract function
  async writeSupportCode(): Promise<void> {
    const typingsWriter = new TypingsWriterManager(this);
    const supportFileContents = await ReaderManager.readFile(__dirname.replace('ts-to-es6/', '') + `/../../../snippets/${Shim.React}/support.ts`);
    this.writeLine(supportFileContents);
    await typingsWriter.writeInterfaces(0);
    typingsWriter.writeOneSignalInterfaces(this.api);
  }

  // implements abstract function
  async writeExportCode(api: IOneSignalApi): Promise<void> {
    Object.keys(api).reverse().forEach(async key => {
      await this.writeNamespaceExport(api, key);
    });

    this.writeLine("const OneSignal = OneSignalNamespace;");
    this.writeLine("export default OneSignal;");
  }
}
