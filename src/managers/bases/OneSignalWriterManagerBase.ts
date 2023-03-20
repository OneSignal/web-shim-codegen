import { CodeWriter, TextWriter } from '@yellicode/core';
import { FUNCTION_IGNORE, INTERFACE_PREFIX } from '../../support/constants';
import { Shim } from '../../models/Shim';
import { reactOneSignalAsyncFunctionTemplate, reactOneSignalFunctionTemplate } from '../../support/react/oneSignalFunctionTemplates';
import { vueOneSignalAsyncFunctionTemplate, vueOneSignalFunctionTemplate } from '../../support/vue/oneSignalFunctionTemplates';
import { ITemplateFunctionMap } from '../../models/TemplateFunctionMap';
import { ngOneSignalAsyncFunctionTemplate, ngOneSignalFunctionTemplate } from '../../support/angular/oneSignalFunctionTemplates';
import IOneSignalApi from '../../models/OneSignalApi';
import { generateUniqueFunctionName } from '../../support/utils';
import { NOTIFICATIONS_ADD_EVENT_LISTENER_OVERLOADS, NOTIFICATIONS_ADD_EVENT_LISTENER_OVERLOADS_WITH_FUNCTION_PREFIX, NOTIFICATIONS_REMOVE_EVENT_LISTENER_OVERLOADS, NOTIFICATIONS_REMOVE_EVENT_LISTENER_OVERLOADS_WITH_FUNCTION_PREFIX } from '../../snippets/EventListenerOverloads';
import { IFunctionSignature } from '../../models/FunctionSignature';

const TEMPLATE_FUNCTION_MAP: ITemplateFunctionMap = {
  [Shim.React]: {
    sync: reactOneSignalFunctionTemplate,
    async: reactOneSignalAsyncFunctionTemplate,
    addListenerOverloads: NOTIFICATIONS_ADD_EVENT_LISTENER_OVERLOADS_WITH_FUNCTION_PREFIX,
    removeListenerOverloads: NOTIFICATIONS_REMOVE_EVENT_LISTENER_OVERLOADS_WITH_FUNCTION_PREFIX
  },
  [Shim.Vue]: {
    sync: vueOneSignalFunctionTemplate,
    async: vueOneSignalAsyncFunctionTemplate,
    addListenerOverloads: NOTIFICATIONS_ADD_EVENT_LISTENER_OVERLOADS_WITH_FUNCTION_PREFIX,
    removeListenerOverloads: NOTIFICATIONS_REMOVE_EVENT_LISTENER_OVERLOADS_WITH_FUNCTION_PREFIX
  },
  [Shim.Angular]: {
    sync: ngOneSignalFunctionTemplate,
    async: ngOneSignalAsyncFunctionTemplate,
    addListenerOverloads: NOTIFICATIONS_ADD_EVENT_LISTENER_OVERLOADS,
    removeListenerOverloads: NOTIFICATIONS_REMOVE_EVENT_LISTENER_OVERLOADS
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

      functions.forEach((sig: IFunctionSignature) => {
        if (FUNCTION_IGNORE.indexOf(sig.name) !== -1) {
          return;
        }

        // prefix with the namespace to avoid function name conflicts
        const uniqueFunctionName = generateUniqueFunctionName(namespaceName, sig.name);

        this._generateFunctionOverloadsIfNeeded(uniqueFunctionName);

        const mapKey = sig.isAsync ? "async" : "sync";
        const templateFunction = TEMPLATE_FUNCTION_MAP[this.shim][mapKey];
        const finalNamespace = namespaceName === 'OneSignal' ? '' : namespaceName;
        this.writeLine(templateFunction(sig, uniqueFunctionName, finalNamespace));
      });
    });
  }

  private _generateFunctionOverloadsIfNeeded(functionName: string): void {
    switch (functionName) {
      case 'notificationsAddEventListener':
        this.writeLine('\n'+TEMPLATE_FUNCTION_MAP[this.shim].addListenerOverloads);
        break;
      case 'notificationsRemoveEventListener':
        this.writeLine('\n'+TEMPLATE_FUNCTION_MAP[this.shim].removeListenerOverloads);
        break;
      default:
        break;
    }
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
