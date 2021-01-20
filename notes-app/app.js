// require will load in fs modules
// const fs = require('fs');

// fs.writeFileSync('notes.txt', 'Start learning NodeJS course ');

// fs.appendFileSync('notes.txt', 'adding some stuff');

const validator = require('validator');
const name = require('./utils');
const add = require('./utils');
const notes = require('./notes');

// const sum = add(4, -2);

// const print = notes();

// console.log(name);
// console.log(sum);
// console.log(print);

console.log(validator.isEmail('danielxcvd.com'));
console.log(validator.isURL('https:/google.com'));