// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve([1, 3, 5])
//         reject('Things went wrong')
//     }, 2000)
// })

// doWorkPromise.then((result) => {
//     console.log('success: ', result)
// }).catch((err) => {
//     console.log('error: ', err);
// })

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000)
    })
}

// add(1, 2).then((sum) => {
//     console.log(sum);

//     add(sum, 5).then((sum2 ) => {
//         console.log(sum2);
//     }).catch((e) => {
//         console.log(e);
//     })
// }).catch((e) => {
//     console.log(e);
// })


//promise Chaining
add(1, 2).then((sum) => {
    console.log(sum);
    return add(sum, 3)
}).then((sum2) => {
    console.log(sum2)
}).catch(e => {
    console.log(e)
})