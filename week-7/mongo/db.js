const mongoose = require("mongoose");

const Schema = mongoose.schema();
const objectId = mongoose.objectId();

const User = new Schema({
  name: String,
  email: String,
  password: String,
});

const Todo = new Schema({
  userId: objectId,
  title: String,
  description: String,
  done: Boolean,
});

const UserModel = mongoose.model("user", User);
const TodoModel = mongoose.model("todo", Todo);

module.exports = {
  UserModel,
  TodoModel,
};
