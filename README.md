# TSDX React Workspace
> Start working on that React module in no time (and without 😭)

> This TSDX setup is meant for developing React components (not apps!) that can be published to NPM. If you’re looking to build an app, you should use `create-react-app`, `razzle`, `nextjs`, `gatsby`, or `react-static`.
> If you’re new to TypeScript and React, checkout [this handy cheatsheet](https://github.com/sw-yx/react-typescript-cheatsheet/)

## Commands

## Start TSDX in the package folder

```Bash
yarn workspace <package> start
```

## Install your package in the example app
_Import for your example app to function properly._

```Bash
yarn workspace example add <package>@*
```

## Start Parcel in the example folder

```Bash
yarn workspace example start
```

_Preferably, run it in a second terminal window_

## Build TSDX in the package folder

```Bash
yarn workspace <package> build
```

## Publish your package

```Bash
yarn workspace <package> publish
```

Note: `<package>` is the name of your package in `./package/package.json`

## Tip: alias `yarn workspace`

In your `.bashrc`, add thse lines

```Bash
alias yws="yarn workspace"
alias ywss="yarn workspaces"
```

Now, you case use `yws` instead of `yarn workspace` and `ywss` instead of `yarn workspaces`

_Follow me on [Twitter](https://twitter.com/imedadel_) :)_
