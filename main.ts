import { CodeGenManager } from "./src/managers/CodeGenManager";

const generator = new CodeGenManager();
generator.fetchOneSignalFunctions().then(() => {
  generator.writeIndexFile();
  generator.writeTypingsFile();
  generator.writeBuildHelperFiles();
});
