'use strict';

/*
 TASK 0

 Отобразите всех лидеров массива.
 *
 * Элемент лидер если он больше чем все последующие элементы
 * после него ( элементы справа ).
 * Последний элемент всегда лидер. Например в массиве [16,17,4,3,5,2] 
 * лидеры 17, 5 и 2.

 * */
// const findMax = (arr) => {
//   let min = arr[0];
//   let max = min;

//   for (let i = 1; i < arr.length; ++i) {
//     if (arr[i] > max) {
//       max = arr[i];
//       return [max, i];
//     };
//   }
// }

let fMax;
let fMin;
let index;

function getMax(arr) {
  let arrLen = arr.length,
    maxEl = arr[0];
  for (let i = 0; i < arrLen; i++) {
    if (maxEl <= arr[i]) {
      maxEl = arr[i];
      index = i;
    }
  }
  return [maxEl, index];
}

let newArr = [];

const solution = (arr) => {

  let max = getMax(arr);
  newArr.push(max[0]);
  let cutArr = arr.slice([max[1] + 1]);

  if (cutArr.length !== 1 && cutArr.length !== 0) {
    solution(cutArr);
  } else if (cutArr.length) {
    newArr.push(cutArr[0]);
  }
  return newArr;
}

// console.log(solution([16, 17, 4,3, 5, 2])); //=== [17, 5, 2]
// console.log(solution([4, 3, 7, 12, 6, 67, 5, 45, 34, 35, 2, 8])); // [67, 45, 35, 8]
// console.log(solution([12, 10, 12, 8, 7, 6])); // [12, 8, 7, 6]
// console.log(solution([1, 2, 3, 4, 5, 4])); // [5, 4]



/* TASK 1
 * Сделайте карусель.
 * При клике по кнопке "<=" показывается первое изображение по "=>" последнее.
 *
 *
 * Сделайте слайдер - бесконечным, после третьего изображения снова первое.
 * Добавьте внизу цифры с текущим активным изображением.
 *
 * 


 * 
 * @SUPER -> @front-end
 * Уберите в стилях li - position:absolute.
 * изменяйте свойство transform:translate3d у .carousel, добавьте transition
 * и сделайте чтобы картинки передвигались влево и вправо
 *
 * @PUPER -> переход к первой картинка
 *
 * */


/*

* TASK 2
* Сделайте класс, который будет иметь метод topStyle
* метод topStyle принимает объект с CSS стилями и добавляет в <head>
*   новый элемент с данными стилями
*
*
* */
// .topStyle('fetch', {backgroundColor:'blue'})


class createStyleInHead {

  topStyle(className, obj) {

    let head = document.getElementsByTagName('head');
    let keyArr = [];
    let valueArr = [];

    for (let key in obj) {
      keyArr.push(key);
      valueArr.push(obj[key]);
    }

    let emptyString = `<style>.${className}{`;

    for (let i = 0; i < keyArr.length; i++) {
      if (i === 0) {
        emptyString += `${keyArr[i]}:${valueArr[i]}`;
      } else {
        emptyString += `;${keyArr[i]}:${valueArr[i]}`;
      }
    }
    emptyString += `</style>`;

    head.insertAdjacentHTML('beforebegin', emptyString);
  }

};

let test = new createStyleInHead();
// test.topStyle('fetch', { 'background-color': 'blue', color: 'red' });


/* @SUPER
 *
 * Напишите функцию которая будет преобразовывать CSS-свойство в 
 * ликвидное JS свойство
 *
 * background-color -> backgroundColor
 * margin-left -> marginLeft
 * flex-basis -> flexBasis
 *
 * ...etc
 *
 * сделать через regExp
 *
 * */


const changeable = (value) => {

  let reg = '-';
  if (value.includes(reg)) {
    let valueArr = value.split('-');
    for (let i = 0; i < valueArr.length; i++) {
      if (i != 0) {
        valueArr[i] = valueArr[i].slice(0, 1).toUpperCase() + valueArr[i].slice(1);
      }
    }
    return valueArr.join('');
  }
}

// console.log(changeable('background-color'));
// console.log(changeable('border-radius-right'));
/* 


Нужно визуализировать keypad.html -> keypad.js
Нужно визуализировать index.html -> app.js

Структура виртуализации:
 
 - header - один блок 

 - main - второй блок

 >------ Это 2 разных класса
 У каждого из классов, рендер на странице запускается при помощи метода .render

innerHTML по максимуму

https://aleksandra-maslennikova.github.io/telephone-book/keypad.html
Сделайте чтобы при нажатии на кнопку цифра отобразилась в <span class="numbers">
*/


/*
https://aleksandra-maslennikova.github.io/telephone-book/index.html
По клику по заголовку таблицы, таблица сортировалась по соответствующему свойству
*/
