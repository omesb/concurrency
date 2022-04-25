const prom = new Promise((resolve, reject) => {
    resolve("manually resolved")
})
// const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
// wait(0).then(console.log("waited"));

setTimeout(() => console.log(0), 0);
setTimeout(() => console.log(1), 1_000);
prom.then(console.log);
console.log(2);
console.log(3);
console.log(4);
