import { CodeGenManager } from "./src/managers/CodeGenManager";
import { Shim } from "./src/models/Shim";

CodeGenManager.fetchApi()
  .then(api => {
    new CodeGenManager(Shim.React, api).write();
    new CodeGenManager(Shim.Vue2, api).write();
    new CodeGenManager(Shim.Vue3, api).write();
    new CodeGenManager(Shim.Angular, api).write();
  })
