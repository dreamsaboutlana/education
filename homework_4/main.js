/*
 1. Напишите функцию которая принимает 2 числа 
 и возвращает массив содержащий числа между первым числом и вторым числом;
 */

function numbersBetween(a, b) {
	let arr = [];
	if( typeof(a) === "string" || typeof(b) === "string") {
		console.log("A or B is not a number!");
	}
	for ( let i = a + 1; i < b; i++) {
		let newElem = i;
		arr.push(newElem);
	}
	return arr;
}

console.log(numbersBetween(1, 5)); // 2,3,4
console.log(numbersBetween(3, 6)); // 4,5
console.log(numbersBetween(12, 15)); // 13,14
console.log(numbersBetween(10, 15)); // 11, 12, 13, 14

/*
 2. Перепешите задачу FizzBuzz, но с использованием цикла. 
 Расчет чисел должен идти до 100 
 */
function fizzBuzz(num) {
	for(let i = 0; i < num; i++){

	  if(i % 3 == 0 && i % 5 == 0 ){
	    console.log(`FizzBuzz. Число ${i} делится на 3 и на 5`);
	    // console.log('FizzBuzz. Число ' + i + ' делится на 3 и на 5');

	  } else if(i % 3 ==0){
	    console.log(`Fizz. Число ${i} делится на 3`);
	    // console.log('Fizz. Число ' + i + ' делится на 3');

	  } else if( i % 5 == 0){
	    console.log(`Buzz. Число ${i} делится на 5`);
	    // console.log('Buzz. Число ' + i + ' делится на 5');

	  } else{
	    // console.log(`Число ${i} не подходит под условие`);
	  }
	}
}

fizzBuzz(100);


/*
 3. Напишите функцию которая принимает 1 аргумент - массив
 И возвращает новый массив содержащий типы значений переменных
 */
let arr = [1, null, undefined, 'str', {}, [], function() {}];

function returnArrType(arr) {
	var newArr = [];

	for( let i = 0; i < arr.length; i++ ){
		let newElem = typeof(arr[i]);
		newArr.push(newElem	);
	}

	return newArr;
}

returnArrType(arr); 
//["number", "object", "undefined", "string", "object", "object", "function"]

/*
 @@SUPER@@. Вам дан массив array, содержащий внутри объекты. 
 Напишите функцию которая внутри цикла проходится 
 по каждому элементу массива
 И проверяет какой тип данных содержит свойство age, 
 если тип данных NaN, 
 тогда добавляет данному объекту свойство unknownAge: true

 На основании нового массива, создайте новую функцию, которая вернет новый массив 
 содержащий все объекты содержащие свойство unknownAge:true
 */

let array = Array.from({ length: 35 }).map(
  (value, index) => (index % 2 ? { age: index + 2 } : { age: NaN })
);

console.log(array); // [ {age:NaN}, {age:3}, {age:NaN}, {age:5}, {age:NaN}, {age:7} ....]
console.log(array.length); // 35

function solution(arr) {
	for( let i = 0; i < arr.length; i++){
		let value = arr[i];
		 if (value.age !== undefined && isNaN(value.age)){
			value.age = {unknownAge: true};
		 }
	}
	return arr;
}

solution(array);

let arr = ['privet', 12, {}, [1, 2]];
let arr2 = ['privet', 12, {}, [1, 2]];

function returnArr(arr) {
	let newArr =[];
	for( let i = 0; i < arr.length; i++) {
		if (typeof(arr[i].age) === 'object') {
			let newElem = arr[i];
			newArr.push(newElem);
		} 
	}
	return newArr;
}
returnArr(array);

returnArr(arr);
returnArr(arr2);