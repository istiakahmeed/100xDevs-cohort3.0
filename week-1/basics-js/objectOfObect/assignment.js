// Create a function that takes an array of objects as input, and returns the users whose age > 18 and are male

function filterUsers(users) {
  return users.filter((user) => user.age > 18 && user.gender === "male");
}

// Example usage:

const users = [
  { name: "John Doe", age: 25, gender: "male" },
  { name: "Jane Smith", age: 16, gender: "female" },
  { name: "Alice Johnson", age: 30, gender: "male" },
  { name: "Bob Brown", age: 19, gender: "male" },
];

const filteredUsers = filterUsers(users);

console.log(filteredUsers); // Output: [{ name: "John Doe", age: 25, gender: "male" }, { name: "Alice Johnson", age: 30, gender: "male" }]
