'use strict';

/*
 *
 * TASK 1
 *
 * Создайте функцию которая будет запоминать переданные
 * ей аргументы, и прибавлять их в строку
 * и отображать в консоле всю строку
 *
 * 
 * */

function makeBuffer() {
  let string = '';

  return function(newString) {

    return string += newString;

  }

};

let stringBuffer = makeBuffer();

// console.log(stringBuffer('Замыкания')); // Замыкания
// console.log(stringBuffer(' Использовать нужно')); // Замыкания Использовать нужно
// console.log(stringBuffer('Привет')); // Замыкания Использовать нужно Привет
// вызываем много раз

/*
 *
 * TASK 2
 * Напишите функцию которая принимает в качестве аргумента строку
 * из скобочек и посчитайте, * что все скобочки закрываются корректно
 *
 * */

function validBraces(str) {

  let arr = [];
  let open = { '{': '}', '[': ']', '(': ')' };
  let closed = { '}': true, ']': true, ')': true };

  for (let i = 0; i < str.length; i++) {
    let chr = str[i];
    if (open[chr]) {
      arr.push(chr);
    } else if (closed[chr]) {
      if (open[arr.pop()] !== chr) return false;
    }
  }

  return arr.length === 0;

};

// console.log(validBraces('(){}[]')); //=> returns true
// console.log(validBraces('(}')); //=> returns false
// console.log(validBraces('[(])')); // => returns false
// console.log(validBraces('([{}])')); //=> returns true

/*
 *
 * TASK 3
 * Напишите функцию которая будет принимать 1 аргумента - функцию
 *
 * Отрефакторите код таким образом, чтобы сообщение 'THE LAST LAST comment',
 * отобразилось в консоле последним
 *
 * */

function makeCallback(fn) {

  for (let i = 1, maxNumber = 10; i <= maxNumber; i++) {
    setTimeout(function() {
      console.log(i);

    }, i * 1000);
    if (i === maxNumber) {
      setTimeout(function() {
        fn();
      }, i * 1000);
    }
  }
}

makeCallback(function() {
  console.log('THE LAST LAST c“omment');
});

// @SUPER

/*
 *
 * Напишите функцию которая будет принимать одно число и выводить сумму 
 * всех натуральных чисел
 * sum(5) //5+4+3+2+1
 * 
 * Вычисления должны кешироваться, если в функцию попадает закешированное 
 * значение, в консоле должно отобразиться
 * Значение взято из кэша
 *
 * */


/**
[
  {val: 5, res: 15},
  {...},
  ....
  {...}
]
**/

let cacheStorage = [];

function inCache(num) {

  let inCache = false;

  cacheStorage.forEach(function(value, index) {
    if (value.val == num) {
      inCache = value.res;
    }
  });

  return inCache;

}

function sum(num) {

  // check is current value in cacheStorage
  var value = inCache(num);
  if (value) {
    console.log(value + ' значение взято из кэша');
    return value;
  }

  // if isn't then sum
  var result = 0;
  for (var i = 0; i <= num; i++) {
    result += i;
  }

  // push it to the cacheStorage
  cacheStorage.push({ val: num, res: result });
  console.log(result + ' значение кешировано');

  return result;

}

sum(5); // 15 Значение кешировано
sum(5); // 15 Значение взято из кэша
sum(6); // 21 Кешировано
sum(6); // 21 Значение взято из кэша
