const randomDelayPromise = (value) => new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve(value);
    }, (Math.random()) * 3000);
})

randomDelayPromise(1);
randomDelayPromise(2);
randomDelayPromise(3);

// Reihenfolge?