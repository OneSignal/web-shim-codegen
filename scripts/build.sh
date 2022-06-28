#!/bin/bash
set -euo pipefail
echo "Linting..."
yarn run lint
rm -rf build
rm -rf ts-to-es6
echo "Transpiling..."
tsc
echo "Code-generation initiating..."
yellicode
echo 'Done.'
echo 'Bundling Angular SDK...'
cd src/scaffolds/angular-workspace
yarn && yarn build --configuration production
cp -R dist/onesignal-ngx ../../../build
cd ../../../
echo "Copying static files..."
./scripts/copy-static.sh
