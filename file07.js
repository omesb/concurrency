const randomDelayPromise = (value) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(value);
    }, (Math.random()) * 5000);
})

async function asi() {
    console.time("asi")
    console.log(await randomDelayPromise(1));
    console.log(await randomDelayPromise(2));
    console.log(await randomDelayPromise(3));
    console.timeEnd("asi")
}

asi();