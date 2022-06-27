import { CodeGenManager } from "./src/managers/CodeGenManager";
import { Shim } from "./src/models/Shim";
import { VueVersion } from "./src/models/BuildSubdirectory";

CodeGenManager.fetchOneSignalFunctions().then(functions => {
  new CodeGenManager(Shim.React, functions).write();
  new CodeGenManager(Shim.Vue, functions, VueVersion.v2).write();
  new CodeGenManager(Shim.Vue, functions, VueVersion.v3).write();
  new CodeGenManager(Shim.Angular, functions).write();
})
