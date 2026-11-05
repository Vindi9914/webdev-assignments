'use strict';

const input = prompt('Enter an integer:');
const num = parseInt(input);
const target = document.querySelector('#target');

let isPrime = true;

if (isNaN(num) || num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break; 
    }
  }
}

if (isPrime) {
  target.textContent = `${num} is a prime number.`;
} else {
  target.textContent = `${num} is not a prime number.`;
}