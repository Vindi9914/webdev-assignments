'use strict';

const numDice = parseInt(prompt('Enter the number of dice:'));
const targetSum = parseInt(prompt('Enter the target sum of the eyes:'));
const target = document.querySelector('#target');

const simulations = 10000;
let matchCount = 0;

for (let i = 0; i < simulations; i++) {
  let currentSum = 0;
  for (let d = 0; d < numDice; d++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    currentSum += roll;
  }
  if (currentSum === targetSum) {
    matchCount++;
  }
}

const probability = ((matchCount / simulations) * 100).toFixed(2);

target.textContent = `Probability to get sum ${targetSum} with ${numDice} dice is ${probability}%`;