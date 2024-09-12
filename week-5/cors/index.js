const express = require("express");
const path = require("path");
const app = express();

// Route to calculate the sum
app.get("/sum", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({
      error: "Both 'a' and 'b' must be valid numbers.",
    });
  }

  res.json({
    ans: a + b, // Return the sum as 'ans'
  });
});

// Route to serve the HTML file
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server on port 3000
app.listen(3000, function () {
  console.log("Server is running on http://localhost:3000");
});
