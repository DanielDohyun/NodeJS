const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=f75dec76090767ae2467c1b4b4e65ec6&query=toronto';

request({ url: url }, (err, response) => {
    const data = JSON.parse(response.body);
    console.log(data.current);

})