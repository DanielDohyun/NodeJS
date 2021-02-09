const path = require('path');

const express = require('express');

const app = express();

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const publicDir = path.join(__dirname, '../public')

//way to customize a server
app.use(express.static(publicDir))

app.get('/people', (req, res) => {
    res.send([{
        name: 'daniel',
        age: '26'
    },
        {
            name: 'mark',
            age: '30'
        }
    ]);
});

app.get('/contact', (req, res) => {
    res.send('<h1>contact page</h1>');
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: `It's Sunny`,
        location: 'toronto'
    })
})


//starts the app
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

