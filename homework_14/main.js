'use strict';

//TASK 0. Найдите числа которые повторяются нечетное количество раз в массиве

function solution(arr) {

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
const solution2 = arr => arr.filter(number => {
  return arr.filter(elem => elem === number).length % 2;
}).filter((elem, index, arr) => arr.indexOf(elem) === index);

// console.log(solution([12, 23, 34, 12, 12, 23, 12, 45])); //-> [34 45]
// console.log(solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100, ])); // -> [4 100 5000]
// console.log(solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9])); //-> [6 5 9 21]
// console.log(solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42])); //-> [8 16 23 42]
// console.log(solution([2, 2, 44, 44])); // => []


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

const app = {
  appName: 'Тест по програмированию',
  questions: [{
    name: 'Что делает оператор ===?',
    answers: ['Сравнивает по ссылке, а не по значению',
      'Сравнивает без приведения типа',
      'Нет такого оператора'
    ],
    rightAnswers: [1]
  }, {
    name: 'Что получится, если сложить true + false?',
    answers: ['truefalse', '0', 1],
    rightAnswers: [2]
  }, {
    name: 'Чему равно значение выражения 4 - "5" + 0xf - "1e1"?',
    answers: ['Цифре', 'Строке', 'NaN'],
    rightAnswers: [0]
  }],

  createLi() {
    return document.createElement('li');
  },

  createQuestions(question) {

    const li = this.createLi();
    const ul = this.new('ul');
    const h3 = this.new('h3');

    h3.textContent = question.name;

    question.answers.forEach(answer => {
      const htmlAnswer = this.createAnswer(answer);
      ul.appendChild(htmlAnswer);
    });

    li.appendChild(h3);
    li.appendChild(ul);

    return li;
  },
  createAnswer(answer) {

    const li = this.createLi();
    const label = this.new('label');
    const input = this.new('input');

    label.textContent = answer;
    input.setAttribute('type', 'checkbox');

    li.appendChild(input);
    li.appendChild(label);

    return li;
  },
  render() {

    const body = document.body;
    const main = this.new('main');
    const h1 = this.new('h1');
    const ol = this.new('ol');
    const button = this.new('button');

    h1.textContent = this.appName;
    button.textContent = 'Submit';


    main.appendChild(h1);
    main.appendChild(ol);

    this.questions.forEach(question => {
      const htmlQuestion = this.createQuestions(question);
      ol.appendChild(htmlQuestion);
    });

    main.appendChild(button);
    body.appendChild(main);
  },

  new(tag) {
    return document.createElement(tag);
  }
}

app.render();
