const express = require('express');
const app = express();

//root url
app.get('/', (req, res) => {
    res.send('Hello express');
});

app.get('/help', (req, res) => {
    res.send('help page');
});

app.get('/about', (req, res) => {
    res.send('about page');
});

app.get('/weather', (req, res) => {
    res.send('weather page');
});

//starts the app
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

