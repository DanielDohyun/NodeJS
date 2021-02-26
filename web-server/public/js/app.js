console.log('client side js file is loaded')

fetch('http://localhost:3000/weather?address=toronto').then(res => {
    res.json().then((res) => {
        if (res.error) {
            return console.log(res.error)
        }
        console.log(res);
        console.log(res.location);
        console.log(res.forecast);
    })
})