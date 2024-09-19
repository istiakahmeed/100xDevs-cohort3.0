const express = require("express");
const jwt = require("jsonwebtoken");
const { UserModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");

const mongoose = require("mongoose");

mongoose.connect("");

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  await UserModel.create({
    name: name,
    email: email,
    password: password,
  });

  res.status(201).json({ message: "User created successfully" });
});

app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const response = await UserModel.findOne({
    email: email,
    password: password,
  });

  if (response) {
    const token = jwt.sign({ id: response._id.toString() }, JWT_SECRET);
    res.json({ token: token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.post("/todo", auth, async function (req, res) {
  const userId = req.userId;
  const title = req.body.title;
  const done = req.body.done;

  await TodoModel.create({
    userId,
    title,
    done,
  });

  res.json({
    message: "Todo created",
  });
});

app.get("/todos", auth, async function (req, res) {
  const userId = req.userId;

  const todos = await TodoModel.find({
    userId,
  });

  res.json({
    todos,
  });
});

app.listen(3000);
