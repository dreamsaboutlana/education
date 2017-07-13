'use strict';

const root = document.getElementById('root');
const btn = document.getElementById('btn');

let style = [
  { color: 'red' },
  { color: 'black' },
  { color: 'blue' },
  { color: 'green' },
  { color: 'yellow' }
];


document.getElementById('btn').onclick = () => {
  let div = document.body.querySelector('.theme');
  div.classList.toggle('newClass');
};

// let counter = 0;
// setInterval( () => {
//   root.style.backgroundColor = style[counter].color;
//   counter++;
//   if(counter === style.length-1) counter = 0;
// }, 1000);

let rightDiraction;
root.onmousemove = () => {
  if (!rightDiraction) {
    let leftPosition = parseInt(root.style.left) || 0;
    root.style.left = ++leftPosition + 'px';
    if (rightDiraction === 400) {
      rightDiraction = true;
    }
  } else {
    let leftPosition = parseInt(root.style.left) || 0;
    root.style.left = --leftPosition + 'px';
    if (rightDiraction === 0) {
      rightDiraction = false;
    }
  }

}
