#!/bin/bash
rm -rf build
yellicode
echo 'Done'
cd src/scaffolds/angular-workspace
yarn && yarn build --configuration production
cp -R dist/onesignal-ngx ../../../build
cd ../../../