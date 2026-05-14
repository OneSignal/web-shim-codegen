#!/bin/bash
set -euo pipefail

bold=$(tput bold)
normal=$(tput sgr0)

log() {
  echo -e "\n${bold}$1${normal}"
}

cleanup() {
  rm -rf build ts-to-es6 dist
  mkdir -p {build,dist}/vue
}

log "🔍 Linting"
npm run lint

log "🧹 Cleanup"
cleanup

log "🧵 Transpiling"
tsc

log "⚡️ Code generation"
yellicode

log '🧶 Bundling Angular SDK'
(cd src/scaffolds/angular-workspace &&
  npm i &&
  npm run build -- --configuration=production &&
  cp -R dist/onesignal-ngx ../../../build)

log "📄 Copying static files"
./scripts/copy-static

log "📦 Archiving"
cd build
tar cfz onesignal-ngx.tgz onesignal-ngx
tar cfz react.tgz react
tar cfz vue/v2.tgz vue/v2
tar cfz vue/v3.tgz vue/v3
cd ..

mv build/onesignal-ngx.tgz dist/onesignal-ngx.tgz
mv build/react.tgz dist/react.tgz
mv build/vue/v2.tgz dist/vue/v2.tgz
mv build/vue/v3.tgz dist/vue/v3.tgz

# This is required to use 'npm link' when testing local builds
# We do this last so unneed files are not included in the releases.
log '👀 Install + Linting + Build'

if npx concurrently --kill-others-on-fail "npm ci --loglevel=error --prefix=build/vue/v3" "npm ci --loglevel=error --prefix=build/vue/v2" "npm ci --loglevel=error --prefix=build/react" "npm i --prefix=build/onesignal-ngx"; then
  log '✅ Done!'
else
  log '❌ Build failed!'
  exit 1
fi
