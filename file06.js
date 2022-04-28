const randomDelayPromise = (value) => new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve(value);
    }, (Math.random()) * 3000);
})

randomDelayPromise(1).then(console.log);
randomDelayPromise(2).then(console.log);
randomDelayPromise(3).then(console.log);

// Reihenfolge?