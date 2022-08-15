#!/usr/bin/env node
import React from "react";
import { render } from "ink";
// import meow from 'meow';
import App from "./ui";

const args = process.argv;

console.log({ args });

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

render(<App />);
