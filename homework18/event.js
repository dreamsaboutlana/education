'use strict';
let resize = [...document.querySelectorAll('.resize')];

resize.forEach(elem => {
  elem.addEventListener('keydown', () => {
    console.log('lololo');
  });
});