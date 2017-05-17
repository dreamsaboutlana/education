'use strict';
/*
 1. Составить предложение из нижестоящих переменных:
 "Сколько нужно программистов чтобы сделать проект ? 1, 25, команда"
 */

let numbers = [25, 1];
let project = 'проект';
let team = `команда`;
let howMuch = 'Сколько';
let sentence = 'нужно программистов чтобы сделать проект ?';
let task1 = `${howMuch} ${sentence} ${numbers[1]}, ${numbers[0]}, ${team}`; 
let task2 = `${howMuch} ${sentence} ${numbers}, ${team}`;
let newNumbers = numbers.reverse().join(', ');
let task3 = `${howMuch} ${sentence} ${newNumbers}, ${team}`;

console.log(task1);//Сколько нужно программистов чтобы сделать проект ? 1, 25, команда
console.log(task2);//Сколько нужно программистов чтобы сделать проект ? 25,1, команда
console.log(task3);//Сколько нужно программистов чтобы сделать проект ? 1, 25, команда

/*
 2. Составьте предложение из представленного массива 
 и выведите предложение в консоль;
 "Так, когда Будда достиг Просветления, он обнаружил, что больше не ощущает себя мишенью. 
  Он не был больше ни телом, к которому рано или поздно ..."
 */

let array = [
  'Он',
  'был больше ни телом, к которому рано или поздно',
  'он обнаружил',
  'не',
  'Так, когда Будда достиг Просветления',
  '...',
  'что больше',
  'ощущает себя мишенью',
  'не'
];

let homeSentence = array[4] + ', '+ array[2] + ', ' + array[6] + ' ' +
                   array[3] + array[7] + '. '+ array[0] + ' ' +
                   array[8] + array[1] + array[5];
console.log(homeSentence);

/*
 3. Добавьте свойста 4 новых свойства в объект используя 
    квадратные скобки и точку.
 */

let myObj = {};
myObj.age = 25;
myObj.name = 'Sveta';
myObj['surname'] = 'Golovko';
myObj['some option'] = 'some thing intresting';

console.log(myObj);

/*
 4. Используя метод .slice, добавьте недостающие символы в строку
 */

let sliceString = 'Ytube'; //
sliceString = sliceString.slice(0, 1) +  "ou" + sliceString.slice(1,2).toUpperCase() + sliceString.slice(2);
console.log(sliceString); // YouTube

/*
 5. Преобразуйте строку x, 
    в максимально удобно читаемый для программиста вид
 */

let frameworks = [4.7, 'Angular', '4Angular', 'React/Redux'];
let x = `google released new version ${frameworks[1]} ${Math.floor(frameworks[0])}. But real speed is ${frameworks[frameworks.length - 1]}`;
//google released new version Angular 4. But real speed is React/Redux
console.log(x);
