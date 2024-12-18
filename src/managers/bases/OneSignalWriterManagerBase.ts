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

// if the namespace is a child of another namespace, we need to prefix the parent namespace to the namespace name
const PARENT_PATH_FOR_NAMESPACE_MAP: { [key: string]: string } = {
  PushSubscription: 'User?.'
};

const PROPERTY_DEFAULT_MAP: { [key: string]: string } = {
  permissionNative: ` ?? 'default'`,
  permission: ` ?? false`
};

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

    // write properties
    if (properties) {
      properties.forEach(prop => {
        const defaultValue = PROPERTY_DEFAULT_MAP[prop.name] ?? '';
        this.writeLine(`\tget ${prop.name}(): ${prop.type} { return window.OneSignal?.${PARENT_PATH_FOR_NAMESPACE_MAP[namespaceName] ?? ''}${namespaceName}?.${prop.name}${defaultValue}; },`);
      });
    }

    // write functions
    functions.forEach(func => {
      if (FUNCTION_IGNORE.indexOf(func.name) !== -1) {
        this.writeLine(`${prefix}${func.name},`);
        return;
      }

      this.writeLine(`${prefix}${func.name}: ${generateUniqueFunctionName(namespaceName, func.name)},`);
    });

    // write namespaces
    if (namespaces) {
      namespaces.forEach(namespace => {
        this.writeLine(`${prefix}${namespace}: ${namespace}Namespace,`);
      });
    }

    this.writeLine("};\n");
  }
}
