# OneSignal React Code Generator

## NPM Package
https://github.com/OneSignal/react-onesignal

## Start
`npm install`
## Building For Release
```
yellicode
cd build
yarn
```
## Publishing
1. Copy the entire contents of the build folder to the final package directory: `cp -r build/. ../react-onesignal`
2. Delete the README and replace with the npm package [README file](https://github.com/OneSignal/react-onesignal/blob/main/README.md)
3. `npm publish .`

## Cleaning
You can clean the generated '.js' files by running `yarn clean`

---

# Dev Environment
Set up a new React App so the new app is at the same directory level as this project.
```
|_ my-app
|_ react-code-generator
```

```
npx create-react-app my-app
cd my-app
```

## Modify Package.json
In your test app, modify the package.json so that that the package points to the `react-code-generator/build` directory.

```json
"dependencies": {
  "react-onesignal": "file:../react-code-generator/build",
}
```

## Install
`yarn`

## Rebuilding to test changes to package
`rm -rf node_modules/react-onesignal && rm yarn.lock && yarn && yarn build`

## Troubleshooting
### Changes not showing?
Try removing the file's top level package import and re-importing via VSCode auto-import (start typing package name, hit enter)

### Check the module
Check the package in the `node_modules` directory to see if it is updated with latest changes
