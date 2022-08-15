#!/usr/bin/env node
import React from "react";
import { render } from "ink";
// import meow from 'meow';
import App from "./ui";
import { getPackageManager } from "./getPackageManager";

// const cli = meow(`
// 	Usage
// 	  $ create-that-app

// 	Options
// 		--name  Your name

// 	Examples
// 	  $ create-that-app --name=Jane
// 	  Hello, Jane
// `, {
// 	flags: {
// 		name: {
// 			type: 'string'
// 		}
// 	}
// });

const packageManager = getPackageManager();

render(<App packageManager={packageManager} />);
