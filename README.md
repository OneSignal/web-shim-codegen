# OneSignal React, Vue, & Angular Code Generator

## NPM Packages
* [React](https://github.com/OneSignal/react-onesignal)
* [Vue](https://github.com/OneSignal/onesignal-vue)
* [Angular](https://github.com/OneSignal/onesignal-ngx)

## Start
`yarn`
## Building For Release
```
yarn build
```

*ATTENTION: note regarding hidden files:*
The `settings.json` file in the `.vscode` directory hides all `*.js` files automatically. This is to keep the workspace uncluttered. Alternatively, you can turn those settings off by flipping to `false` and cleaning / decluttering with the command `yarn clean` (see below).

## Cleaning
You can clean the generated `.js` files by running `yarn clean`

## Publishing
1. Copy the ENTIRE contents of the build folder to the final package directory (see below section on copying changes)
2. Discard any unwanted changes to the README file
3. Create a new PR and merge to master
3. `npm publish .`


### Copying Changes to NPM Package Repo
Do not do this manually as you won't copy files if they're hidden by VScode for example
- `cp -a build/onesignal-ngx/. ../onesignal-ngx`
- `cp -a build/react/. ../react-onesignal`
- `cp -a build/vue/. ../onesignal-vue`

---

# Dev Environment
Set up a new React, Vue, or Angular App so the new app and final package repo is at the same directory level as this project.

**Angular Example:**
```
|_ web-shim-codegen   // code generator
|_ my-example-app     // your example app
|_ onesignal-ngx      // npm package
```

## Creating Test Apps
### React Example App
```
npx create-react-app my-app
cd my-app
```

### Vue Example App
```
vue create my-app
// follow the instructions
```

### Angular Example App
```
ng new angular-example-app
```

## Modify Package.json
In your test app, modify the package.json so that that the package points to the `web-shim-codegen/build/<shim>` directory OR to the final package repo directory (just make sure to remember to copy the new build to that directory first before rebuilding `node_modules`).

```json
"dependencies": {
  "<package-name>": "file:../web-shim-codegen/build/<shim>",
}
```

**OR**

```json
"dependencies": {
  "<package-name>": "file:../<shim>",
}
```

## Rebuilding to test changes to package
`rm -rf node_modules/react-onesignal && rm yarn.lock && yarn build`

## Troubleshooting
### Changes not showing?
Try removing the file's top level package import and re-importing via VSCode auto-import (start typing package name, hit enter)

### Check the module
Check the package in the `node_modules` directory to see if it is updated with latest changes
