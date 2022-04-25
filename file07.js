const randomDelayPromise = (value) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(value);
    }, (Math.random()) * 5000);
})

async function asi() {
    console.log(randomDelayPromise(1));
    console.log(randomDelayPromise(2));
    console.log(randomDelayPromise(3));
}

asi();