const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=f75dec76090767ae2467c1b4b4e65ec6&query=toronto';

// request({ url: url }, (err, response) => {
//     const data = JSON.parse(response.body);
//     console.log(data.current);
// });

//if you set json = true => gives response data as an object 
// request({ url: url, json: true }, (err, response) => {
//     console.log(response.body.current);
// });

request({url:url, json:true}, (err, res) => {
    console.log(`${res.body.current.temperature} + ${res.body.current.precip}`)
})