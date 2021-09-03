#!/bin/bash
yellicode
echo 'Done'
cd ./src/scaffolds/angular-workspace
yarn build
cp -R dist/onesignal-ngx ../../../build/angular
cd ../../../