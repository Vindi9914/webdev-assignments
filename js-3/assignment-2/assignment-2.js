'use strict';

const countInput = prompt('Enter the number of participants:');
const count = countInput ? Number(countInput) : 0;
const participants = [];

for (let i = 0; i < count; i++) {
  const name = prompt(`Enter name ${i + 1} of ${count}:`);
  if (name) {
    participants.push(name);
  }
}

participants.sort();

const targetList = document.getElementById('target');
if (targetList) {
  targetList.innerHTML = '';
  for (let i = 0; i < participants.length; i++) {
    const li = document.createElement('li');
    li.textContent = participants[i];
    targetList.appendChild(li);
  }
}