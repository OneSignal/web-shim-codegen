import { CodeGenManager } from "./src/managers/CodeGenManager";
import { Shim } from "./src/models/Shim";

CodeGenManager.fetchOneSignalFunctions().then(functions => {
  const reactGenerator = new CodeGenManager(Shim.React, functions);
  reactGenerator.writeIndexFile('ts');
  reactGenerator.writeBuildHelperFiles();

  const vueGenerator = new CodeGenManager(Shim.Vue, functions);
  vueGenerator.writeIndexFile('ts');
  vueGenerator.writeBuildHelperFiles();

  const angularGenerator = new CodeGenManager(Shim.Angular, functions);
  angularGenerator.writeNgServiceFile();
})
