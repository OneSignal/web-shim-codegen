#!/bin/bash
yellicode
echo 'Done'
cd ./src/scaffolds/angular-workspace
yarn build --configuration production
cp -R dist/onesignal-ngx ../../../build
cd ../../../