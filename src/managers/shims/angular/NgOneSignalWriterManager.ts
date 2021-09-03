import { ReaderManager } from '../../ReaderManager';
import { Shim } from '../../../models/Shim';
import { OneSignalWriterManagerBase } from '../../bases/OneSignalWriterManagerBase';
import { IFunctionSignature } from '../../../models/FunctionSignature';
import { TextWriter } from '@yellicode/core';

export class NgOneSignalWriterManager extends OneSignalWriterManagerBase {
  constructor(writer: TextWriter, readonly oneSignalFunctions: IFunctionSignature[]) {
    super(writer, Shim.Angular)
  }

  // implements abstract function
  async writeSupportCode(): Promise<void> {
    const supportFileContents = await ReaderManager.readFile(__dirname + `/../../../snippets/${Shim.Angular}/support.ts`);
    const initObjectInterfaceContents = await ReaderManager.readFile(__dirname + `/../../../snippets/InitObject.ts`);

    this.writeLine(supportFileContents);
    this.writeLine(initObjectInterfaceContents);
  }

  // implements abstract function
  async writeExportCode(): Promise<void> {
    // unused stub
  }

  async writeServiceClass(): Promise<void> {
    const serviceClassFileContents = await ReaderManager.readFile(__dirname + `/../../../snippets/${Shim.Angular}/serviceClass.ts`);
    this.writeLine(serviceClassFileContents);
  }
}
