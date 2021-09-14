import { CodeGenManager } from "./src/managers/CodeGenManager";
import { IFunctionSignature } from "./src/models/FunctionSignature";
import { Shim } from "./src/models/Shim";

CodeGenManager.fetchOneSignalFunctions().then(functions => {
  const reactGenerator = new CodeGenManager(Shim.React, functions);
  try {
    reactGenerator.writeIndexFile('js');
    reactGenerator.writeTypingsFile();
    reactGenerator.writeBuildHelperFiles();
  } catch (e) {
    console.error(e);
  }

  const vueGenerator = new CodeGenManager(Shim.Vue, functions);
  vueGenerator.writeIndexFile('ts');
  vueGenerator.writeBuildHelperFiles();

  const angularGenerator = new CodeGenManager(Shim.Angular, functions);
  angularGenerator.writeNgServiceFile();
})
