// Assignments #1
// Write a function that takes a user as an input and greets them with their name and age

function greetUser(user) {
  console.log(`Hello, ${user.name}! You are ${user.age} years old.`);
}

const user1 = { name: "John Doe", age: 30 };
greetUser(user1);

// Assignments #2
// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

function greetUserWithGender(user) {
  let greeting =
    user.gender === "male"
      ? "Mr."
      : user.gender === "female"
      ? "Mrs."
      : "Others";
  console.log(`Hi ${greeting}, ${user.name}! Your age is ${user.age}.`);
}

const user2 = { name: "Jane Doe", age: 21, gender: "female" };

greetUserWithGender(user2);

// Assignments #3
// Also tell the user if they are legal to vote or not

function checkVotingAge(user) {
  console.log(
    `Hello, ${user.name}! You are ${user.age} years old. ${
      user.age >= 18
        ? "You are eligible to vote."
        : "You are not eligible to vote."
    }`
  );
}

const user3 = { name: "Alice Doe", age: 17 };

checkVotingAge(user3);
