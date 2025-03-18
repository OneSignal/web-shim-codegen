#!/bin/bash
vue2version=$(npm view onesignal-vue version)
vue3version=$(npm view @onesignal/onesignal-vue3 version)
ngxversion=$(npm view onesignal-ngx version)
reactversion=$(npm view react-onesignal version)

echo "Latest versions:"
echo "vue: $vue2version"
echo "vue3: $vue3version"
echo "angular: $ngxversion"
echo "react: $reactversion"

echo "Updating local versions"
npm version --allow-same-version --prefix=src/static/vue/v2 $vue2version --package onesignal-vue
npm version --allow-same-version --prefix=src/static/vue/v3 $vue3version --package @onesignal/onesignal-vue3
npm version --allow-same-version --prefix=src/scaffolds/angular-workspace/projects/onesignal-ngx/ $ngxversion --package onesignal-ngx
npm version --allow-same-version --prefix=src/static/react $reactversion --package react-onesignal
