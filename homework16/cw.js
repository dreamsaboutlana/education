var pirate = {
  shkiper: {
    name: 'jack',
    email: 'Vorobei'
  }
};

const sayHello = object => {
  // const name = object.name;
  const { name } = object.shkiper;
  // console.log(name);
  console.log(name + ' ', 'says Hello');
};

const upperCase = str =>
  str[0].toUpperCase() + str.slice(1);
sayHello(pirate);

const app = {
  appName: 'Тест по программированию',
  questions: [
    {
      name: 'Вопрос 1',
      answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
      rightAnswers: [2]
    }, // приходят с сервера
    {
      name: 'Вопрос 2',
      answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
      rightAnswers: [1]
    }, // приходят с сервера
    {
      name: 'Вопрос 3',
      answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
      rightAnswers: [2]
    } // приходят с сервера
  ],

  createLi() {
    return this.new('li');
  },
  createQuestions(question) {
    const li = this.createLi();
    const h3 = this.new('h3');
    h3.textContent = question.name;
    const ul = this.new('ul');
    question.answers.forEach(answer => {
      const htmlAnswer = this.createAnswer(answer);
      ul.appendChild(htmlAnswer);
    });
    li.appendChild(h3);
    li.appendChild(ul);
    return li;
  },
  createAnswer(answer) {
    const liAnswer = this.createLi();
    const label = this.new('label');
    const input = this.new('input');

    input.setAttribute('type', 'checkbox');
    liAnswer.appendChild(input);
    liAnswer.appendChild(label);
    label.textContent = answer;
    return liAnswer;
  },
  render() {
    const body = document.body;
    const main = this.new('main');
    const h1 = this.new('h1');
    const ol = this.new('ol');
    const button = this.new('button');
    const button2 = this.new('button');

    button.onclick = function() {
      const ul = document.querySelectorAll('ul');
      ul.forEach(elem => {
        const getRigth = document.createElement('div');
        getRigth.textContent = 'верно!';
        elem.children[1].children[0].checked = true;
        elem.insertAdjacentElement('afterEnd', getRigth);
      });
      // Массивы + свойства объекта
    };
    button.textContent = 'Проверить';
    h1.textContent = this.appName;

    main.appendChild(h1);
    main.appendChild(ol);
    main.appendChild(button);

    this.questions.forEach(question => {
      const htmlQuestion = this.createQuestions(question);
      ol.appendChild(htmlQuestion);
    });
    body.appendChild(main);
  },
  new(tag) {
    return document.createElement(tag);
  }
};

app.render();
const button = document.createElement('button');
button.textContent = 'Generator';
document.body.appendChild(button);

// const main = document.getElementsByClassName('main')[0];
// const main = document.getElementsByClassName('.main');

const JavaScriptOneLove = ['Arrow', 'Замыкания', 'классы'];
const createList = arr => {
  // 0. создать Пустую строку -- генерировать наш список
  // 1. Добавить в пустую строку (тэг) <ul>
  // let emptyString = '<ol>';
  // 2. Запустить цикл по Любимым вещам в JS
  let list = arr.map(elem => `<li>${elem}</li>`).join('');
  // arr.forEach(elem => {
  //   // 3. Внутри цикла, добавить к изначальной строке <li> потом переменную и закрыть тэг </li>
  //   emptyString += `<li>${elem}</li>`;
  // });
  // // 4. В изначальную строку добавить тэг </ul>
  // emptyString += '</ol>';
  // 5. Вернуть всю строку
  return `<ol>${list}</ol>`;

  // return emptyString;
};

button.onclick = () => {
  console.log(main);
};
const main = document.createElement('div');
main.innerHTML += createList(JavaScriptOneLove);

const body = document.body;
body.insertAdjacentElement('afterEnd', main);
main.insertAdjacentHTML('beforebegin', '! ! ! ! ! !')
main.insertAdjacentHTML('afterend', '<h1>salary: 8000 $</h1>')

// body.appendChild(main);
// button.onclick();

/*

<ul>
  <li>Arrow</li>
  <li>Замыкания</li>
  <li>Классы</li>
</ul>

// Сделать список


*/
