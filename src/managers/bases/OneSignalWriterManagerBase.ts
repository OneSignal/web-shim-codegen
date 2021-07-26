import { CodeWriter } from '@yellicode/core';
import { oneSignalAsyncFunctionTemplate, oneSignalFunctionTemplate } from '../snippets/onesignal';
import { ReaderManager } from './ReaderManager';
export class OneSignalWriterManager extends CodeWriter {
  public writeOneSignalFunction(name: string, args: string[], isAsync: boolean): void {
    if (isAsync) {
      this.writeLine(oneSignalAsyncFunctionTemplate(name, args));
    } else {
      this.writeLine(oneSignalFunctionTemplate(name, args));
    }
  }

  public async writeSupportCode(): Promise<void> {
    const fileContents = await ReaderManager.readFile(__dirname + '/../snippets/support.ts');
    this.writeLine(fileContents);
  }

  public writeExportCode(exportFunctions: string[]): void {
    this.writeLine("\nconst OneSignalReact = {");
    exportFunctions.forEach(func => {
      this.writeLine(`\t${func},`);
    })
    this.writeLine("};");
    this.writeLine("export default OneSignalReact");
  }
}
