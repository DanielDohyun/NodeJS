//update
MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to database')
    }
    
    const db = client.db(databaseName);
    
    //first arg = filter, 2nd = update 
    // db.collection('users').updateOne({
    //     _id: new ObjectID("6047eb3046ce9546c4309888")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.log(err);
    // })
    // db.collection('users').updateOne({
    //     _id: new ObjectID("6047eb3046ce9546c4309888")
    // }, {
    //     $set: {
    //         name: 'Park'
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.log(err);
    // })

    db.collection('tasks').updateMany({ completed: false }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })
})