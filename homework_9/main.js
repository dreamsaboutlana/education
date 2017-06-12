'use strict';

// Legolas Task !

// TASK 1
// Отобразите достаточно ли у developers навыков ?
// Отобразите всех разработчиков и вызовете у каждого
// разработчика метод goodDev --

/*
 Количество требований к разработчику совпадает с его навыками.
 * Используйте в задаче this
 * */

let developer1 = {
  skills: ['JavaScript', 'linux', 'html', 'OOP', 'Node.js'],
  requires: ['Node.js', 'JavaScript', 'OOP', 'css'],
  goodDev: goodDev
};
let developer2 = {
  experience: [
    { technology: 'java' },
    { technology: 'c++' },
    { technology: 'aws' },
    { technology: 'docker' }
  ],
  requires: ['java', 'json', 'c++', 'JavaScript'],
  goodDev: goodDev
};

function goodDev(dev) {

  let requiresArray = this.requires;
  let newSkills = this.skills;
  let newExperience = this.experience;

  if (Array.isArray(newSkills)) {

    requiresArray.forEach((elem, index) => {

      countSkills(newSkills, elem);

    });

  } else if (newExperience) {

    Object.keys(newExperience).forEach((elem) => {

      let tech = newExperience[elem].technology;
      
      countSkills(requiresArray, tech)

    });
  }
}

function countSkills(arr, elem) {
  let flag = false;

  for (let i = 0; i < arr.length; i++) {
    if (elem === arr[i]) {
      console.log(arr[i] + '... success');
      flag = true;
    }
  }
  if (!flag) {
    console.log(elem + ' ... fail');
  }
}

let developers = [developer1, developer2];
developers.forEach((dev, index) => {
  console.log(`developer ${index + 1}`);
  dev.goodDev();
});

// developer 1
// required: Node.js ... success
// required: JavaScript ... success
// required: OOP ... success
// ---

// developer 2
// required: json ... fail
// required: JavaScript ... success
// required: Java ... success
// required: OOP ... success

/*
 *
 * TASK 2
 *
 * Создайте объект содержащий коллекцию элементов с одинаковыми
 * свойстами и разными значениями!
 *
 * Напишите функцию принимает 1 аргумент сортирует объект по 
 * переданному значению
 * 
 * При вызове функции используйте this
 *
 * */

let myObject = {
  database: [
    { age: 100, name: 'b' },
    { age: 15, name: 'c' },
    { age: 25, name: 'a' }
  ],
  mySort: mySorter

};

function mySorter(value) {

  this.database.sort((a, b) => {
    if (typeof this.database[0][value] == 'number') {
      return a[value] - b[value];
    } else if (typeof this.database[0][value] == 'string') {

      var elemA = a[value].toUpperCase();
      var elemB = b[value].toUpperCase();

      if (elemA < elemB) {
        return -1;
      }
      if (elemA > elemB) {
        return 1;
      }
      return 0;
    }
  });

  return this.database;
}

// {age:15, name:'c'}, {age:25, name:'a'} {age:100, name:'b'}

// console.log(myObject.mySort('age'));
// console.log(myObject.mySort('name'));

// {age:25, name:a}, {age:100, name: b} ...

/*
 * TASK 3
 *
 * Перепишите homework 5 с использованием методов массивов и
 * => arrow functions
 //___
/*
 task 3.1. 
 Переместите 0 в конец массива, остальные числа должны остаться
 неизменными
 .сoncat();
 example:
 [1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
 [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
 [ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]
 */
let arr1 = [1, false, 2, 0, 0, 0, 3, null, 0, 4, 0, 25];
let arr2 = ['a', 0, 0, 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9];

function moveZeroToEnd(arr) {

  let newArr = [];
  let zeroArr = [];

  arr.forEach((elem, index) => {

    if (elem !== 0) {
      newArr.push(elem);
    } else {
      zeroArr.push(elem);
    }
  });

  return newArr.concat(zeroArr);

}
console.log(moveZeroToEnd(arr1));
console.log(moveZeroToEnd(arr2));

// TASK 3.2  Верните сумму двух найменьших чисел в массиве

let arr = [10, 20, 1, 31, 11, 10];

