'use strict';

/*
 * Задача 0
 *
 * Что вернет выражение z(x) ?
 * Напишите ответ своими словами как вы понимаете
 * В консоле не смотрите, сначала напишите, после проверьте себя
 *
 * */

/* *ОТВЕТ
 * Сначала мы инициализируем переменную "y" ей присваиваем значение "5". 
 * Создаем функциональное выражение "х" которое возвращает после своего выполнения 'y'.
 * Создаем функциональное выражение 'z'  с аргументом 't'. В этой фукции создается своя переменная "у"  
 * и вызывается аргумент();
 * Когда мы вызовим функцию z(x) вернется undefined, 
 * потому что функция 'z' ничего не возвращает,
 * если добавить return то вернет "5".
 * стрелочная функция с блочным телом не возвращает ничего для этого нужен return
 *
 * */

let y = 5;
let x = () => y;

let z = t => {
  let y = 5;
  t();
};

z(x);


/*
 *
 * TASK 1
 * Создайте функцию которая будет превращать передаваемую строку в html тэг
 *
 *
 * */

let $ = (str) => {
  return `<${str}> </${str}> `;
};

let createBODY = $('body');
let createDIV = $('div');

// console.log(createBODY); // <body></body>
// console.log(createDIV); // <div></div>

/*
 *
 * TASK 2
 *
 * Создайте объект к которому можно будет применить любое число вызовов
  // obj.method().method().method()
  ---------------
 *  Передаваемое значение должно возвращаться в виде html тэгов (TASK 1)
 *  Передаваемые аргументы должны быть только в виде строки
 * */

let ezjQuery = {
  sum: '',
  startArr: [],
  lastArr: [],

  add(str) {
    let newStr = (`<${str}> </${str}> `);

    this.sum += newStr;
    console.log(this.sum);
    return this;
  },
  // add: function(str) {
  //   let newStr = (`<${str}> </${str}> `);
  //   this.sum += newStr;
  //   console.log(this.sum);
  //   return this;
  // },

  newAdd(str, info) {

    if (info === undefined) {
      this.startArr.push(`<${str}>`);
    } else {
      this.startArr.push(`<${str}> ${info} `);
    }
    this.lastArr.unshift(`</${str}> `);
    this.returnStr = this.startArr.concat(this.lastArr).join('');

    return this;
  },
  //   newAdd: function(str, info) {
  //   if (info === undefined) {
  //     this.startArr.push(`<${str}>`);
  //     // console.log(this.startArr);
  //   } else {
  //     this.startArr.push(`<${str}> ${info} `);
  //   }
  //   this.lastArr.unshift(`</${str}> `);
  //   this.returnStr = this.startArr.concat(this.lastArr).join('');
  //   return this;
  // },

  render() {
    return this.returnStr;
  }
  // render: function() {
  //   return this.returnStr;
  // }



};

// ezjQuery
//   .add('body') //<body></body>
//   .add('div') //<body></body><div></div>
//   .add('h1'); //<body></body><div></div><h1></h1>

/*
 *
 * TASK 3
 * Доработйте метод add чтобы на каждом вызове следующий тэг помещался внутри
 * предыдущего !
 --- 
 * И добавьте объекту ezjQuery метод render, который будет возвращать 
 * сгенерированную строку
 -----
 * Методу add - второй параметр, который будет размещать информацию внутри тэга
 *
 *
 */

// example
// var helloList = ezjQuery
//   .newAdd('body') // <body></body>
//   .newAdd('div') // <body><div></div></body>
//   .newAdd('ul') // <body><div><ul></ul></div></body>
//   .newAdd('li', 'Hello') //<body><div><ul><li>Hello</li></ul></div></body>
//   .newAdd('a', 'World').newAdd('span', '!!!')
//   .render();
// console.log(helloList); // <body><div><ul><li>Hello</li></ul></div></body>
// //  Обратите внимание, что после вызова render создание строки началось сначала

// var bodyDiv = ezjQuery
//   .newAdd('body') //<body></body>
//   .newAdd('div') //<body><div></div></body>
//   .render();
// console.log(bodyDiv); //<body><div></div></body>

// Для выполнивших все задания
// сделайте document.write(helloList) увидите результат :)

// @SUPER
/*
 * Переименуйте объект ezjQuery в $.
 * Создание перевого метода должено быть без метода
 *
 * $('body').add('li', 'hi').render() // <body><li>hi</li></body>
 *
 * */

// let $$ =  {
//     sum: '',
//     startArr: [],
//     lastArr: [],

//     add(str, info) {

//       if (info === undefined) {
//         this.startArr.push(`<${str}>`);
//       } else {
//         this.startArr.push(`<${str}> ${info} `);
//       }

//       this.lastArr.unshift(`</${str}> `);
//       this.returnStr = this.startArr.concat(this.lastArr).join('');
//       return this;
//     },
//     render() {
//       return this.returnStr;
//     }
//   }

function $$(mainTag, mainContent = '') {

  return {
    tags: [{ tagName: mainTag, content: mainContent }],
    add(tagName, content = '') {
      this.tags.push({ tagName, content });
      return this;
    },
    render() {
      const beginArr = [];
      const endArr = [];
      this.tags.forEach(tag => {
        beginArr.push(`<${tag.tagName}>${tag.content}`);
        endArr.unshift(`</${tag.tagName}>`);
      })
        this.tags = [];
        return beginArr.concat(endArr).join('');

  }
    };
}

let $str = $$('body').add('li', 'hi').add('p').render(); //<body><li>hi</li></body>
console.log($str);
