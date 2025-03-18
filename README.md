# OneSignal React, Vue, & Angular Code Generator

## NPM Packages

- [React](https://github.com/OneSignal/react-onesignal)
- [Vue](https://github.com/OneSignal/onesignal-vue)
- [Angular](https://github.com/OneSignal/onesignal-ngx)

## Start

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

- React: `src/static/react/README.md`
- Vue: `src/static/vue/README.md`
- Angular: `src/static/onesignal-ngx/README.md`

```
npm run build
```

_ATTENTION: note regarding hidden files:_
The `settings.json` file in the `.vscode` directory hides all `*.js` files automatically. This is to keep the workspace uncluttered. Alternatively, you can turn those settings off by flipping to `false`.

## Publishing

1. Merge your changes to `main` to kick off the build and cd_update process. Or trigger the workflow manually through the "Submit Downstream PRs" Github Actions workflow.
2. Review the downstream PR (branch `cd_update`) and merge into each respective SDK's `main` or feature branch (e.g: `user-model/v1`).
3. Pull the remote changes via `git pull` for the SDKs.
4. Publish with `npm publish .`
   - For onesignal-vue3 you must pass the `--access public` to the publish command as it is a scoped package.
   - For **beta releases** run `npm publish --tag beta`

## Special Types File

The repo contains a file `types.ts` that contains all the type definitions for arguments and return values. These types must be kept updated (synchronized) with the upstream. To add new ones:

- add the type to `src/snippets/types.ts`
- write the type via `TypingsWriterManagerBase.ts`

## Compatibility

As frameworks put out new major releases, we should ensure our shims remain compatible with the new versions.

### Vue 2 & 3

There were some breaking changes in Vue 3 that required the plugin to be updated to support it. Instead of making a major release, we opted to create a separate plugin: `onesignal-vue3` as this will greatly simplify managing future major releases (e.g: w/ user-model).

### Angular

Angular puts out a new major release more frequently: once or twice per year. Our plugin is almost a pure JS module with the exception of a couple imports including `Injectable` needed for the eventual dependency injection. These are:

```js
import { Injectable, NgModule, Component, OnInit } from '@angular/core';
```

It is unlikely that Angular would introduce a regression in a future release, in particular with `Injectable` which is our main dependency injection method. For context, it is a decorator (e.g: `@Injectable()`) which Angular uses to know what to inject. However, keep an eye out for changes related to any of these when looking to determine compatibility.

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
cd ~/tmp
npx create-react-app web-shim-test-react --template typescript
cd web-shim-test-react
npm link {YOUR_PATH_HERE}/web-shim-codegen/build/react
```

### Vue Example App

```
cd ~/tmp
npm create vue@latest vue-web-shim-test
// follow the instructions
npm link {YOUR_PATH_HERE}/web-shim-codegen/build/vue/v3
```

### Angular Example App

```
cd ~/tmp
ng new angular-example-app
// follow the instructions
npm link {YOUR_PATH_HERE}/web-shim-codegen/build/onesignal-ngx
```

## Link Builds with Local Project

Creates a symlink to allow test projects to automatically pick up changes from builds.

### React

`npm link {YOUR_PATH_HERE}/web-shim-codegen/build/react`

### Vue3

`npm link {YOUR_PATH_HERE}/web-shim-codegen/build/vue/v3`

### Vue2

`npm link {YOUR_PATH_HERE}/web-shim-codegen/build/vue/v2`

### Angular

`npm link {YOUR_PATH_HERE}/web-shim-codegen/build/onesignal-ngx`

## Rebuilding to test changes to package

Run `npm run build` here to rebuild all packages

- Your test projects should automatically be pick up the changes, since `npm link` does a symlink for you.

## Troubleshooting

### Changes not showing in your test project?

- Try re-link with the `npm link ...` command noted above, as the symlink may have broken
- Try removing the file's top level package import and re-importing via VSCode auto-import (start typing package name, hit enter)

### Check the module

Check the package in the `node_modules` directory to see if it is updated with latest changes
