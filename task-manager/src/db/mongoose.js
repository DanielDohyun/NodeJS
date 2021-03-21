const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

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

const toDo = new Task({
    description: ' prepare      dinner  ',
    completed: true
});

toDo.save().then(() => {
    console.log(toDo);
}).catch((err) => {
    console.log(err);
});