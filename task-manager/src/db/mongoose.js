const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const me = new User({
    name: 'Daniel',
    age: 20
});

me.save().then(() => {
    console.log(me)
}).catch((err) => {
    console.log('error: ', err)
})

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
});

const toDo = new Task({
    description: 'prepare dinner',
    completed: false
});

toDo.save().then(() => {
    console.log(toDo);
}).catch((err) => {
    console.log(err);
});