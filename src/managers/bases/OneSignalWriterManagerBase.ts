import { CodeWriter, TextWriter } from '@yellicode/core';
import { FUNCTION_IGNORE, INTERFACE_PREFIX } from '../../support/constants';
import { Shim } from '../../models/Shim';
import { reactOneSignalAsyncFunctionTemplate, reactOneSignalFunctionTemplate } from '../../support/react/oneSignalFunctionTemplates';
import { vueOneSignalAsyncFunctionTemplate, vueOneSignalFunctionTemplate } from '../../support/vue/oneSignalFunctionTemplates';
import { ITemplateFunctionMap } from '../../models/TemplateFunctionMap';
import { ngOneSignalAsyncFunctionTemplate, ngOneSignalFunctionTemplate } from '../../support/angular/oneSignalFunctionTemplates';
import IOneSignalApi from '../../models/OneSignalApi';
import { generateUniqueFunctionName } from '../../support/utils';
import { IFunctionSignature } from '../../models/FunctionSignature';

const TEMPLATE_FUNCTION_MAP: ITemplateFunctionMap = {
  [Shim.React]: {
    sync: reactOneSignalFunctionTemplate,
    async: reactOneSignalAsyncFunctionTemplate,
  },
  [Shim.Vue]: {
    sync: vueOneSignalFunctionTemplate,
    async: vueOneSignalAsyncFunctionTemplate,
  },
  [Shim.Angular]: {
    sync: ngOneSignalFunctionTemplate,
    async: ngOneSignalAsyncFunctionTemplate,
  }
}

export abstract class OneSignalWriterManagerBase extends CodeWriter {
  abstract writeSupportCode(): Promise<void>;
  abstract writeExportCode(api: IOneSignalApi): Promise<void>;

  constructor(writer: TextWriter, readonly shim: Shim) {
    super(writer);
  }

  public writeOneSignalFunctions(api: IOneSignalApi, namespaceChain: string[]): void {
    const apiCopy: IOneSignalApi = JSON.parse(JSON.stringify(api));

    // get last namespace in nest chain
    const currentNamespace = namespaceChain[namespaceChain.length - 1];

    if (!apiCopy[currentNamespace]) {
      return;
    }

    const { functions, namespaces } = apiCopy[currentNamespace];

    functions?.forEach((sig: IFunctionSignature) => {
      if (FUNCTION_IGNORE.indexOf(sig.name) !== -1) {
        return;
      }

      // prefix with the namespace to avoid function name conflicts
      const uniqueFunctionName = generateUniqueFunctionName(currentNamespace, sig.name);

      const mapKey = sig.isAsync ? "async" : "sync";
      const templateFunction = TEMPLATE_FUNCTION_MAP[this.shim][mapKey];
      this.writeLine(templateFunction(sig, uniqueFunctionName, namespaceChain));
    });

    namespaces?.forEach((namespaceName: string) => {
      const chainCopy = JSON.parse(JSON.stringify(namespaceChain));
      chainCopy.push(namespaceName);
      this.writeOneSignalFunctions(api, chainCopy);
    });

  }

  protected async writeNamespaceExport(api: IOneSignalApi, namespaceName: string, tabs?: number): Promise<void> {
    const prefix = '\t'.repeat(tabs || 1);
    const namespaceApi = api[namespaceName];
    const { functions, namespaces, properties } = namespaceApi;

    this.writeLine(`const ${namespaceName}Namespace: ${INTERFACE_PREFIX}${namespaceName} = {`);

    // TO DO: add support for properties in all namespaces (even though only PushSubscription has any right now)
    if (properties && namespaceName === 'PushSubscription') {
      properties.forEach(prop => {
        this.writeLine(`\tget ${prop.name}(): ${prop.type} { return window.OneSignal?.User?.PushSubscription?.${prop.name} },`);
      });
    }

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
