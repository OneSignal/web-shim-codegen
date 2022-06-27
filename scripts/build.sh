#!/bin/bash
rm -rf build
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
