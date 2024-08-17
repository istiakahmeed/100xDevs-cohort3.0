// Callback Hell

setTimeout(() => {
  console.log("Hi");
  setTimeout(() => {
    console.log("Hello");
    setTimeout(() => {
      console.log("Welcome");
    }, 3000);
  }, 2000);
}, 1000);

// Promisified version

/**Assignment
Write code that
logs hi after 1 second
logs hello 3 seconds after step 1
logs hello there 5 seconds after step 2 */
// Solution #1 callback hell

function setTimeoutPromisified(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

setTimeoutPromisified(1000).then(() => {
  console.log("Hi");
  return setTimeoutPromisified(2000).then(() => {
    console.log("Hello");
    return setTimeoutPromisified(3000).then(() => {
      console.log("Hi there");
    });
  });
});

// Solution #2 Promise chaining
setTimeoutPromisified(1000)
  .then(function () {
    console.log("hi");
    return setTimeoutPromisified(3000);
  })
  .then(function () {
    console.log("hello");
    return setTimeoutPromisified(5000);
  })
  .then(function () {
    console.log("hello there");
  });

// Solution #3 Async/Await
function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function solve() {
  await setTimeoutPromisified(1000);
  console.log("hi");
  await setTimeoutPromisified(3000);
  console.log("hello");
  await setTimeoutPromisified(5000);
  console.log("hi there");
}

solve();
