import { CodeWriter, TextWriter } from '@yellicode/core';
import { FUNCTION_IGNORE } from '../../support/constants';
import { IFunctionSignature } from '../../models/FunctionSignature';
import { Shim } from '../../models/Shim';
import { reactOneSignalAsyncFunctionTemplate, reactOneSignalFunctionTemplate } from '../../snippets/react/oneSignalFunctionTemplates';
import { vueOneSignalAsyncFunctionTemplate, vueOneSignalFunctionTemplate } from '../../snippets/vue/oneSignalFunctionTemplates';
import { ITemplateFunctionMap } from '../../models/TemplateFunctionMap';

const templateFunctionMap: ITemplateFunctionMap = {
  [Shim.React]: {
    sync: reactOneSignalFunctionTemplate,
    async: reactOneSignalAsyncFunctionTemplate
  },
  [Shim.Vue]: {
    sync: vueOneSignalFunctionTemplate,
    async: vueOneSignalAsyncFunctionTemplate
  }
}

export abstract class OneSignalWriterManagerBase extends CodeWriter {
  abstract writeSupportCode(): Promise<void>;
  abstract writeExportCode(exportFunctions: string[]): void;

  constructor(writer: TextWriter, readonly shim: Shim) {
    super(writer);
  }

  public writeOneSignalFunctions(oneSignalFunctions: IFunctionSignature[]): void {
    oneSignalFunctions.forEach(signature => {
      if (FUNCTION_IGNORE.indexOf(signature.name) !== -1) {
        return;
      }
      const mapKey = signature.isAsync ? "async" : "sync";
      const templateFunction = templateFunctionMap[this.shim][mapKey];
      this.writeLine(templateFunction(signature));
    });
  }
}
