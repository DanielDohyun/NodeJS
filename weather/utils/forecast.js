const request = require('request');

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f75dec76090767ae2467c1b4b4e65ec6&query=' + lat +',' + long;

    request({ url: url, json:true }, (err, res) => {
        if (err) {
            callback('Unable to connect to location services')
            
        } else if (res.body.error) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, 'Its ' + res.body.current.temperature + ' degree celsius and ' + res.body.current.precip + ' % chance of rain')
        }
    })
}

module.exports = forecast;