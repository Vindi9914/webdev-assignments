'use strict';

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

const targetList = document.getElementById('target');
let roll;

do {
  roll = rollDice();
  const li = document.createElement('li');
  li.textContent = roll;
  targetList.appendChild(li);
} while (roll !== 6);