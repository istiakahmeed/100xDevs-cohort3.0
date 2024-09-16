const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());
const JWT_SECRET = "ilovemina";

let users = [];
let todos = [];

// Middleware for authenticating users
function auth(req, res, next) {
  const token = req.headers.token;
  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      req.user = decoded;
      next();
    });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}

// Sign-up route
app.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({ username, password: hashedPassword });
  res.json({ message: "User signed up successfully" });
});

// Sign-in route
app.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);
  if (!user) {
    return res.status(400).json({ message: "Invalid username or password" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: "Invalid username or password" });
  }

  const token = jwt.sign({ username: user.username }, JWT_SECRET);
  res.json({ token });
});

// Create a new TODO
app.post("/todos", auth, (req, res) => {
  const { title, description } = req.body;
  const newTodo = {
    id: todos.length + 1,
    username: req.user.username,
    title,
    description,
    completed: false,
  };

  todos.push(newTodo);
  res.json({ message: "Todo created successfully", todo: newTodo });
});

// Get all todos for the logged-in user
app.get("/todos", auth, (req, res) => {
  const userTodos = todos.filter((todo) => todo.username === req.user.username);
  res.json(userTodos);
});

// Update a TODO
app.put("/todos/:id", auth, (req, res) => {
  const todoId = parseInt(req.params.id);
  const { title, description, completed } = req.body;

  const todo = todos.find(
    (todo) => todo.id === todoId && todo.username === req.user.username
  );
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todo.title = title || todo.title;
  todo.description = description || todo.description;
  todo.completed = completed !== undefined ? completed : todo.completed;

  res.json({ message: "Todo updated successfully", todo });
});

// Delete a TODO
app.delete("/todos/:id", auth, (req, res) => {
  const todoId = parseInt(req.params.id);

  const todoIndex = todos.findIndex(
    (todo) => todo.id === todoId && todo.username === req.user.username
  );
  if (todoIndex === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todos.splice(todoIndex, 1);
  res.json({ message: "Todo deleted successfully" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
