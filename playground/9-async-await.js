const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (a < 0 || b < 0) {
                return reject('Numbers must be positive')
            }
            resolve(a + b);
        }, 2000)
    })
}

const doWork = async () => {
    // throw new Error('something went wrong')
    // return 1
    const sum = await add(1, 99);
    const sum2 = await add(sum, 50);
    const sum3 = await add(sum2, -3);
    return sum3
}

doWork().then((res) => {
    console.log('result ', res);
}).catch((e) => {
    console.log('e ',e);
})