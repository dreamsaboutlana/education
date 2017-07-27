'use strict';
/*
Алгоритмы !
TASK 0

Вам дано предложение, верните массив из слов, 
которые длинее чем средняя длина всех слов.
Слова разделены пробелами, если в предложении запятые,они должны быть пропущены


solution(["This is a sample string"]) expected ["This" "sample" "string"]
solution(["Some another sample"]) expected ["another" "sample"]
solution(["Do, do, do, do... do it!"]) expected []

*/

const solution = arr => {

  let str = clearArr(arr);
  let arrLength = calcLength(arr);
  let newArr = [];

  str.split(' ').forEach(elem => {
    if (elem.length >= arrLength) {
      newArr.push(elem);
    }
  });

  return newArr;
}

const clearArr = arr => {

  let str = arr[0];
  let newArr = [];

  str.split('').forEach(elem => {
    if (elem !== ',' && elem !== '!' && elem !== '"' && elem !== '.') {
      newArr.push(elem);
    }
  });

  return newArr.join('');
}

const calcLength = arr => {

  let str = arr[0];
  let strSum = 0;

  str.split(' ').forEach(elem => {
    strSum += elem.length;
  });
  return Math.ceil(strSum / Math.ceil(str.split(' ').length));
}
// console.log(solution(["This is a sample string"])); //expected ["This" "sample" "string"]
// console.log(solution(["Some another sample"])); //expected ["another" "sample"]
// console.log(solution(["Do, do, do, do... do it!"])); //expected []

/*

Подготовка к занятию в пятницу.

Windows:
  Установите все node.js скачать отсюда -> https://nodejs.org/en/
  Скачайте последнюю 8.1.x версию
  Для проверки установки в консоле введите "node -v" (без кавычек) отобразит версию node.js

Linux:
 sudo apt install npm // установить менеджер пакетов npm
 npm i -g n // установить пакет для установки node.js
 sudo n latest // установить последнюю версию node.js

*/


/* TASK 1

Сделайте таблицу 5x5
При клике на элемент, изменяйте цвет у элемента на красный.
Но цвет у элемента должен изменяться пропорционально в другой половине квадрата

Пример 3х3:

[]|[]|[]
[]|[]|[]
[]|[]|[]

кликаем сюда -> []|[]|[]
                []|[]|[]
                []|[]|[x] <- загорается тут

                []|[]|[]
кликаем сюда -> []|[]|[x] <- загорается тут
                []|[]|[]



*/

function sensitiveCell(mode = 1) {
  let blocks = [];
  for (let i = 0; i < 5; i++) {
    blocks[i] = [];
    for (let j = 0; j < 5; j++) {
      blocks[i][j] = document.getElementById((i + 1) + '' + (j + 1));
    }
  }

  switch (mode) {
    case 1:
      {
        let max = 4;
        let min = 0;
        for (let i = 0; i < 5; i++) {
          for (let j = 0; j < 5; j++) {
            blocks[i][j].addEventListener('click', function() {
              blocks[i][j].classList.toggle('red');

              if (i != j) {
                blocks[j][i].classList.toggle('red');
              }

            });
          }
        }
      };
      break;

    case 2:
      {
        let maxRow = 5;
        let maxCell = 5;
        for (let i = 0; i < maxRow; i++) {
          for (let j = 0; j < maxCell; j++) {
            blocks[i][j].addEventListener('click', function() {
              blocks[i][j].classList.toggle('green');
              if (i != j) {
                blocks[i][Math.abs(maxCell - j - 1)].classList.toggle('green');
              }
            });
          }
        }
      };
      break;

    case 3:
      {
        let max = 4;
        let min = 0;
        for (let i = 4; i >= 0; i--) {
          for (let j = 4; j >= 0; j--) {
            blocks[i][j].addEventListener('click', function() {

              if (i !== j) {
                blocks[i][j].classList.toggle('red');
                blocks[j][i].classList.toggle('red');
              }



              if (i === j) {
                blocks[min + i][min + i].classList.toggle('red');
                blocks[max - i][max - i].classList.toggle('red');
              }
              if (i === j && (min + i) === (max - i)) {
                blocks[j][i].classList.toggle('red');
              }



            });
          }
        }
      };
      break;
  }
}

sensitiveCell(3);

// const tbody = document.querySelector('table');
// tbody.addEventListener('click', (e) => {
//   let blocks = [];
//   for (let i = 0; i < 5; i++) {
//     blocks[i] = [];
//     for (let j = 0; j < 5; j++) {
//       blocks[i][j] = document.getElementById((i + 1) + '' + (j + 1));
//     }
//   }
// let max = 4;
//   let min = 0;
//   for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//       if (e.target.id === 'TD') {
//         // blocks[i][j].addEventListener('click', function() {
//           e.classList.toggle('red');

//           if (i != j) {
//             blocks[j][i].classList.toggle('red');
//           }

//         });
//       // }
//     }
//     e.target.style.backgroundColor = 'red';
//   }
// });


// @SUPER-FrontEnd
/*

У вас есть 3 блока смотри events.html
при mousedown и движении мышки нужно сделать
ресайз одного блока.

Подсказка - событие необходимо повесить на доп. элемент .resize

*/