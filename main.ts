import { CodeGenManager } from "./src/managers/CodeGenManager";
import { Shim } from "./src/models/Shim";
import { VueVersion } from "./src/models/BuildSubdirectory";

CodeGenManager.fetchOneSignalFunctions().then(functions => {
  // react
  const reactGenerator = new CodeGenManager(Shim.React, functions);
  reactGenerator.writeIndexFile('ts');

  // vue v2
  let vueGenerator = new CodeGenManager(Shim.Vue, functions, VueVersion.v2);
  vueGenerator.writeIndexFile('ts');

  // vue v3
  vueGenerator = new CodeGenManager(Shim.Vue, functions, VueVersion.v3);
  vueGenerator.writeIndexFile('ts');

  // angular
  const angularGenerator = new CodeGenManager(Shim.Angular, functions);
  angularGenerator.writeNgServiceFile();
})
