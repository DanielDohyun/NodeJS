const express = require('express');
require('./db/mongoose');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000

//automatically parse incoming json to an object => can access it in the request handler
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('server is up on port ', port)
});

const bcrypt = require('bcryptjs');

const myFunction = async () => {
    const password = 'abc12345';
    const hashedPassword = await bcrypt.hash(password, 8);

    const isMatch = await bcrypt.compare(password, hashedPassword)
    console.log(isMatch)
}

myFunction()