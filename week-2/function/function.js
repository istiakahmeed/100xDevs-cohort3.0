// Find sum of two numbers

function sum(a, b) {
  return a + b;
}

console.log(sum(5, 3)); // Output: 8

// Find the maximum of two numbers

function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(max(5, 3)); // Output: 5

// Find sum from 1 to a number

function sum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}

const ans = sum(100);
console.log(ans);

// Synchronous code

function sum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}

const ans1 = sum(100);
console.log(ans1);
const ans2 = sum(1000);
console.log(ans2);
const ans3 = sum(10000);
console.log(ans3);
