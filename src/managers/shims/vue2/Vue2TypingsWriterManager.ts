import IOneSignalApi from "../../../models/OneSignalApi";
import { TypingsWriterManagerBase } from "../../bases/TypingsWriterManagerBase";

export class Vue2TypingsWriterManager extends TypingsWriterManagerBase {
  public writeOneSignalInterfaces(api: IOneSignalApi): void {
    Object.keys(api).forEach(key => {
      const namespace = api[key];
      const { functions } = namespace;
      this.writeLine(`interface I${key} {`);
      this.writeFunctionTypes(functions, 1);

      if (namespace.namespaces) {
        this.writeNamespaces(namespace.namespaces, 1);
      }

      this.writeLine(`\t[index: string]: any;`);
      this.writeLine(`}`);
    });
  }
}
