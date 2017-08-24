// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// import { sayHello } from './hello.js';
let sayHello = require('./hello');

console.log('hello world!')

document.body.addEventListener('click', () => {
  console.log(sayHello('world'))
})