// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS

function getEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

// Example usage

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = getEvenNumbers(numbers);
console.log(evenNumbers); // Output: [2, 4, 6, 8]
