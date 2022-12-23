// How NodeJS is different from vanilla JS
// 1. Node runs on a server - not in a browser (backend not frontend)
// 2. The console is the terminal window
    console.log('Hello World'); // run this using the command node <filename> *extension no bar : on the terminal

// 3. Global object instead of window object
//  console.log(global);
// 4. Has Common Core modules 
// 5. Common JS modules instead of ES6 modules.
// 6. Missing some JS API's like fetch, but we can import packages 

const os = require('os');
const path = require('path');
//const math = require('./math'); // Second method to import other files
const {add, subtract, multiply, divide} = require('./math');

console.log(add(6,9));
console.log(multiply(6,9));
console.log(subtract(6,9));
console.log(divide(6,9));

//OS and File names fetching operations
console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));