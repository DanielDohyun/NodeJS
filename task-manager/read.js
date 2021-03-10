//read
MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to database')
    }
    
    const db = client.db(databaseName);

    //findOne = 1st arg is an object and 2nd is a callback fxn
    // db.collection('users').findOne({ _id: new ObjectID('6047ecb55671411b743df3a0') }, (err, user) => {
    //     if (err) {
    //         return console.log('unable to fetch')
    //     }
    //     console.log(user)
    // })

    //find => return value is a cursor, which is a pointer to the data
    db.collection('users').find({ name: 'daniel' }).toArray((err, users) => {
        console.log(users);
    })
 
    //return number of item back
    db.collection('users').find({ name: 'daniel' }).count((err, count) => {
        console.log(count);
    })

    // db.collection('tasks').findOne({_id: new ObjectID("6047edd815a57f26644f8e3e")}, (err, task) => {
    //     console.log(task);
    // })

    // db.collection('tasks').find({ completed: false }).toArray((err, tasks) => {
    //     console.log(tasks);
    // })
})