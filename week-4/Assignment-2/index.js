import { Command } from "commander";
import fs from "fs";
const program = new Command();

const TODO_FILE = "todos.json";

function readTodos() {
  try {
    const data = fs.readFileSync(TODO_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading or parsing todos.json:", error.message);
    return [];
  }
}

function writeTodos(todos) {
  fs.writeFileSync(TODO_FILE, JSON.stringify(todos, null, 2));
}

program
  .command("add <task>")
  .description("Add a new todo")
  .action((task) => {
    const todos = readTodos();
    todos.push({ task, done: false });
    writeTodos(todos);
    console.log(`Added: "${task}"`);
  });

program
  .command("delete <index>")
  .description("Delete a todo by its index")
  .action((index) => {
    const todos = readTodos();
    if (index < 0 || index >= todos.length) {
      console.log("Invalid index");
      return;
    }
    const removed = todos.splice(index, 1);
    writeTodos(todos);
    console.log(`Deleted: "${removed[0].task}"`);
  });

program
  .command("done <index>")
  .description("Mark a todo as done")
  .action((index) => {
    const todos = readTodos();
    if (index < 0 || index >= todos.length) {
      console.log("Invalid index");
      return;
    }
    todos[index].done = true;
    writeTodos(todos);
    console.log(`Marked as done: "${todos[index].task}"`);
  });

program
  .command("list")
  .description("List all todos")
  .action(() => {
    const todos = readTodos();
    if (todos.length === 0) {
      console.log("No todos found");
      return;
    }
    todos.forEach((todo, index) => {
      console.log(`${index}: [${todo.done ? "x" : " "}] ${todo.task}`);
    });
  });

program.parse(process.argv);
