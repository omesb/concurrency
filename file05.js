const prom = new Promise((resolve, reject) => {
    if("gute sachen") {
        resolve("jippie :) ")
    }
    if("schlechte sachen") {
        reject("sadface :( ")
    }
});

prom
    .then()
    .catch()
    .finally()