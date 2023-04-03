# OneSignal React, Vue, & Angular Code Generator

## NPM Packages
* [React](https://github.com/OneSignal/react-onesignal)
* [Vue](https://github.com/OneSignal/onesignal-vue)
* [Angular](https://github.com/OneSignal/onesignal-ngx)

## Start
`npm install @yellicode/cli -g`

`yarn`

If you just cloned the repo run the command:
`scripts/bootstrap`
`scripts/update-subtrees`

If you already bootstrapped the remotes you just need to run:
`scripts/update-subtrees`

## Upstream API Spec
The code generator uses an `api.json` spec file from the [OneSignal-Website-SDK](https://github.com/OneSignal/OneSignal-Website-SDK) repo as the input. Modify this file in that repo to change what the generator ultimately builds.

The generator uses the URL hard-coded as a constant in the `src/support/constants.ts` file to fetch the spec. Make sure to update this URL as needed.

## Building For Release

**Update version in `package.json` files**

Run the `update-version-numbers` script in the `scripts` folder and input the update type (major, minor, patch, beta).

**Update `README.md` files where needed**
* React: `src/static/react/README.md`
* Vue: `src/static/vue/README.md`
* Angular: `src/static/onesignal-ngx/README.md`

```
yarn build
```

*ATTENTION: note regarding hidden files:*
The `settings.json` file in the `.vscode` directory hides all `*.js` files automatically. This is to keep the workspace uncluttered. Alternatively, you can turn those settings off by flipping to `false` and cleaning / decluttering with the command `yarn clean` (see below).

## Special Types File
The repo contains a file `types.ts` that contains all the type definitions for arguments and return values. These types must be kept updated (synchronized) with the upstream. To add new ones:
- add the type to `src/snippets/types.ts`
- write the type via `TypingsWriterManagerBase.ts`

## Cleaning
You can clean the generated `.js` files by running `yarn clean`

## Compatibility
As frameworks put out new major releases, we should ensure our shims remain compatible with the new versions.

### Vue 2 & 3
There were some breaking changes in Vue 3 that required the plugin to be updated to support it. Instead of making a major release, we opted to create a separate plugin: `onesignal-vue3` as this will greatly simplify managing future major releases (e.g: w/ upcoming user-model).

### Angular
Angular puts out a new major release more frequently: once or twice per year. Our plugin is almost a pure JS module with the exception of a couple imports including `Injectable` needed for the eventual dependency injection. These are:

```js
import { Injectable, NgModule, Component, OnInit } from '@angular/core';
```

It is unlikely that Angular would introduce a regression in a future release, in particular with `Injectable` which is our main dependency injection method. For context, it is a decorator (e.g: `@Injectable()`) which Angular uses to know what to inject. However, keep an eye out for changes related to any of these when looking to determine compatibility.

## Publishing
1. Copy the ENTIRE contents of the build folder to the final package directory (see below section on copying changes)
2. Discard any unwanted changes to the README file
3. Create a new PR and merge to master
3. `npm publish .` -- for onesignal-vue3 you must pass the `--access public` to the publish command as it is a scoped package.


### Publishing changes to the downstream repositories:
GitHub CD action will kick off after a PR has been merged.
It will take care of updating all the downstream repositories and create a pull request for each of them (if there are changes to be committed). 

Before running the commands mentioned bellow make sure that the current repo does not have uncommitted changes, otherwise
you may need to remove some origins manually afterwords.

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
