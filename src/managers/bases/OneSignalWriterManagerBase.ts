import { CodeWriter, TextWriter } from '@yellicode/core';
import { FUNCTION_IGNORE } from '../../support/constants';
import { Shim } from '../../models/Shim';
import { reactOneSignalAsyncFunctionTemplate, reactOneSignalFunctionTemplate } from '../../support/react/oneSignalFunctionTemplates';
import { vueOneSignalAsyncFunctionTemplate, vueOneSignalFunctionTemplate } from '../../support/vue/oneSignalFunctionTemplates';
import { ITemplateFunctionMap } from '../../models/TemplateFunctionMap';
import { ngOneSignalAsyncFunctionTemplate, ngOneSignalFunctionTemplate } from '../../support/angular/oneSignalFunctionTemplates';
import IOneSignalApi from '../../models/OneSignalApi';
import { toCamelCase } from '../../support/utils';

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
      const camelCaseNamespaceName = toCamelCase(namespaceName);
      const { functions } = apiCopy[namespaceName];

      functions.forEach(func => {
        // for all addEventListener and removeEventListener functions, we need to modify the name to avoid conflicts
        if (func.name === 'addEventListener') {
          func.name = `add${camelCaseNamespaceName}EventListener`;
        } else if (func.name === 'removeEventListener') {
          func.name = `remove${camelCaseNamespaceName}EventListener`;
        }

        if (FUNCTION_IGNORE.indexOf(func.name) !== -1) {
          return;
        }

        const mapKey = func.isAsync ? "async" : "sync";
        const templateFunction = templateFunctionMap[this.shim][mapKey];
        const finalNamespace = namespaceName === 'OneSignal' ? '' : namespaceName;
        this.writeLine(templateFunction(func, finalNamespace));
      });
    });
  }
}
