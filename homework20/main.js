'use strict';

/* Алгоритмы

TASK 0
Проверьте 2 строки и определите изоморфные ли они.
Две строки являются изоморфными если все их символы 
s, могут быть заменены t.
Все символы одной строки могут быть заменены такими же символами другой строки, независимо от 
порядка символов.

Given two strings, determine if they are isomorphic.
Two strings are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters.
No two characters may map to the same character but a character may map to itself."

arguments ["egg", "add"] => expected true
arguments ["foo", "bar"] => expected false
arguments ["paper", "title"] => expected true
arguments ["ca", "ab"] => expected true
arguments ["aa", "bb"] => expected true
arguments ["aedor", "eiruw"] => expected true

*/
let isomorphicStr = (arr) =>{
	let str1 = arr[0];
	let str2 = arr[1];
}

/*
Добавить возможность из формы, ДОБАВЛЯТЬ Пользователя на сервер
*/

/*
TASK 1
Изучите API http://easycode-js.herokuapp.com/

Зарегистрируйте 10 пользователей с разными именами и email 
И ТЕЛЕФОНАМИ! адресами.

fullName - должно содержать имя и фамилию 'John Smith'
Используйте XMLHttpRequest => POST

*/

/*
TASK 2
phone-app. Первая страница.
Загружайте пользователей с сервера при загрузке странице.

*/

/*
// contentEditable
Сделайте, чтобы на странице add-user.html пользователь
добавлялся на сервер.

*/
// Для PhoneBook сделайте отдельный репозиторий

// Рекомендую - вам необходимо сделать 1 метод(или отдельный класс) который будет отправлять запросы 
// доступ к этому методу должен быть в каждом вашем классе
// url - должен быть константа, т.к url у вас изменяться не будет.