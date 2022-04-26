import { ReaderManager } from '../../ReaderManager';
import { Shim } from '../../../models/Shim';
import { OneSignalWriterManagerBase } from '../../bases/OneSignalWriterManagerBase';
import { VueTypingsWriterManager } from './VueTypingsWriterManager';
import { IFunctionSignature } from '../../../models/FunctionSignature';
import { TextWriter } from '@yellicode/core';
import { BuildSubdirectory } from '../../../models/BuildSubdirectory';

export class VueOneSignalWriterManager extends OneSignalWriterManagerBase {
  constructor(writer: TextWriter, readonly oneSignalFunctions: IFunctionSignature[], readonly subdir?: BuildSubdirectory) {
    super(writer, Shim.Vue);
  }

  // implements abstract function
  async writeSupportCode(): Promise<void> {
    const typingsWriter = new VueTypingsWriterManager(this);
    const supportFileContents = await ReaderManager.readFile(__dirname + `/../../../snippets/${Shim.Vue}/${this.subdir}/support.ts`);
    const initFileContents = await ReaderManager.readFile(__dirname + `/../../../snippets/${Shim.Vue}/onesignalInit.ts`);

    this.writeLine(supportFileContents);
    await typingsWriter.writeInterfaces(0);
    typingsWriter.writeOneSignalInterface(this.oneSignalFunctions);
    this.writeLine(initFileContents);
  }

  // implements abstract function
  async writeExportCode(exportFunctions: string[]): Promise<void> {
    this.writeLine("\nconst OneSignalVue: IOneSignal = {");

    exportFunctions.forEach(func => {
      this.writeLine(`\t${func},`);
    });
    this.writeLine("};\n");
    await this.writePluginCode();
  }

  async writePluginCode(): Promise<void> {
    const pluginFileContents = await ReaderManager.readFile(__dirname + `/../../../snippets/${Shim.Vue}/${this.subdir}/plugin.ts`);
    this.write(pluginFileContents);
  }
}
