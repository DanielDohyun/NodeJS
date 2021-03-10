const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

//create
MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to database')
    }
    
    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'daniel',
    //     age: 26
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user')
    //     }

    //     //ops return result of array.
    //     console.log(result.ops);
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Albert',
    //         age: 22
    //     },
    //     {
    //         name: 'Dave',
    //         age: 29
    //     }
    // ], (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert doc')
    //     }
    //     console.log(result.ops);
    // })

    db.collection('tasks').insertMany([
        {
            description: 'Study',
            completed: false
        },
        {
            description: 'do exercise',
            completed: false
        },
        {
            description: 'take a nap',
            completed: true
        }
    ], (err, result) => {
        if (err) {
            return console.log('unable to insert docs')
        }

        console.log(result.ops);
    })
})
