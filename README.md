# OneSignal React, Vue, & Angular Code Generator

## NPM Packages
* [React](https://github.com/OneSignal/react-onesignal)
* [Vue](https://github.com/OneSignal/onesignal-vue)

## Start
`npm install`
## Building For Release
```
yarn build
cd build
yarn
```

*ATTENTION: note regarding hidden files:*
The `settings.json` file in the `.vscode` directory hides all `*.js` files automatically. This is to keep the workspace uncluttered. Alternatively, you can turn those settings off by flipping to `false` and cleaning / decluttering with the command `yarn clean` (see below).

## Cleaning
You can clean the generated '.js' files by running `yarn clean`

## Publishing
1. Copy the ENTIRE contents of the build folder to the final package directory. e.g: `cp -r build/. ../react-onesignal` (do not do this manually as you won't copy files if they're hidden)
2. Delete the README and replace with the npm package from the existing repository [README file](https://github.com/OneSignal/react-onesignal/blob/main/README.md)
3. `npm publish .`

---

# Dev Environment
Set up a new React, Vue, or Angular App so the new app is at the same directory level as this project.
```
|_ my-app
|_ react-code-generator
```

## React
```
npx create-react-app my-app
cd my-app
```

## Vue
```
vue create my-app
// follow the instructions
```

## Modify Package.json
In your test app, modify the package.json so that that the package points to the `web-shim-codegen/build/<shim>` directory.

```json
"dependencies": {
  "<package-name>": "file:../web-shim-codegen/build/<shim>",
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
