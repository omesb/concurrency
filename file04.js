async function asi() {
  let result;
  setTimeout(() => (result = true), 0);
  result = false;
  return result;
}

console.log(asi());

// https://www.strawpoll.me/46034800
