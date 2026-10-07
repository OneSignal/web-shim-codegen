import * as fs from 'fs';
import * as path from 'path';

import { CodeGenManager } from './src/managers/CodeGenManager';
import { VueVersion } from './src/models/BuildSubdirectory';
import { Shim } from './src/models/Shim';
import { assertIdentityRulesMatchApi } from './src/support/identityGuards';

// yellicode exits 0 even when this process fails, so build.sh requires this file instead.
const CODEGEN_OK_FILE = path.resolve(__dirname, '..', 'build', '.codegen-ok');

void CodeGenManager.fetchApi()
  .then(async (api) => {
    assertIdentityRulesMatchApi(api);
    await Promise.all([
      new CodeGenManager(Shim.React, api).write(),
      new CodeGenManager(Shim.Vue, api, VueVersion.v2).write(),
      new CodeGenManager(Shim.Vue, api, VueVersion.v3).write(),
      new CodeGenManager(Shim.Angular, api).write(),
    ]);
    fs.writeFileSync(CODEGEN_OK_FILE, '');
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
