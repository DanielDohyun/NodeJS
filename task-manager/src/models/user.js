const mongoose = require('mongoose');
const validator = require('validator');

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

//to create a new instance of user
// const me = new User({
//     name: '  Daniel   ',
//     email: 'DAN@hotmail.com',
//     age: 20,
//     password: 'abccvc 11   '
// });

//to save user info
// me.save().then(() => {
//     console.log(me)
// }).catch((err) => {
//     console.log('error: ', err)
// })

module.exports = User;