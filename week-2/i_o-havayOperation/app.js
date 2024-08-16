// Start all 3 tasks together, and wait for them to finish.

// const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function (err, contents) {
//   console.log(contents);
// });

// fs.readFile("b.txt", "utf-8", function (err, contents) {
//   console.log(contents);
// });

// fs.readFile("a.txt", "utf-8", function (err, contents) {
//   console.log(contents);
// });

// Function Arguments

// Approach #1

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function dopOperation(a, b, op) {
  return op(a, b);
}

// console.log(sum(1, 2)); 1st Approach

console.log(dopOperation(1, 2, sum));
