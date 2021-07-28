import { CodeGenManager } from "./src/managers/CodeGenManager";
import { Shim } from "./src/models/Shim";

const reactGenerator = new CodeGenManager(Shim.React);
reactGenerator.fetchOneSignalFunctions().then(() => {
  try {
    reactGenerator.writeIndexFile('js');
    reactGenerator.writeTypingsFile();
    reactGenerator.writeBuildHelperFiles();
  } catch (e) {
    console.error(e);
  }
});

const vueGenerator = new CodeGenManager(Shim.Vue);
vueGenerator.fetchOneSignalFunctions().then(() => {
  vueGenerator.writeIndexFile('ts');
  vueGenerator.writeBuildHelperFiles();
});
