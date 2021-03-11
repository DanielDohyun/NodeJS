//Delete
MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to database')
    }
    
    const db = client.db(databaseName);
 
    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((res) => {
    //     console.log(res);
    // }).catch((err) => {
    //     console.log(err);
    // })

    db.collection('tasks').deleteOne({
        description: 'take a nap'
    }).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })

})