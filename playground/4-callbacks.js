// setTimeout(() => {
//     console.log('2s timer');
// }, 2000)

// const names = ['david', 'chris', 'Kim'];
// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             longitude: 0,
//             latitude: 0,
//         }

//         callback(data);
//     }, 2000)
// }

// geocode('New York', (data) => {
//     console.log(data)
// })

const add = (x, y, callback) => {
    setTimeout(() => {
        callback(x+y)
}, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

const doWorkCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, [1,3,5])
        // callback('this is my error', undefined);
    }, 2000)
}

doWorkCallback((err, result) => {
    if (err) {
        return console.log(err)
    }
    console.log(result);
})