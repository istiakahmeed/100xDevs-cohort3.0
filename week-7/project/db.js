const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const User = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const Todo = new Schema({
  userId: { type: ObjectId, ref: "users" },
  title: String,
  done: { type: Boolean, default: false },
});

const UserModel = mongoose.model("users", User);
const TodoModel = mongoose.model("todos", Todo);

module.exports = {
  UserModel,
  TodoModel,
};
