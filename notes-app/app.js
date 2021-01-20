// require will load in fs modules
// const fs = require('fs');

// fs.writeFileSync('notes.txt', 'Start learning NodeJS course ');

// fs.appendFileSync('notes.txt', 'adding some stuff');

const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
// const name = require('./utils');
// const add = require('./utils');
const notes = require('./notes');

// const sum = add(4, -2);

// const print = notes();

// console.log(name);
// console.log(sum);
// console.log(print);

// console.log(validator.isEmail('danielxcvd.com'));
// console.log(validator.isURL('https:/google.com'));

// console.log(chalk.green('success'));
// console.log(chalk.bold('fail'));
// console.log(chalk.bold.green('success'));
// console.log(chalk.bold.inverse.green('success'));
// console.log(chalk.bgRed.green('success'));

// argv returns the arr containing 1. path of Node file, 2. path to the app that's running, 3. string passed my command line
// console.log(process.argv[2]);
// const command = process.argv[2];

// if (command === 'add') {
//     console.log('adding note')
// } else if (command === 'remove') {
//     console.log('removing note')
// }

// customize yargs version
yargs.version('1.1.0');

//add, remove, read, list 
//create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    handler: function () {
        console.log('adding a new note')
    }
});

//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    handler: function () {
        console.log('removing a new note')
    }
});

//create list command
yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler: function () {
        console.log('listing the notes')
    }
});

//create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('reading a note')
    }
});

// console.log(process.argv);
console.log(yargs.argv);

