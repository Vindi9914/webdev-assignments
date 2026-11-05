'use strict';

const name = prompt('Enter your name:');

const houseNumber = Math.floor(Math.random() * 4) + 1;

let house = '';

switch (houseNumber) {
  case 1:
    house = 'Gryffindor';
    break;
  case 2:
    house = 'Slytherin';
    break;
  case 3:
    house = 'Hufflepuff';
    break;
  case 4:
    house = 'Ravenclaw';
    break;
}

document.querySelector('#target').innerHTML = `${name}, you are ${house}.`;