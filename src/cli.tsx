#!/usr/bin/env node
import React from "react";
import { render } from "ink";
import meow from "meow";
import App from "./app";
import { getPackageManager } from "./getPackageManager";

const cli = meow(
  `
  Usage
    $ create-that-app

  Options
    --help            Show help
    -t, --typescript  Only show Typescript options
`,
  {
    flags: {
      typescript: {
        type: "boolean",
        alias: "t",
      },
    },
  }
);

const packageManager = getPackageManager();

render(<App packageManager={packageManager} onlyTS={cli.flags.typescript ?? false} />);
