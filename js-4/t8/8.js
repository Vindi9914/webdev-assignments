'use strict';

const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operationSelect = document.getElementById('operation');
const calculateButton = document.getElementById('start');
const resultP = document.getElementById('result');

calculateButton.addEventListener('click', function() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const operation = operationSelect.value;
  let result = 0;

  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'sub':
      result = num1 - num2;
      break;
    case 'multi':
      result = num1 * num2;
      break;
    case 'div':
      result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
      break;
  }

  resultP.textContent = `Result: ${result}`;
});