'use strict';
/*
 // !
 4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
 */
let arr = ['jo', 'nelson', 'jurie'];

function nameToUpperCase(arr) {
  let helpArr = [];
  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1).toLowerCase();
    helpArr.push(elem);
  }
  return helpArr;
}
console.log(nameToUpperCase(arr));
