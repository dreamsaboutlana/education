'use strict';

/*
 *
 * 
 * TASK ! ! ! 
 * Сделайте пожалуйста с теми навыками которые у вас есть ТЕЛЕФОННЫЙ СПРАВОЧНИК
 *
 * Task 0
 *
 * Создайте функцию конструктор Http, которая будет иметь 2 метода
 *
 * createServer() - принимает один аргумент функцию с двумя параметрами ctx и next
 * ctx: Object {
 *   req: Object
 *     PORT: number
 *     url: string
 *   res: Object
 *     status: number,
 *     message: string,
 *     header: Object {
 *       content-type:application/json
 *       }
 *   }
 * next: Function

 * listen(PORT, host) - в консоле должна отобразится надпись
 * "Server running on https://host:port"
 * и вызваться переданная в createServer функция
 *
 *
 * методы нужно вызывать через chain
 * после вызова метода listen() - должна вызываться переданная в createServer
 * первая функция и возвращать объект и функцию
 *
 * */


function next() {
  console.log('hohoho');
}

function Http() {
  this.ctx = {
    req: {
      PORT: 8080,
      url: 'sveta / confeta'
    },
    res: {
      status: 200,
      message: `You're in`,
      header: {
        'content-type': 'application/json'
      }
    }
  }
}

Http.prototype.createServer = function(fn) {
  this.fn = fn;
  return this;

};
Http.prototype.listen = function(PORT, host) {
  console.log(`Server running on https://${host}:${PORT}`);
  this.createServer(this.fn);
  this.fn.apply(this.fn, [this.ctx, next]);

  return Http;
};
var Nctx = {
  req: {
    PORT: 8080,
    url: 'sveta / confeta'
  },
  res: {
    status: 200,
    message: `You're in`,
    header: {
      'content-type': 'application/json'
    }
  }
};

class OtherHttp {
  createServer(fn) {
    this.fn = fn;
    return this;
  }
  listen(PORT, host) {
    console.log(`Server running on https://${host}:${PORT}`);
    this.createServer(this.fn);
    this.fn.apply(this.fn, [Nctx, next]);

    return Http;
  }
}

const server = new Http().createServer(function(ctx, next) {
  console.log(ctx);
  console.log(next);
}).listen(3000, 'localhost');
const Nserver = new OtherHttp().createServer(function(Nctx, next) {
  console.log(Nctx);
  console.log(next);
}).listen(3000, 'localhost');

// TASK 1
// Создать класс Human, у которого будут свойства обычного человека:
// имя, возраст, пол, рост, вес.
// Используя прототипное наследование создать дочерние классы Worker
// (дописать в них поля места работы, зарплатой, метод "работать")
// и Student (дописать поля места учебы, стипендией, метод "смотреть сериалы")
//
// Создать несколько экземпляров классов Worker и Student, вывести их в консоль.
// Убедиться что они имеют поля родительского класса Human
class OtherHuman {
  constructor(name, age, gender, height, weight) {
    this._name = name;
    this._age = age;
    this._gender = gender;
    this._height = height;
    this._weight = weight;
  }
}

class OtherWorker extends OtherHuman {
  constructor(name, age, gender, height, weight, jobPlace, payment) {
    super(name, age, gender, height, weight);
    this._jobPlace = jobPlace;
    this._payment = payment;
  }
  working() {
    console.log('I should working very often');
  }
}
class OtherStudent extends OtherHuman {
  constructor(name, age, gender, height, weight, studyPlace, scholarship) {
    super(name, age, gender, height, weight);
    this._studyPlace = studyPlace;
    this._scholarship = scholarship;
  }
  watchingSerials() {
    console.log('I love watching Serials');
  }
}

let a = new OtherWorker('Sveta', 25, 'female', 173, 60, 'Google Int.', 8000);
let b = new OtherStudent('Sveta', 25, 'female', 173, 60, 'Google Int.', 8000);


function Human(name, age, gender, height, weight) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.height = height;
  this.weight = weight;
}

Worker.prototype = Object.create(Human.prototype);

function Worker(name, age, gender, height, weight, jobPlace, payment) {
  Human.call(this, name, age, gender, height, weight);
  this.jobPlace = jobPlace;
  this.payment = payment;
}
Worker.prototype.working = function() {
  console.log('I should working very often');
};

Student.prototype = Object.create(Human.prototype);
// Student.prototype = new Human();

function Student(name, age, gender, height, weight, studyPlace, scholarship) {
  Human.call(this, name, age, gender, height, weight);
  this.studyPlace = studyPlace;
  this.scholarship = scholarship;
}
Student.prototype.watchingSerials = function() {
  console.log('I love watching Serials');
}

var SvetaWorker = new Worker('Sveta', 25, 'female', 173, 60, 'Google Int.', 8000);
var JoStudent = new Student('Jo', 19, 'male', 180, 90, 'KhPI', 150);


// @SUPER

//
// TASK 0
// Создайте функцию обертку над другой функцией
//Каждый раз при вызове внутренней функции в консоле будут отображаться аргументы функции
//которую мы обернули

function wrap(...args) {
  return (function inner() {
    console.log(args);
  })();
}
