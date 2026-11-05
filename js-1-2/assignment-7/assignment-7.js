'use strict';

const diceCount = parseInt(prompt('Enter the number of dice rolls:'));

let sum = 0;

for (let i = 0; i < diceCount; i++) {

  const roll = Math.floor(Math.random() * 6) + 1;
  sum += roll;
}

document.querySelector('#target').innerHTML = `The sum of the dice rolls is: ${sum}`;