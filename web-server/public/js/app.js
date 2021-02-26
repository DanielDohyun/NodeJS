console.log('client side js file is loaded')

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;

    fetch(`http://localhost:3000/weather?address=` + location ).then(res => {
    res.json().then((res) => {
        if (res.error) {
            return console.log(res.error)
        }
        console.log(res.location);
        console.log(res.forecast);
    })
})
})