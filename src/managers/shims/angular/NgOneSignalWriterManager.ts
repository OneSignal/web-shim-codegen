import { ReaderManager } from '../../ReaderManager';
import { Shim } from '../../../models/Shim';
import { OneSignalWriterManagerBase } from '../../bases/OneSignalWriterManagerBase';
import { TextWriter } from '@yellicode/core';
import IOneSignalApi from '../../../models/OneSignalApi';
import { generateUniqueFunctionName } from '../../../support/utils';
import { FUNCTION_IGNORE, NAMESPACE_IGNORE } from '../../../support/constants';

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

  /**
   * Declares/defines namespaces to hold the defined functions (called so writes outside the OS class)
   */
  defineFunctionNamespaces(): void {
    const namespaces = Object.keys(this.api);

    // remove the 'OneSignal' namespace since it is the root
    namespaces.shift();

    namespaces.reverse().forEach(async key => {
      await this.writeNamespaceExport(this.api, key);
    });
  }

  /**
   * Assigns the defined functions (should be called so writes within the OS class)
   */
  assignOneSignalFunctions(): void {
    const oneSignalFunctions = this.api.OneSignal.functions;

    oneSignalFunctions.forEach((sig) => {
      if (FUNCTION_IGNORE.indexOf(sig.name) !== -1) {
        return;
      }

      this.writeLine(`\t${sig.name} = ${generateUniqueFunctionName("OneSignal", sig.name)};`);
    });
  }

  assignOneSignalNamespaces(): void {
    const namespaces = Object.keys(this.api);

    namespaces.reverse().forEach(async key => {
      // skip the 'OneSignal' namespace since it is the root, and skip the 'PushSubscription' namespace since it is nested
      if (NAMESPACE_IGNORE.indexOf(key) !== -1) {
        return;
      }

      this.writeLine(`\t${key} = ${key}Namespace;`);
    });
  }
}
