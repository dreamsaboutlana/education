/*
 *
 * SUPER TASK 1
 * Выведите уникальные значения
 *
 * */

// function uniqueElements(arr) {

//   let uniqueArray = arr.filter(function(elem, pos) {
//     return arr.indexOf(elem) == pos;
//   })

//   return uniqueArray;

// }

function uniqueElements(arr) {
  var result = [];

  nextInput:
    for (var i = 0; i < arr.length; i++) {
      var str = arr[i]; // для каждого элемента
      for (var j = 0; j < result.length; j++) { // ищем, был ли он уже?
        if (result[j] == str) continue nextInput; // если да, то следующий
      }
      result.push(str);
    }

  return result;

}


let notUniqArray = [1, 1, 2, 2, 2, 5, 10, 25, 30, 5, 1, 0, 22, 3, 10, 3];
//
// console.log(uniqueElements(notUniqArray)); //1,2,5,10,25,30,0,22,3,
// console.log(uniqueElements([1, 1, 2, 3, 3])); // 1,2,3

// ___________

function uniques(arr) {
  var a = [];
  for (var i = 0, l = arr.length; i < l; i++)
    if (a.indexOf(arr[i]) === -1 && arr[i] !== '')
      a.push(arr[i]);
    // arr.forEach(function())
  return a;
}

// console.log(uniques(notUniqArray));
