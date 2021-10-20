import { Shim } from '../../../models/Shim';
import { ReaderManager } from '../../ReaderManager';
import { OneSignalWriterManagerBase } from '../../bases/OneSignalWriterManagerBase';
import { TextWriter } from '@yellicode/core';
import { ReactTypingsWriterManager } from './ReactTypingsWriterManager';
import { IFunctionSignature } from '../../../models/FunctionSignature';

export class ReactOneSignalWriterManager extends OneSignalWriterManagerBase {

  constructor(writer: TextWriter, readonly oneSignalFunctions: IFunctionSignature[]) {
    super(writer, Shim.React);
  }

  // implements abstract function
  async writeSupportCode(): Promise<void> {
    const typingsWriter = new ReactTypingsWriterManager(this);
    const supportFileContents = await ReaderManager.readFile(__dirname + `/../../../snippets/${Shim.React}/support.ts`);
    this.writeLine(supportFileContents);
    await typingsWriter.writeInterfaces(0);
    typingsWriter.writeOneSignalInterface(this.oneSignalFunctions);
  }

  // implements abstract function
  async writeExportCode(exportFunctions: string[]): Promise<void> {
    this.writeLine("\nconst OneSignalReact: IOneSignal = {");

    exportFunctions.forEach(func => {
      this.writeLine(`\t${func},`);
    });

    this.writeLine("};");
    this.writeLine("export default OneSignalReact");
  }
}
