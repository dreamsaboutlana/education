/*
1. Напишите функцию которая принимает в 
качестве аргумента массив
и элемент массива и добавляет элемент в конец массива
*/

let arr = [];

function addToArray(arrParam, newElem) {
 // без естественных способов добавления
  arr = arrParam;
  arr[arr.length] = newElem;
  return arr;
}
addToArray([1,2,3], 5);

/*
2. Напишите функцию которая получает 3 параметра 
и возвращает объект типа:    
    {
      argument1: param1,
      argument2: param2,
      argument3: param3,
    }    
*/

function simpleObjectGenerator(param1, param2, param3) {

	// 1 way
  // let obj = {};
  // obj.argument1 = param1;
  // obj.argument2 = param2;
  // obj.argument3 = param3; 
  // return obj;

// 2 way
  return  {
	  argument1: param1;
	  argument2: param2;
	  argument3: param3; 
  }
}

console.log(simpleObjectGenerator('protocol', { url: '22' }, 8000));

/* {
   argument1:'protocol',
   argument2:{url:'22'},
   argument3:8000
}*/

var userNames = [{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }];

console.log(simpleObjectGenerator(77, userNames, 'privet kak dela chto novogo'.toUpperCase()));
/* {
 argument1:'77',
 argument2:[{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }],
 argument3:PRIVET KAK DELA CHTO NOVOGO
 }*/


///////////////////////////////////////////////
/*
3.  Напишите функцию которая принимает 3 аргумента, 
     третий аргумент - это объект.
    
    Функция создает новый объект и добавляет ключ 
    это первый аргумент, а значение - второй аргумент
    Проверяет если есть свойство name в переданном объекте, 
    тогда добавляет данное свойство и возвращает новый объект

var myName = { name: 'Oleg' };

function addNameToUser(newKey, newValue, userName) {

}
*/

var myName = { name: 'Oleg' };

function addNameToUser(newKey, newValue, userName) {
  let userObj = {};
  userObj[newKey] = newValue;
 
  if (userObj.name === undefined ){
   userObj.name = userName.name;
  };
  return userObj;
}

console.log(addNameToUser('family', '%Lustenko%', myName));
/* {name:'Oleg', family:'%Lustenko%'} */

console.log(myName);
/* {name:'Oleg'} */

/////////////////////////////////

/*
-> @@ SUPER
  Напишите функцию, которая будет возвращать 'Fizz' 
   если передаваемый параметр кратен 3,
   'Buzz', если передаваемый параметр кратен 5, 
   'FizzBuzz' - если параметер кратен 3 и 5
   Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр
*/

function fizzBuzz(num) {

  if(num % 3 == 0 && num % 5 == 0 ){
    console.log('FizzBuzz');
  } else if(num % 3 ==0){
    console.log('Fizz');
  } else if( num % 5 == 0){
    console.log('Buzz');
  } else{
    // console.log(num);// нет необходимости в этом выводе
  }
}

fizzBuzz(1); // 1
fizzBuzz(2); // 2
fizzBuzz(3); // 'Fizz'
fizzBuzz(5); // 'Buzz'
// ...
fizzBuzz(15); // 'FizzBuzz'
fizzBuzz(21); // 'Fizz'

/* -> @@ SUPER 2
Напишите функцию, которая будет принимать 4 аргумента, 
последний всегда функция.
Добавьте первые 3 аргумента в массив  и вызовите переданную функцию с данным массивом

*/

function setFunction(arr) { 
  console.log(arr);
  console.log(arr[0] + arr[1] + arr[2]);
}

function setArg(arg1, arg2, arg3, func) {
	// goog way
	var arr = [arg1, arg2, arg3];

	// bad way
	// var arr = [];
	// arr[0] = arg1;
	// arr[1] = arg2;
	// arr[2] = arg3;

 return func(arr);
}
console.log( setArg(1,2,3, setFunction));