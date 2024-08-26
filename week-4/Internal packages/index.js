// Internal Packages

/* 
Node.js provides you some packages out of the box. Some common ones include

1. fs-FileSystem
2.path-Path related function
3.http-Create HTTP Servers
*/

// fs package

const fs = require("fs");
const path = require("path");

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "a.txt");

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
