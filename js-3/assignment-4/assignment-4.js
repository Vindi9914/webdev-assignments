'use strict';

const numbers = [];
let num = Number(prompt('Enter a number (0 to stop):'));

while (num !== 0) {
  numbers.push(num);
  num = Number(prompt('Enter a number (0 to stop):'));
}

numbers.sort((a, b) => b - a);

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}