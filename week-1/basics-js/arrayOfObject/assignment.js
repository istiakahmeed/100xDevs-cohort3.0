// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

const users = [
  { name: "John Doe", age: 25 },
  { name: "Jane Smith", age: 20 },
  { name: "Alice Johnson", age: 19 },
  { name: "Bob Brown", age: 32 },
];

function filterUsers(users) {
  return users.filter((user) => user.age > 18);
}

const filteredUsers = filterUsers(users);
console.log(filteredUsers); // Output: [{ name: "John Doe", age: 25 }, { name: "Bob Brown", age: 32 }]
