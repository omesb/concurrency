const randomDelayPromise = (value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, Math.random() * 3000);
  });

async function asi() {
  console.time("asi");
  const [one, two, three] = await Promise.all([randomDelayPromise(1), randomDelayPromise(2), randomDelayPromise(3)]);

  console.log(one, two, three);
  console.timeEnd("asi");
}

asi();
