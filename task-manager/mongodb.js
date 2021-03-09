const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to database')
    }
    
    const db = client.db(databaseName);

    db.collection('users').insertOne({
        name: 'daniel',
        age: 26
    }, (err, result) => {
        
    })
})
