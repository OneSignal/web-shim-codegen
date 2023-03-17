import { ReaderManager } from '../../ReaderManager';
import { Shim } from '../../../models/Shim';
import { OneSignalWriterManagerBase } from '../../bases/OneSignalWriterManagerBase';
import { VueTypingsWriterManager } from './VueTypingsWriterManager';
import { TextWriter } from '@yellicode/core';
import { BuildSubdirectory } from '../../../models/BuildSubdirectory';
import IOneSignalApi from '../../../models/OneSignalApi';

export class VueOneSignalWriterManager extends OneSignalWriterManagerBase {
  constructor(writer: TextWriter, readonly api: IOneSignalApi, readonly subdir?: BuildSubdirectory) {
    super(writer, Shim.Vue);
  }

  // implements abstract function
  async writeSupportCode(): Promise<void> {
    const typingsWriter = new VueTypingsWriterManager(this);
    const supportFileContents = await ReaderManager.readFile(__dirname.replace('ts-to-es6/', '') + `/../../../snippets/${Shim.Vue}/${this.subdir}/support.ts`);

    this.writeLine(supportFileContents);
    await typingsWriter.writeInterfaces(0);
    typingsWriter.writeOneSignalInterfaces(this.api);
  }

  // implements abstract function
  async writeExportCode(api: IOneSignalApi): Promise<void> {
    Object.keys(api).reverse().forEach(async key => {
      await this.writeNamespaceExport(api, key);
    });

    await this.writePluginCode();
  }

  async writePluginCode(): Promise<void> {
    const pluginFileContents = await ReaderManager.readFile(__dirname.replace('ts-to-es6/', '') + `/../../../snippets/${Shim.Vue}/${this.subdir}/plugin.ts`);
    this.write(pluginFileContents);
  }
}
