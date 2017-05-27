'use strict';
/*
 2. Верните сумму двух найменьших чисел в массиве

 [10,20,30,1,31,11,10] => 11
 [-1,0,25] => -1
 [-4,-10,25,10] => -14
 [0,200,10,25,15] => 10
 
 */
let arr = [10, 20, 1, 31, 11, 10];
// 1
function sumOfMinNumber(arr) {
  let sortArr = arr.sort();
  return sortArr[0] + sortArr[1];
}
console.log(sumOfMinNumber(arr));

// 2
function minimalNumber(arr) {
  let min = arr[0];
  let minIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }
  }
  arr.splice(minIndex, 1);
  return min;
}

function summerizer(arr) {
  return minimalNumber(arr) + minimalNumber(arr);
}
console.log(summerizer(arr));
