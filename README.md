<div align="center"><p><a href="https://nodei.co/npm/node-input.js/"><img src="https://nodei.co/npm/node-input.js.png?downloads=true&stars=true"></a></p><p><a href="https://www.npmjs.com/package/node-input.js"><img src="https://img.shields.io/npm/v/node-input.js.svg?maxAge=3600" alt="Version"></a><a href="https://www.npmjs.com/package/node-input.js"><img src="https://img.shields.io/npm/dt/node-input.js.svg?maxAge=3600" alt="Downloads"></a></p><p>

# Installation
npm: `npm i node-input.js`

# About
node-input.js is a package for reading inputs from terminal/command line

# Examples 
## Example with Async/Await
```js
const { input } = require("node-input.js");

(async function main () {
    let name = await input("What is your name? ");
    let sport = await input("What is your favorite sport? ");

    console.log(`Hello ${name}, do want to play ${sport} together sometime?`);

    process.exit();
})();
```
## Example with a stream
```js
const { stream } = require("node-input.js");

let input = stream.connect((buffer) => {
    let args = buffer.toString().trim().split(" ");

    switch (args[0].toLowerCase()) {
        case "exit":
            process.exit();
            break;
        case "eval":
            let res = eval(args.slice(1).join(" "));
            console.log(res);
            break;
        case "disconnect":
            stream.disconnect(input);
            break;
    }
})
```

# Working on
- Synchronous input
- Fixing input in REPL