console.log('start')

setTimeout(() => {
    console.log('2s timer')
}, 2000);

setTimeout(() => {
    console.log('0s timer')
}, 0);

// stop gets printed before 0s timer
// async fxns are placed in callback que and when main fxns are done, async fxns will be moved to call stack and run
//call stack => Node APIs => callback Que
console.log('stop')
