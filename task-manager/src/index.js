const express = require('express');
require('./db/mongoose');

const User = require('./models/user');
const Task = require('./models/task');

const app = express();
const port = process.env.PORT || 3000

//automatically parse incoming json to an object => can access it in the request handler
app.use(express.json())

app.post('/users', async (req, res) => {
    // console.log(req.body)
    // res.send('testing')
    
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user);

    } catch (e) {
        res.status(400).send(e);

    }

    // user.save().then(() => {
    //     res.status(201).send(user);
    // }).catch((e) => {
    //     res.status(400).send(e);
    // })
})

app.get('/users', async (req, res) => {

    try {
        const users = await User.find({});
        res.send(users);
    } catch (e) {
        res.status(500).send();
    }
})

app.get('/users/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const user = await User.findById(_id);
        
        if (!user) {
                    return res.status(404).send()
                }
                res.send(user);
    } catch (e) {
        res.status(500).send();
    }

    // User.findById(_id).then((user) => {
    //     if (!user) {
    //         return res.status(404).send()
    //     }

    //     res.send(user);
    // }).catch((e) => {
    //     res.status(500).send();
    // })
})

//update
app.patch('/users/:id', async (req, res) => {

    //to convert object into an array of properties 
    const updates = Object.keys(req.body)

    const allowUpdates = ['name', 'email', 'password', 'age'];
    const isValidOperation = updates.every((update) => allowUpdates.includes(update))

    if (!isValidOperation) {
        //if false
        return res.status(400).send({error: 'Invalid Updates'})
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.get('/tasks', async (req, res) => {
    
    try {
        const tasks = await Task.find({});
        res.send(tasks);
    } catch (e) {
        res.status(500).send();
    }
})

app.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const task = await Task.findById(_id);
        if (!task) {
            res.status(404).send();
        }
        res.send(task);
    } catch (e) {
        res.status(500).send();
    }
})

app.post('/tasks', async (req, res) => {
    const task = new Task(req.body);

    try {
        await task.save();
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send();
    }
})

app.patch('/tasks/:id', async (req, res) => {

    const updates = Object.keys(req.body);
    const allowed = ['completed', 'description'];
    const isValid = updates.every((update) => allowed.includes(update));

    if (!isValid) {
        return res.status(400).send({error: 'Invalid Update'})
    }

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        
        if (!task) {
            return res.status(404).send()
        }

        res.send(task);
    } catch (e) {
        res.status(400).send(e)
    }

})

app.listen(port, () => {
    console.log('server is up on port ', port)
});
