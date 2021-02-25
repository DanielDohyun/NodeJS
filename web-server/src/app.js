const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// __dirname = src

//define paths for express configs
const publicDir = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//setup handlebars engine and view location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//setup static directory to serve
//static means, assets do not change
app.use(express.static(publicDir));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Daniel'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Daniel'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help page',
        name: 'Daniel'
        
    })
})

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

