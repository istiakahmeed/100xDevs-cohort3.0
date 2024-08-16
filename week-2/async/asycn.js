const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  console.log(data);
});

// SetTimeout

function run() {
  console.log("I will run after 1 sec");
}

setTimeout(run, 1000);

function first() {
  console.log("I am first");
}

function second() {
  first();
  console.log("I am second");
}
second();
