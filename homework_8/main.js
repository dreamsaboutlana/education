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
  console.log('THE LAST LAST comment');
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

let cache = {};

function sum(num) {

  if (num !== 1) {
    return num + sum(num - 1);
  } else {
    return 1;
  }

}

console.log(sum(5)); // 15 Значение кешировано
console.log(sum(5)); // 15 Значение взято из кэша
console.log(sum(6)); // 21 Кешировано
console.log(sum(6)); // 21 Значение взято из кэша
