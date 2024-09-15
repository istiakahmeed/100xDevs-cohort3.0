const express = require("express");
const app = express();

app.use(express.json()); // Parse JSON bodies

const users = [];

// Function to generate a random token
function generateToken() {
  let options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];
  let token = "";

  for (let i = 0; i < options.length; i++) {
    token += options[Math.floor(Math.random() * options.length)];
  }
  return token;
}

// Signup route
app.post("/signup", (req, res) => {
  const { username, password } = req.body;

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
    message: "User created successfully",
  });
});

app.post("/signin", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    const token = generateToken();
    user.token = token;
    res.send({
      token: token,
    });
    console.log(users); // Log users to see stored data
  } else {
    res.status(403).send({
      message: "Invalid username or password",
    });
  }
});

app.get("/me", (req, res) => {
  const token = req.headers.token;
  const foundUser = users.find((user) => user.token === token);

  if (foundUser) {
    res.json({
      username: foundUser.username,
      password: foundUser.password,
    });
  } else {
    res.status(403).json({
      message: "Invalid token",
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
