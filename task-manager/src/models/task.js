const mongoose = require('mongoose');

const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

// const toDo = new Task({
//     description: ' prepare      dinner  ',
//     completed: true
// });

// toDo.save().then(() => {
//     console.log(toDo);
// }).catch((err) => {
//     console.log(err);
// });

module.exports = Task;