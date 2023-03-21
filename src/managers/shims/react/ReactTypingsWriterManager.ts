import IOneSignalApi from "../../../models/OneSignalApi";
import { INTERFACE_PREFIX } from "../../../support/constants";
import { TypingsWriterManagerBase } from "../../bases/TypingsWriterManagerBase";

export class ReactTypingsWriterManager extends TypingsWriterManagerBase {
  public writeOneSignalInterfaces(api: IOneSignalApi): void {
    Object.keys(api).forEach(key => {
      const namespace = api[key];
      const { functions } = namespace;
      this.writeLine(`interface ${INTERFACE_PREFIX}${key} {`);
      this.writeFunctionTypes(functions, 1);

      if (namespace.namespaces) {
        this.writeNamespaces(namespace.namespaces, 1);
      }

      this.writeLine(`}`);
    });
  }
}
