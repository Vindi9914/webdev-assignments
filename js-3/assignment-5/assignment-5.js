'use strict';

const numbers = [];
let isUnique = true;

while (isUnique) {
  const input = Number(prompt('Enter a number:'));

  if (numbers.includes(input)) {
    alert(`The number ${input} has already been given!`);
    isUnique = false;
  } else {
    numbers.push(input);
  }
}

numbers.sort((a, b) => a - b);

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}