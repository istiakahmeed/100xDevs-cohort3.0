// thats work synchronously
const fs = require("fs");

// const contents = fs.readFileSync("a.txt", "utf-8");

// console.log(contents);

// I/O bound tasks vs CPU bound tasks

// CPU bound tasks

let ans = 0;
for (let i = 1; i <= 1000000; i++) {
  ans = ans + i;
}
console.log(ans);

// I/O bound tasks

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);
