'use strict';

const startInput = prompt('Enter the starting year:');
const endInput = prompt('Enter the ending year:');

const startYear = parseInt(startInput);
const endYear = parseInt(endInput);

const targetList = document.querySelector('#target');

if (!isNaN(startYear) && !isNaN(endYear)) {
  let htmlContent = '';
  
  for (let year = startYear; year <= endYear; year++) {
    
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      htmlContent += `<li>${year}</li>`;
    }
  }
  
  targetList.innerHTML = htmlContent;
}