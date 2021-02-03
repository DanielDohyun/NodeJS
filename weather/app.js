const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=f75dec76090767ae2467c1b4b4e65ec6&query=toronto';

// request({ url: url }, (err, response) => {
//     const data = JSON.parse(response.body);
//     console.log(data.current);
// });

//if you set json = true => gives response data as an object 
// request({ url: url, json: true }, (err, response) => {
//     if (err) {
//         console.log('Unable to connect to weather service')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.current);
//     }
// });

// request({url:url, json:true}, (err, res) => {
//     console.log(`${res.body.current.temperature} + ${res.body.current.precip}`)
// })


const toronto = 'https://api.mapbox.com/geocoding/v5/mapbox.places/toronto.json?access_token=pk.eyJ1Ijoia2tkaDExMDkiLCJhIjoiY2trcHBpejNxMDc2bjJ2bXUwcW11dHZyMCJ9.84ME-PdBrbc6UtHTC8kmcQ&limit=1'

request({ url: toronto, json: true }, (err, res) => {
    if (err) { 
        console.log('Unable to connect to geo service')
    } else if (res.body.features.length === 0) {
        console.log('Unable to find location')
    } else {
        // features is arr of 1 item
        const latitude = res.body.features[0].center[1];
        const longitude = res.body.features[0].center[0];
        console.log('longitude is ' + longitude + 'latitude is ' + latitude)
    }
})