console.log('client side js file is loaded')

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const msgOne = document.querySelector('.location');
const msgTwo = document.querySelector('.forecast');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;
    msgOne.textContent = 'Loading...';
    msgTwo.textContent = '';

    fetch(`/weather?address=` + location ).then(res => {
    res.json().then((res) => {
        if (res.error) {
            return msgOne.textContent = res.error
        }
        msgOne.textContent = res.location;
        msgTwo.textContent = res.forecast;
    })
})
})