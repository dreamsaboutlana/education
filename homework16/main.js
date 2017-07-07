'use strict';

/* 0 Алгоритмы
 Реализуйте функцию которая будет превращать трехмерный массив 
 в двухмерный
 а если массив двухмерный, тогда в трехмерный массив

 // solution([ [1, 'a'],[2, 'b'],[3, 'c'] ]) => [[1, 2, 3],[a, b, c]]
 // solution([ [1, 3, 5],[2, 4, 6] ]) => [ [1, 2],[3, 4],[5, 6] ]
 // solution([[]]) => []
 

 ИСПОЛЬЗУЙТЕ МЕТОДЫ МАССИВОВ !
 */

const flatten = arr =>
  arr.reduce((flattenArr, elem) => {
    return !Array.isArray(elem) ? flattenArr.concat(elem) : flattenArr.concat(flatten(elem));
  }, []);

function changingMatrix(arr) {

  let newArr = [];
  let a = flatten(arr);
  let n = arr.length;
  let param = arr[0].length;

  for (let i = 0; i < param; i++) {
    newArr.push(a.slice(n * i, n + n * i));
  }

  return newArr;
}

// console.log(changingMatrix([
//   [1, 3, 5],
//   [2, 4, 6]
// ]));
// console.log(changingMatrix([
//   [1, 'a'],
//   [2, 'b'],
//   [3, 'c']
// ]));

/*
 Визуализируйте массив, если в коллекции есть свойство children,
  тогда создайте вложенный лист
 name - свойство h1
 children ul->li

 Используйте innerHTML

 */

const navigation = [{
  name: 'Главная'
}, {
  name: 'Каталог',
  children: [{
    name: 'Компьютеры',
    children: [
      { name: 'Ноутбуки' },
      { name: 'Планшеты' }
    ]
  }]
}, { name: 'Профиль' }];
// console.log(navigation);
//получить массив
// запустить цыкл выделить каждый элемент масива
// вывести имя
//если в элемента массива есть children создать список

const main = document.createElement('main');
const ul = document.createElement('ul');

const createList = (arr) => {
  ul.innerHTML = '';
  for (let i = 0; i < arr.length; i++) {
    ul.innerHTML += `<li><h1> ${(arr[i].name)}</h1></li>`;
    if (arr[i].children !== undefined) {
      return ul.innerHTML += `<ul>${createList(arr[i].children)}</ul>`;
    }
  }
  return ul.innerHTML;
}
const visualArray = arr => {
  arr.forEach((elem, index) => {
    main.innerHTML += `<h1>${elem.name}</h1>`;
    if (elem.children != undefined) {
      ul.innerHTML += `${createList(elem.children)}`;
    }
  });

  main.appendChild(ul);
  document.body.appendChild(main);
};

visualArray(navigation);

/*  ПРИЛОЖЕНИЕ  */
// 1. Форкните репозиторий Саши.
// Добавьте скрипт который будет рисовать всю страницу с таблицей.
// https://github.com/aleksandra-maslennikova/my-phone-book
// удалите на всех страницах bootstrap.js, jquery.js
// по максимуму

// 2. Напишите функцию, которая будет получать последнего родителя
// у элемента, но не body

// 3. При нажатии на кнопку если были выбраны правильные ответы,
// отображайте "ПРАВИЛЬНО" или не правильно
// или отображайте значек X или галочку, возле вопроса
