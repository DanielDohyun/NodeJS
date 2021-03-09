const request = require('request');

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f75dec76090767ae2467c1b4b4e65ec6&query=' + lat +',' + long;

    request({ url, json:true }, (err, {body}) => {
        if (err) {
            callback('Unable to connect to location services')
            
        } else if (body.error) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            // console.log(body.current)
            callback(undefined, 'Its ' + body.current.temperature + ' degree celsius and feels like ' + body.current.feelslike + ' deg celsius' + body.current.precip + ' % chance of rain')
        }
    })
}

module.exports = forecast;