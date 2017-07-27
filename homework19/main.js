'use strict';
/* task 0

Даны строки разделенные различным образом,
верните строки разделенные / или _, в нижнем регистре

*/
const solution = str => {

  let newStr = [];

  str.split('').forEach((elem, index) => {
    let par = str[index + 1];
    if (elem === elem.toUpperCase()) {
      if (elem == '-') {
        newStr.push('_');
      } else if (elem == ':') {
        if (str[index - 1] !== ':') {
          newStr.push('/');
        }
      } else if (str[index + 1] === str[index + 1].toUpperCase()) {
        newStr.push(`${elem.toLowerCase()}`);
      } else if (index !== 0) {
        if (str[index - 1] !== ':') {
          newStr.push(`_${elem.toLowerCase()}`);
        } else {
          newStr.push(elem.toLowerCase());
        }
      } else {
        newStr.push(elem.toLowerCase());
      }
    } else if (elem === elem.toLowerCase() && index !== undefined) {
      newStr.push(`${elem}`);
      // } else {
      newStr.push(elem);
    }

  });
  newStr = newStr.join('')
  return newStr;
}
// console.log(solution("ActiveModel::Errors")); // => active_model/errors"
// console.log(solution("HelloHowAreYou")); // => "hello_how_are_you"
// console.log(solution("MyNAMEIsBOND-JamesBond")); // => my_name_is_bond_james_bond"
// console.log(solution("MAINCompany::BEST-MAINUser")); // => "main_company/best_main_user"


/* TASK 0.5
  ГОТОВО: Добавить кота в ваш КОД в Node.js !!
  КОТА ОСТАВИТЬ
  Добавить проверку на существование файла
  
*/
const http = require('http');
const fs = require('fs');

http
  .createServer((request, response) => {
      // логи
      const { url } = request;

      if (url !== undefined) {
        if (url.includes('favicon')) return;
        if (url === '/') {
          const indexHTML = fs.readFileSync(`./index.html`);
          response.end(indexHTML);
          return;
        }
        if (url.includes('router.js')) {
          const JSfile = fs.readFileSync(`.${url}`);
          response.end(JSfile);
        }
        if (url.includes('cat.jpg') {
            const imgFile = fs.readFileSync(`.${url}`);
            response.end(imgFile);
          }

        }

      })
    .listen(3000, 'localhost', err => {
      if (err) throw err;
      console.log('server running at localhost:3000');
    });

    /* TASK 1
    По приложению phone-book;
    1. Для каждой страницы у вас должен быть класс с одноименным названием
    в отдельном файле

    2. Каждый класс должен содержать методы render() - который рендерит всю страницу и методы
     header(), main()

    3. Удалить jquery.js и bootstrap.js с проекта

    -> Закончить keypad с прошлого занятия, добавить функционал для удаления номера

    Сортировка таблицы!

    Визуализировать страницы Edit contact, User, Add User;

    TASK 2
    1. keypad - сделать чтобы номер можно было набрать с клавиатуры (!)

    2. Формат номера должен быть таким (099)-17-38-170

    */

    /*

    TASK 3

    edit-contact, add-user при клике:

    - сделать данные редактируемыми (атрибут contentEditable)

    - изменять backgroundColor

    index.html - в поле search при вводе буквы, добавить поиск по имени если
    имя включает хотя бы одну эту букву.

    после ввода каждого символа, фильтровать отображаемых пользователей.

    При удалении всех символов отобразить снова весь список

    */