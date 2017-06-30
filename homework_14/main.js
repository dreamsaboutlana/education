'use strict';

//TASK 0. Найдите числа которые повторяются нечетное количество раз в массиве

function uniqueElem(arr) {

  let result = {};
  let nArr = [];

  for (let i = 0; i < arr.length; ++i) {
    let a = arr[i];
    if (result[a] != undefined) {
      ++result[a];
    } else {
      result[a] = 1;
    }
  }

  for (let key in result) {

    if (result[key] % 2 !== 0) {
      nArr.push(key);
    }
  }
  return nArr;

}
// console.log(uniqueElem([12, 23, 34, 12, 12, 23, 12, 45])); //-> [34 45]
// console.log(uniqueElem([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100, ])); // -> [4 100 5000]
// console.log(uniqueElem([3, 3, 4, 6, 4, 5, 9, 9, 21, 9])); //-> [6 5 9 21]
// console.log(uniqueElem([4, 8, 15, 16, 23, 42, 4, 15, 42, 42])); //-> [8 16 23 42]
// console.log(uniqueElem([2, 2, 44, 44])); // => []


const someWebpackModule = `module.exports = {
    context: %%HOMEDIR%,
    entry: {
        app: "%%HOMEDIR%%/%%APP_DIR%%/%%APPNAME%%.js"
    },
    output: {
        path: %%HOMEDIR%% + '/app',
        filename: "dist/[%%APPNAME%%].js",
        library: '[%%APPNAME%%]'
    }
   }`;

/* TASK - 1
Распарсите строку и замените 
 %%HOMEDIR%% -> './JavaScript-Basic'
 %%APP_DIR%% -> 'fixtures/src'
 %%APPNAME%% -> 'app.js'
 
 Вам нужно написать функцию которая в зависимости от разных параметров
 будет изменять заданные значения на необходимые вам
 
 Сделайте несколько экземпляров данной функции
 *
 *
 * */
const myRegExp = (str, homeDir, appDir, appName) => {

  let reg1 = /%%HOMEDIR%%/g;
  let reg2 = /%%APP_DIR%%/g;
  let reg3 = /%%APPNAME%%/g;

  str = str.replace(reg1, homeDir).replace(reg2, appDir).replace(reg3, appName);

  return str;
}

// console.log(myRegExp(someWebpackModule, './JavaScript-Basic', 'fixtures/src', 'app.js'));


/*
 TASK - 2
 Сделайте разметку как скриншоте используя HTML
 вам необходимо использовать тэги(!)
*/


/* 
TASK 3
 JavaScript =>
  Создать объект с методами, которые будут динамически генерировать DOM

  Это будет тест, который мы будем разрабатывать в следующих заданиях.
  Сейчас вам нужно только динамически создать html,
  методы должны храниться в одном объекте.

  Изначально на странице должен быть только <body>, 
  вызывая методы объекта нужно создать dom-элементы

*/

// let app = {
//   createTag(tag) {

//   }
// };

let create = tag => document.createElement(tag);;

let h1 = create('h1');
h1.textContent = 'Тест по програмированию';
document.body.appendChild(h1);

let form = create('form');

// let label = create('label');
var labelInfo = ['Что делает оператор ===?',
  'Что получится, если сложить true + false?',
  'Чему равно значение выражения 4 - "5" + 0xf - "1e1"?'
];
var inputInfo = [
  ['Сравнивает по ссылке, а не по значению',
    'Сравнивает без приведения типа',
    'Нет такого оператора'
  ],
  ['truefalse', '0', 1, 'NaN'],
  ['Цифре', 'Строке', 'NaN']
];


labelInfo.forEach((elem, index) => {

  const div = create('div');
  div.setAttribute("class", "form_block");

  const legend = create('legend');
  div.appendChild(legend);
  legend.textContent = elem;

  inputInfo[index].forEach(val => {
    const label = create('label');
    const span = create('span');

    const input = create('input');
    input.setAttribute("type", "checkbox");

    label.appendChild(input);
    label.appendChild(span);

    span.textContent = val;
    div.appendChild(label);
  });

  form.appendChild(div);
});
const div = create('div');
div.setAttribute("class", "form_block");
let button = create('input');
button.setAttribute("type", "submit");
button.setAttribute("value", "Send");
div.appendChild(button);
form.appendChild(div);

document.body.appendChild(form);



// app.render();
