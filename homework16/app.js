'use strict';

const app = {
  appName: 'Тест по програмированию',
  questions: [{
    name: 'Что делает оператор ===?',
    answers: ['Сравнивает по ссылке, а не по значению',
      'Сравнивает без приведения типа',
      'Нет такого оператора'
    ],
    rightAnswers: [1]
  }, {
    name: 'Что получится, если сложить true + false?',
    answers: ['truefalse', '0', 1],
    rightAnswers: [2]
  }, {
    name: 'Чему равно значение выражения 4 - "5" + 0xf - "1e1"?',
    answers: ['Цифре', 'Строке', 'NaN'],
    rightAnswers: [0]
  }],

  createLi() {
    return document.createElement('li');
  },

  createQuestions(question) {

    const li = this.createLi();
    const ul = this.new('ul');
    const h3 = this.new('h3');

    h3.textContent = question.name;

    question.answers.forEach(answer => {
      const htmlAnswer = this.createAnswer(answer);
      ul.appendChild(htmlAnswer);
    });

    li.appendChild(h3);
    li.appendChild(ul);

    return li;
  },
  createAnswer(answer) {

    const li = this.createLi();
    const label = this.new('label');
    const input = this.new('input');

    label.textContent = answer;
    input.setAttribute('type', 'checkbox');

    li.appendChild(input);
    li.appendChild(label);

    return li;
  },
  render() {

    const body = document.body;
    const main = this.new('main');
    const h1 = this.new('h1');
    const ol = this.new('ol');
    const button = this.new('button');

    h1.textContent = this.appName;
    button.textContent = 'Submit';
    button.onclick = () => {
      const ul = document.querySelectorAll('ul');

      ul.forEach((elem, index) => {
        let qw = this.questions[index];

        const getRigth = document.createElement('div');

        this.questions.forEach((el, i) => {

          let rightAnswer = el.rightAnswers;
          // console.log('rightAnswer', rightAnswer[0]);
          // console.log(el.answers);
          // console.log('elem', elem.children[i].children[0]);
          // console.log('elem', elem.children[i].children[1]);
          // console.log(elem.children[i].children[0].firstChildren);
          // console.log(el.answers[i]);
          console.log(el);
          if (elem.children[i].children[0].checked == true && elem.children[i].children[1] == `<label>${el.answers[i]}</label>`) {
            getRigth.textContent = 'верно!';
            elem.insertAdjacentElement('afterEnd', getRigth);
          } else {
            getRigth.textContent = 'не верно!';
            elem.insertAdjacentElement('afterEnd', getRigth);
          }



        });





      });


    };

    main.appendChild(h1);
    main.appendChild(ol);

    this.questions.forEach(question => {
      const htmlQuestion = this.createQuestions(question);
      ol.appendChild(htmlQuestion);
    });

    main.appendChild(button);
    body.appendChild(main);
  },

  new(tag) {
    return document.createElement(tag);
  }
}

app.render();
