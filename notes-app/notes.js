const chalk = require('chalk');
const fs = require('fs');

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, hobby) => {
    const notes = loadNotes();

    const duplicateNotes = notes.filter(note =>
        note.title === title);
    
    // filter returns arr of matches whereas find returns the first match if there is any 
    const duplicateNote = notes.find(note => note.title === title);

    if (!duplicateNote) {
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

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }
}

const removeNote = (title) => {

    //load and turn JSON into object
    const binaryData = fs.readFileSync('notes.json');
    const stringData = binaryData.toString();
    const objectData = JSON.parse(stringData);
    
    const noteChecker = () => {
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

const listNotes = () => {
    console.log(chalk.bgBlue('Your notes'));

    const notes = loadNotes();
    notes.forEach(note => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);
    if (!note) {
        console.log(chalk.red('Note not found'));
    } else {
        console.log(chalk.bold(note.title));
        console.log(note.hobby);
    }
};

// when you try to export multiple fxn/data, export them as an object
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
};