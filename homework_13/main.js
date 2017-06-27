'use strict';
const someWebpackModule = `module.exports = {
    context: '',
    entry: {
        app: "%%HOMEDIR%%/%%APP_DIR%%/%%APPNAME%%.js"
    },
    output: {
        path: %%HOMEDIR%% + '/app',
        filename: "dist/[%%APPNAME%%].js",
        library: '[%%APPNAME%%]'
    }
   }`;

function changeInFile(str) {

  let reg1 = /%%HOMEDIR%%/g;
  let reg2 = /%%APP_DIR%%/g;
  let reg3 = /%%APPNAME%%/g;

  str = str.replace(reg1, './JavaScript-Basic').replace(reg2, 'fixtures/src').replace(reg3, 'app.js');

  return str;
}
class Replacer {
  constructor(reg, str) {
    this.reg = reg;
    this.str = str;
  }

  replaceStr(changingStr) {
    console.log(this.reg);
    changingStr = changingStr.replace(this.reg, this.str);
    return changingStr;
  }
}

let replace1 = new Replacer(/%%HOMEDIR%%/g, './JavaScript-Basic');
let replace2 = new Replacer(/%%APP_DIR%%/g, 'fixtures/src');
let replace3 = new Replacer(/%%APPNAME%%/g, 'app.js');

// console.log(replace1.replaceStr(someWebpackModule));
// console.log(replace2.replaceStr(someWebpackModule));
// console.log(replace3.replaceStr(someWebpackModule));


// console.log(changeInFile(someWebpackModule));
/* Распарсите строку и замените TASK - 1
 %%HOMEDIR%% -> './JavaScript-Basic
 %%APP_DIR%% -> 'fixtures/src
 %%APPNAME%% -> 'app.js'

 
 Вам нужно написать функцию которая в зависимости от разных параметров
 будет изменять заданные значения на необходимые вам
 
 Сделайте несколько экземпляров данной функции
 *
 *
 * */

/*
 * TASK - 2
 *
 * Перепишите Homework 12 - TASK 1 используя class
 *
 * */

class Human {
  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.gender = options.gender;
    this.height = options.height;
    this.weight = options.weight;
  }
}

class Worker extends Human {
  constructor(options) {
    super(options);
    this.jobPlace = options.jobPlace;
    this.payment = options.payment;
  }
  working() {
    console.log('I should working very often');
  }
}
class Student extends Human {
  constructor(options) {
    super(options);
    this.studyPlace = options.studyPlace;
    this.scholarship = options.scholarship;
  }
  watchingSerials() {
    console.log('I love watching Serials');
  }
}

let a = new Worker({
  'name': 'Sveta',
  'age': 25,
  'gender': 'female',
  'height': 173,
  'weight': 60,
  'company': 'Google Int.',
  'paymant': 8000
});
let b = new Student({
  'name': 'Sveta',
  'age': 25,
  'gender': 'female',
  'height': 173,
  'weight': 60,
  'studyPlace': 'KhPI',
  'scholarship': 200
});
// console.log(b);


/*
 *
 * TASK - 3
 *
 * Измените startTimer таким образом, чтобы числа отобразились последовательно
 * с 10 до 1
 * Изменять функцию serverResponse и шапку цикла - нельзя
 *
 * */

let startTimer = () => {
  let timer = 1000;
  let serverResponse = i => {
    return setTimeout(function() {
      console.log('zzzz');
      console.log(i);
    }, (timer = timer / 2));
  };
  for (let i = 10; i >= 1; i--) {
    serverResponse(i);
    timer = timer * i;
  }
};

// @ SUPER

/*
 * Вы должны создать имитацию медленной базы данных.
 * TASK - 1 Сделайте Класс Database с методами
 *
 *  query
 * 
 *  При запуске метода query запустите внутренний таймаут, который будет длиться 5 секунд.
 *  При поступлении еще 1 запроса(если вызвать метод еще раз), 
 *  таймаут должен стартануть сначала
 *  и ответ должен прийти снова через 5 секунд
 *
 * */

class DataBase {
  constructor() {}
  query() {

    setTimeout(() => {
      for (let i = 5; i >= 1; i --) {
        console.log(i);
      }
      console.log('The web server is down')
    }, 1000);
  }
}

const dataBase = new DataBase();
// dataBase.query();
// 5
// 4
// 3
// 2
// 1
// console.log('The web server is down') https://www.youtube.com/watch?v=W8_Kfjo3VjU

dataBase.query();
// 5
// 4
// dataBase.query();
// 5
// 4
// 3
// 2
// dataBase.query();
// 5
// 4
// 3
// 2
// 1
// console.log('The web server is down')
