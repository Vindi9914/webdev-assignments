'use strict';

const calculationInput = document.getElementById('calculation');
const calculateButton = document.getElementById('start');
const resultP = document.getElementById('result');

calculateButton.addEventListener('click', function() {
  const input = calculationInput.value;
  let result = 0;

  if (input.includes('+')) {
    const parts = input.split('+');
    result = parseInt(parts[0]) + parseInt(parts[1]);
  } else if (input.includes('-')) {
    const parts = input.split('-');
    result = parseInt(parts[0]) - parseInt(parts[1]);
  } else if (input.includes('*')) {
    const parts = input.split('*');
    result = parseInt(parts[0]) * parseInt(parts[1]);
  } else if (input.includes('/')) {
    const parts = input.split('/');
    result = parseInt(parts[0]) / parseInt(parts[1]);
  }

  resultP.textContent = `Result: ${result}`;
});