const express = require('express');
const app = express();

//root url
app.get('/', (req, res) => {
    res.send('<h1>Home</h1>');
});

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

app.get('/about', (req, res) => {
    res.send('<h1>About page</h1>');
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: `It's Sunny`,
        location: 'toronto'
    })
})

app.get('/help', (req, res) => {
    res.send('help page');
});


//starts the app
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

