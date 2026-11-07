'use strict';

function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

const maxSides = Number(prompt('Enter the number of sides on the dice:'));

const targetList = document.getElementById('target');
let roll;

do {
  roll = rollDice(maxSides);
  const li = document.createElement('li');
  li.textContent = roll;
  targetList.appendChild(li);
} while (roll !== maxSides);