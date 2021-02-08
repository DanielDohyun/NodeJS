const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

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

const location = process.argv[2];

if (!location) {
    console.log('please provide a location')
} else {
    geocode(location, (err, data) => {

        // can either use if and else or return statement
        // if (err) {
        //     console.log('error ', err);
        //     console.log('data ', data)
        // } else {
        //     forecast(data.latitude, data.longitude, (err, data) => {
        //         console.log('Error', err)
        //         console.log('Data', data)
        //     })
        // }
    
        if (err) {
            return console.log('error ', err);
            
        } 
        forecast(data.latitude, data.longitude, (err, res) => {
            if (err) {
                    return console.log(err)
            }
            console.log(data.location);
            console.log(res);
            })
    
    })
}
