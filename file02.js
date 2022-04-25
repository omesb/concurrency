setTimeout(() => console.log(0), 0);
setTimeout(() => console.log(1), 1000);
console.log(2);
console.log(3);
console.log(4);

// http://www.strawpoll.me/46034799

// A                B     
//       0                0
//       2                1
//       3                2
//       4                3
//       1                4

//  C               D
//       2                2
//       3                3
//       4                4
//       0                1
//       1                0

