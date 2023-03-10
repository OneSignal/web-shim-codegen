import { ReaderManager } from '../../ReaderManager';
import { Shim } from '../../../models/Shim';
import { OneSignalWriterManagerBase } from '../../bases/OneSignalWriterManagerBase';
import { VueTypingsWriterManager } from './VueTypingsWriterManager';
import { TextWriter } from '@yellicode/core';
import { BuildSubdirectory } from '../../../models/BuildSubdirectory';
import IOneSignalApi from '../../../models/OneSignalApi';
import { toCamelCase } from '../../../support/utils';

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

  async writePluginCode(): Promise<void> {
    const pluginFileContents = await ReaderManager.readFile(__dirname.replace('ts-to-es6/', '') + `/../../../snippets/${Shim.Vue}/${this.subdir}/plugin.ts`);
    this.write(pluginFileContents);
  }
}
