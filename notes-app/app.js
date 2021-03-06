// require will load in fs modules
// const fs = require('fs');

// fs.writeFileSync('notes.txt', 'Start learning NodeJS course ');

// fs.appendFileSync('notes.txt', 'adding some stuff');

const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');


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
    builder: {
        title: {
            describe: 'Note title',
            //have to provide description in order for this command to work correctly
            demandOption: 'true',
            type: 'string',
        },
        hobby: {
            describe: 'My hobby',
            demandOption: 'true',
            type: 'string'
        },
    },
    handler (argv) {
        notes.addNote(argv.title, argv.hobby);
    }
});

//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: 'true',
            type: 'string',
        },
    },
    handler (argv) {
        notes.removeNote(argv.title);
        // console.log('removing a new note')
    }
});

//create list command
yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler () {
        notes.listNotes();
    }
});

//create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: 'true',
            type: 'string',
        }
    },
    handler (argv) {
        notes.readNote(argv.title);
    }
});

// console.log(process.argv);
// console.log(yargs.argv);
yargs.parse();

