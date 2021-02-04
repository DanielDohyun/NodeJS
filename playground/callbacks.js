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