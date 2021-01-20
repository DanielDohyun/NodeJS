// require will load in fs modules
// const fs = require('fs');

// fs.writeFileSync('notes.txt', 'Start learning NodeJS course ');

// fs.appendFileSync('notes.txt', 'adding some stuff');

const name = require('./utils');
const add = require('./utils');
const notes = require('./notes');

const sum = add(4, -2);

const print = notes();

console.log(name);
console.log(sum);
console.log(print);