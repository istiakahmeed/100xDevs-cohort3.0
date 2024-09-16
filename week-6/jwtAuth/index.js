const express = require("express");
const path = require("path");
const jwt = require("jsonwebtoken");

const app = express();
const JWT_SECRET = "ilovemina"; // Secret key for JWT
app.use(express.json());

const users = [];

function auth(req, res, next) {
  const token = req.headers.token;
  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).send({
          message: "Unauthorized",
        });
      } else {
        req.user = decoded; // Attach the decoded token to the req object
        next();
      }
    });
  } else {
    res.status(401).send({
      message: "Unauthorized",
    });
  }
}

app.post("/signup", (req, res) => {
  const { username, password } = req.body;

  // Simple validation
  if (!username || !password) {
    return res
      .status(400)
      .send({ message: "Username and password are required" });
  }

  users.push({
    username,
    password,
  });

  res.send({
    message: "You are signed up",
  });
});

// Route to handle user signin
app.post("/signin", (req, res) => {
  const { username, password } = req.body;

  // Find the user by username
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    // Generate JWT token
    const token = jwt.sign(
      {
        username: user.username,
      },
      JWT_SECRET
    );
    user.token = token; // Assign the token to the user object
    res.send({
      token,
    });
    console.log(users); // Log the users to verify
  } else {
    res.status(403).send({
      message: "Invalid username or password",
    });
  }
});

// Route to return user details using the token
app.get("/me", auth, (req, res) => {
  const user = req.user;
  res.send({
    username: user.username,
  });
});

// Serve the index.html file on the root route
app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "public", "index.html"); // Use path.join to create the absolute path
  res.sendFile(filePath); // Send the file
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
