const http = require('http');

const url = 'http://api.weatherstack.com/current?access_key=f75dec76090767ae2467c1b4b4e65ec6&query=40,-75';

const request = http.request(url, (res) => {
    let data = '';
    
    //allows to register a handler
    //this fires when data comes in
    res.on('data', (chunk) => {
        data = data + chunk.toString()
        // console.log(chunk);
    })

    res.on('end', () => {
        const body = JSON.parse(data);
        console.log(body)
    })
});

request.on('err', (err) => {
    console.log('An error', err)
});

request.end();