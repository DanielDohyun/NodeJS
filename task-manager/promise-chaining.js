//to connect to the database
require('./src/db/mongoose');
const User = require('./src/models/user');
const Task = require('./src/models/task');

//60514fb15a8c5a296426779d

// User.findByIdAndUpdate('60514fd3248ef921e40d6e9b', { age: 1 }).then((user) => {
//     console.log(user);
//     return User.countDocuments({age: 1})
// }).then((res) => {
//     console.log(res);
// }).catch((e) => {
//     console.log(e);
// })

Task.findByIdAndDelete('6051533ca161b001e49dd5cf').then((task) => {
    console.log(task);
    return Task.countDocuments({completed: false})
}).then((res) => {
    console.log(res);
}).catch((e) => {
    console.log(e);
})