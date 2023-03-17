import { CodeWriter, TextWriter } from '@yellicode/core';
import { FUNCTION_IGNORE, INTERFACE_PREFIX } from '../../support/constants';
import { Shim } from '../../models/Shim';
import { reactOneSignalAsyncFunctionTemplate, reactOneSignalFunctionTemplate } from '../../support/react/oneSignalFunctionTemplates';
import { vueOneSignalAsyncFunctionTemplate, vueOneSignalFunctionTemplate } from '../../support/vue/oneSignalFunctionTemplates';
import { ITemplateFunctionMap } from '../../models/TemplateFunctionMap';
import { ngOneSignalAsyncFunctionTemplate, ngOneSignalFunctionTemplate } from '../../support/angular/oneSignalFunctionTemplates';
import IOneSignalApi from '../../models/OneSignalApi';
import { generateUniqueFunctionName } from '../../support/utils';

const templateFunctionMap: ITemplateFunctionMap = {
  [Shim.React]: {
    sync: reactOneSignalFunctionTemplate,
    async: reactOneSignalAsyncFunctionTemplate
  },
  [Shim.Vue]: {
    sync: vueOneSignalFunctionTemplate,
    async: vueOneSignalAsyncFunctionTemplate
  },
  [Shim.Angular]: {
    sync: ngOneSignalFunctionTemplate,
    async: ngOneSignalAsyncFunctionTemplate
  }
}

export abstract class OneSignalWriterManagerBase extends CodeWriter {
  abstract writeSupportCode(): Promise<void>;
  abstract writeExportCode(api: IOneSignalApi): Promise<void>;

  constructor(writer: TextWriter, readonly shim: Shim) {
    super(writer);
  }

  public writeOneSignalFunctions(api: IOneSignalApi): void {
    const apiCopy = JSON.parse(JSON.stringify(api));

    Object.keys(apiCopy).forEach(namespaceName => {
      const { functions } = apiCopy[namespaceName];

      functions.forEach(func => {
        if (FUNCTION_IGNORE.indexOf(func.name) !== -1) {
          return;
        }

        // prefix with the namespace to avoid function name conflicts
        func.name = generateUniqueFunctionName(namespaceName, func.name);

        const mapKey = func.isAsync ? "async" : "sync";
        const templateFunction = templateFunctionMap[this.shim][mapKey];
        const finalNamespace = namespaceName === 'OneSignal' ? '' : namespaceName;
        this.writeLine(templateFunction(func, finalNamespace));
      });
    });
  }

  protected async writeNamespaceExport(api: IOneSignalApi, namespaceName: string, tabs?: number): Promise<void> {
    const prefix = '\t'.repeat(tabs || 1);
    const namespaceApi = api[namespaceName];
    const { functions, namespaces } = namespaceApi;

    this.writeLine(`const ${namespaceName}Namespace: ${INTERFACE_PREFIX}${namespaceName} = {`);
    functions.forEach(func => {
      if (FUNCTION_IGNORE.indexOf(func.name) !== -1) {
        this.writeLine(`${prefix}${func.name},`);
        return;
      }

      this.writeLine(`${prefix}${func.name}: ${generateUniqueFunctionName(namespaceName, func.name)},`);
    });

    if (namespaces) {
      namespaces.forEach(namespace => {
        this.writeLine(`${prefix}${namespace}: ${namespace}Namespace,`);
      });
    }

    this.writeLine("};\n");
  }
}
