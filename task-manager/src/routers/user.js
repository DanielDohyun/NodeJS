const express = require('express')
const { Mongoose } = require('mongoose')
const { findByIdAndUpdate } = require('../models/user')
const User = require('../models/user')
const router = new express.Router();
const auth = require('../middleware/auth');

router.post('/users', async (req, res) => {
    // console.log(req.body)
    // res.send('testing')
    
    const user = new User(req.body)

    try {
        await user.save()
        const token = user.generateAuthToken()
        res.status(201).send({user, token});

    } catch (e) {
        res.status(400).send(e);

    }
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken()
        // res.send({ user: user.getPublicProfile() , token });
        res.send({ user, token });
    } catch (e) {
        res.status(400).send()
    }
})

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })

        await req.user.save();

        res.send();
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = [];
        await req.user.save();

        res.send();
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/users/me', auth, async (req, res) => {
   res.send(req.user)
})

// router.get('/users/:id', async (req, res) => {
//     const _id = req.params.id;

//     try {
//         const user = await User.findById(_id);
        
//         if (!user) {
//                     return res.status(404).send()
//                 }
//                 res.send(user);
//     } catch (e) {
//         res.status(500).send();
//     }
// })

//update
router.patch('/users/me', auth, async (req, res) => {

    //to convert object into the strings of array of properties 
    const updates = Object.keys(req.body)

    const allowUpdates = ['name', 'email', 'password', 'age'];
    const isValidOperation = updates.every((update) => allowUpdates.includes(update))

    if (!isValidOperation) {
        //if false
        return res.status(400).send({error: 'Invalid Updates'})
    }

    try {

        // const user = await User.findById(req.params.id);
        updates.forEach((update) => req.user[update] = req.body[update]);

        await req.user.save()

        // findByIdAndUpdate bypasses Mongoose. it performs a direct operation on the database
        // const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        res.send(req.user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/users/me', auth, async (req, res) => {
    try {
        // const user = await User.findByIdAndDelete(req.user._id)

        // if (!user) {
        //     return res.status(404).send()
        // }

        await req.user.remove();
        res.send(req.user);

    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router