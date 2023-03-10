import { Shim } from '../../../models/Shim';
import { ReaderManager } from '../../ReaderManager';
import { OneSignalWriterManagerBase } from '../../bases/OneSignalWriterManagerBase';
import { TextWriter } from '@yellicode/core';
import { ReactTypingsWriterManager } from './ReactTypingsWriterManager';
import IOneSignalApi from '../../../models/OneSignalApi';
import { toCamelCase } from '../../../support/utils';

export class ReactOneSignalWriterManager extends OneSignalWriterManagerBase {

  constructor(writer: TextWriter, readonly api: IOneSignalApi) {
    super(writer, Shim.React);
  }

  // implements abstract function
  async writeSupportCode(): Promise<void> {
    const typingsWriter = new ReactTypingsWriterManager(this);
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

  private async writeNamespaceExport(api: IOneSignalApi, namespaceName: string, tabs?: number): Promise<void> {
    const prefix = '\t'.repeat(tabs || 1);
    const namespaceApi = api[namespaceName];
    const { functions, namespaces } = namespaceApi;

    this.writeLine(`const ${namespaceName}Namespace: I${namespaceName} = {`);
    functions.forEach(func => {
      // if function name is addEventListener or removeEventListener use the function in the format
      // add${camelCaseKey}EventListener or remove${camelCaseKey}EventListener
      const camelCaseKey = toCamelCase(namespaceName);
      if (func.name === 'addEventListener') {
        const modifiedName = `add${camelCaseKey}EventListener`;
        this.writeLine(`${prefix}${func.name}: ${modifiedName},`);
      } else if (func.name === 'removeEventListener') {
        const modifiedName = `remove${camelCaseKey}EventListener`;
        this.writeLine(`${prefix}${func.name}: ${modifiedName},`);
      } else {
        this.writeLine(`${prefix}${func.name},`);
      }
    });

    if (namespaces) {
      namespaces.forEach(namespace => {
        this.writeLine(`${prefix}${namespace}: ${namespace}Namespace,`);
      });
    }

    this.writeLine("};\n");
  }
}