function minimalNumber(arr) {
  let min = arr[0];
  let minIndex = 0;

  arr.forEach((elem, index) => {
    if (elem < min) {
      min = elem;
      minIndex = index;
    }
  })

  arr.splice(minIndex, 1);
  return min;
}

function summerizer(arr) {
  return minimalNumber(arr) + minimalNumber(arr);
}
console.log(summerizer(arr));

// TASK 3.3
// Напишите функцию которая меняет местами имя и фамилию

function nameShuffler(string) {
  return string.split(' ').reverse().join(' ');
}
console.log(nameShuffler('john McClane'));


// Task 3.4.
// Напишите функцию которая принимает массив с именами и возвращает массив
//в котором каждая буква становится заглавной

//capMe(['jo', 'nelson', 'jurie']) // returns ['Jo', 'Nelson', 'Jurie']
//capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']

let nameArr = ['jo', 'nelson', 'jurie'];

function nameToUpperCase(arr) {

  let helpArr = [];

  arr.forEach(elem => {
    let value = elem.slice(0, 1).toUpperCase() + elem.slice(1).toLowerCase();
    helpArr.push(value);
  })
  return helpArr;
}
console.log(nameToUpperCase(nameArr));

// TASK 3.@SUPER.1. Найдите число отсутствующее в заданной последовательности

/* example:
[1,3,5,9] => 7
[0,8,16,32] => 24
[4, 6, 8, 10] => 2 // число сначала
[0,16,24,32] => 8
*/

function random(arr) {

  let step = (arr[arr.length - 1] - arr[0]) / arr.length;

  arr.forEach((elem, index, arr) => {

    if ((step ^ 0) === step && (arr[index + 1] - arr[index]) !== step) {

      let mistNum = arr[index] + step;

      arr.splice(index + 1, 0, mistNum);
    } else if (arr[0] !== arr[1] - step && arr.length < 5) {

      let newStep = arr[index + 1] - arr[index];
      let lostNum = arr[0] - newStep;
      arr.splice(0, 0, lostNum);
    }
  });
  return arr;
}

// console.log(random([1, 3, 5, 9]));
// console.log(random([0, 8, 16, 32]));
// console.log(random([0, 16, 24, 32]));
// console.log(random([4, 6, 8, 10]));

// TASK 3.@SUPER2. Напишите функция которая преобразовывает/открывает скобки всех 
// вложенных внутри массивов
// Необходимо реализовать рекурсивный фызов функции.
// Функция должна открывать любое количество внутренних массивов

// example:
// [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
// [25,10,[10,[15]]] => [25,10,10,15]
//  */
let arr3 = [
  [1, 2],
  [3, [4]], 5, 10
];
let arr4 = [25, 10, [10, [15]]];

function openBraces(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((done, curr) => {
      return done.concat(openBraces(curr));
    }, []);
  } else {
    return arr;
  }
}

// console.log(openBraces(arr3));
// console.log(openBraces(arr4));
//___


////////@ TODO -- LVL Strong Junior
/*
 *
 * TASK 1
 * Напишите функцию которая принимает 3 аргумента:*
 *
 *  - объект к которому привязывается метод
 *  - Имя свойства с которым связывается метод
 *  - Объявление привязываемого метода( функция )
 *
 *
 *  Если количество аргументов у функции fn совпадает с переданными
 *  параметрами тогда сохраняет метод в замыкании
 *  и привязывает функцию к методу объекта
 *
 *  при вызове одного и того же метода с разным количеством аргументов, 
 *  должно давать различный результат
 *
 * */

// let junior = {};

// fn.length == arguments.length

// function addMethod(object, name, fn) {

//   object[name] = function(...args) {
//     if (fn.length == arguments.length) {
//       fn(args);

//     }
//   };
// }

// addMethod(junior, 'ok', function() {
//   console.log('zero arguments');
// });
// addMethod(junior, 'ok', function(one) {
//   console.log('one arguments');
// });
// addMethod(junior, 'ok', function(one, two) {
//   console.log('two arguments');
// });
// addMethod(junior, 'ok', function(one, two, three) {
//   console.log('three arguments');
// });

// junior.ok(); //'zero arguments'
// junior.ok(1); //'one arguments'
// junior.ok(1, 2); // 'two arguments'
// junior.ok(1, 2, 3); // 'three arguments'
