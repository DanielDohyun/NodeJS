const express = require('express');
const Task = require('../models/task');
const router = express.Router();

router.get('/tasks', async (req, res) => {
    
    try {
        const tasks = await Task.find({});
        res.send(tasks);
    } catch (e) {
        res.status(500).send();
    }
})

router.get('/tasks/:id', async (req, res) => {
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

router.post('/tasks', async (req, res) => {
    const task = new Task(req.body);

    try {
        await task.save();
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send();
    }
})

router.patch('/tasks/:id', async (req, res) => {

    const updates = Object.keys(req.body);
    const allowed = ['completed', 'description'];
    const isValid = updates.every((update) => allowed.includes(update));

    if (!isValid) {
        return res.status(400).send({error: 'Invalid Update'})
    }

    try {

        // find the task
        const task = await Task.findById(req.params.id);

        // alter the task properties
        updates.forEach((update) => task[update] = req.body[update]);

        // save the task
        await task.save();

        // const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        
        if (!task) {
            return res.status(404).send()
        }

        res.send(task);
    } catch (e) {
        res.status(400).send(e)
    }

})

router.delete('/tasks/:id', async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id)

    try {
        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router;