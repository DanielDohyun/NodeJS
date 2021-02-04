const request = require('request');

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f75dec76090767ae2467c1b4b4e65ec6&query=' + lat +',' + long;
    console.log(url)

    request({ url: url, json:true }, (err, res) => {
        if (err) {
            callback('Unable to connect to location services')
            
        } else if (res.body.error) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                name: res.body.location.name,
                name: res.body.current.temperature,
                name: res.body.current.weather_descriptions,
            })
        }
    })
}

module.exports = forecast;