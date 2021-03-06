'use strict';
/*
TASK 0
Проверьте что строка содержит все символы от "a" до "z"
  solution("wyyga") // false
  solution("qwertyuioplkjhgfdsazxcvbnm") // true
  solution("ejuxggfsts") // false
  solution("qpwoeirutyalskdjfhgmznxbcv") // true
  solution("qqqqqqqqpwoeirutyalskdjfhgmznxbcv") // true
  solution("0123456789abcdefghijklmnop") // false
*/

// 1) DRY

// DO not reapeat yourself;

// 2) Вы должны учесть все возможные варианты

const solution = str => {

  const abc = 'qazxswedcvfrtgbnhyujmkiolp';
  const abcSorted = sortString(abc);
  const newStrSorted = sortString(str);

  return abcSorted === newStrSorted;

};
const sortString = str => {
  return str
    .split('')
    .sort()
    .filter((elem, index, arr) => {
      return arr.indexOf(elem) === index;
    })
    .join('');
};

// console.log(solution("wyyga")); // false;
// console.log(solution("qwertyuioplkjhgfdsazxcvbnm")); // true
// console.log(solution("qqqqqqqqpwoeirutyalskdjfhgmznxbcv")); // true
// console.log(solution("ejuxggfsts")); // false
// console.log(solution("qpwoeirutyalskdjfhgmznxbcv")); // true
// console.log(solution("0123456789abcdefghijklmnop")); // false

/*
 2. Напишите функция которая преобразовывает открывает скобки всех 
 вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов и объектов

 example:

 [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
 [25,10,[10,[15]]] => [25,10,10,15]
 [1, [2, [ {a: "b"} ] ] ] => [1, 2, {a: "b"}]
 */

function openBraces(arr) {

  if (Array.isArray(arr)) {
    return arr.reduce((done, curr) => {
      return done.concat(openBraces(curr));
    }, []);
  } else {
    return arr;
  }
};

// console.log(openBraces([ [1, 2],[3, [4]], 5, 10]));
// console.log(openBraces([25, 10, [10, [15]]]));
// console.log(openBraces([1, [2, [{ a: "b" }]]]));

const flatten = arr =>
  arr.reduce((flattenArr, elem) => {
    return !Array.isArray(elem) ? flattenArr.concat(elem) : flattenArr.concat(flatten(elem));
  }, []);

// console.log(flatten([[1, 2],[3, [4]], 5, 1]));
// console.log(flatten([25, 10, [10, [15]]]));
// console.log(flatten([1, [2, [{ a: "b" }]]]));

/*
Виртуализировать таблицу, сделать рендер всей таблицы через JavaScript.

Второй макет.
https://github.com/aleksandra-maslennikova/telephone-book/blob/master/index.html
Выглядеть должно так же: https://aleksandra-maslennikova.github.io/telephone-book/index.html


*/
