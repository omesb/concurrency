async function asi() {
  let result;
  setTimeout(() => (result = true), 0);
  result = false;
  return result;
}

asi().then(console.log)

// https://www.strawpoll.me/46034800
