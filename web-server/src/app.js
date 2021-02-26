const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const url = 'http://api.weatherstack.com/current?access_key=f75dec76090767ae2467c1b4b4e65ec6&query=toronto';

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
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    }

    geocode(req.query.address, (err, {latitude, longitude, location} ) => {
    
        if (err) {
            return res.send({ err });
        } 

        forecast(latitude, longitude, (err, forecastData) => {
            if (err) {
                    return res.send({err})
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })

            })
    
    })

})

app.get('/products', (req, res) => {

    if (!req.query.search) {
        //write return => code beneath does not run => can avoid err 
        return res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query)
    res.send({
        products: [],
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Daniel',
        errorMsg: 'Help article not found'
    })
})

//* = wildcard, match anything that hasn't been matched so far
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Daniel',
        errorMsg: 'Page not found'
    })
})

//starts the app
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

