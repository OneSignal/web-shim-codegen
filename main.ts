import { CodeGenManager } from "./src/managers/CodeGenManager";
import { Shim } from "./src/models/Shim";
import { VueVersion } from "./src/models/BuildSubdirectory";

CodeGenManager.fetchApi()
  .then(api => {
    new CodeGenManager(Shim.React, api).write();
    new CodeGenManager(Shim.Vue, api, VueVersion.v2).write();
    new CodeGenManager(Shim.Vue, api, VueVersion.v3).write();
    new CodeGenManager(Shim.Angular, api).write();
  })
