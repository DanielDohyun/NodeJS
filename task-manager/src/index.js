const express = require('express');
require('./db/mongoose');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next();        
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently unavailable due to the maintenance')
// })

//automatically parse incoming json to an object => can access it in the request handler
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('server is up on port ', port)
});

const jwt = require('jsonwebtoken');

const myFunction = async () => {
    const token = jwt.sign({ _id: 'abcd123' }, 'hello', { expiresIn: '7 days' });
    console.log(token);

    const data = jwt.verify(token, 'hello');
    console.log(data)
}

myFunction()