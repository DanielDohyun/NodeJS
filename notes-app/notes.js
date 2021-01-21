const chalk = require('chalk');
const fs = require('fs');

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title, hobby) {
    const notes = loadNotes();

    const duplicateNotes = notes.filter(function (note) {
        return note.title === title 
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            hobby: hobby,
        })
        saveNotes(notes);
        console.log("new note added")
    } else {
        console.log('note title taken')
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }
}

const removeNote = function (title) {

    //load and turn JSON into object
    const binaryData = fs.readFileSync('notes.json');
    const stringData = binaryData.toString();
    const objectData = JSON.parse(stringData);
    
    const noteChecker = function () {
        const present = objectData.filter(note => note.title === title)
        if (present.length > 0) {
            //find index of an item that would be removed 
            const index = objectData.findIndex(data => data.title === title);
                    
            // this returns the arr of removed items
            const removedData = objectData.splice(index, 1);

            //now objectData arr contains the remaining values
            const newData = JSON.stringify(objectData);
            // console.log(objectData);
            fs.writeFileSync('notes.json', newData);

            console.log(chalk.bgGreen('Note removed!'))
        } else {
            console.log(chalk.bgRed('No note found!'))
        }
    } 

    noteChecker();
};

// when you try to export multiple fxn/data, export them as an object
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
};