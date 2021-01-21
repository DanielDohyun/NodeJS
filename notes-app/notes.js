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

// when you try to export multiple fxn/data, export them as an object
module.exports = {
    getNotes: getNotes,
    addNote: addNote
};