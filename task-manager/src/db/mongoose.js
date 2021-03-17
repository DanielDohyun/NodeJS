const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        //validation name is required
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        //email validation using validator library
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },

    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain the word "password"')
            }
        }

    },

    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }
})

const me = new User({
    name: '  Daniel   ',
    email: 'DAN@hotmail.com',
    age: 20,
    password: 'abccvc 11   '
});

// me.save().then(() => {
//     console.log(me)
// }).catch((err) => {
//     console.log('error: ', err)
// })

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