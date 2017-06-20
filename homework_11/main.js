'use strict';
/*
 *
 * Сделайте 4 объекта - не усложняйте, просто наследование
 * через __proto__
 - Пользователь
 - Верифицированный пользователь
 - Гость
 - База данных
 - База хранит информацию о пользователях
** - Пользователи знают мыло админа
**- админ знает пароль от базы данных
 - Гости могут зарегистрироваться в базе данных
 *
 *
 * */

var User = {
  name: 'Sveta',
  admine: false
};
var Admin = {
  name: 'Admin',
  admine: true,
  email: 'admin@admin.com'
};

var Guest = {
  name: 'Guest',
  admine: false
};

var DataBase = {
  pasword: 12345,
  restarBase(name, pasword) {
    if (name.admine === true) {
      console.log('hello Admin');
    }
  }
};

User.__proto__ = Admin;
Admin.__proto__ = DataBase;
Guest.__proto__ = User;
/*_________________________
* 1
	Каким будет результат? Почему?
	var arr = ["a", "b"];
	arr.push(function() {
	  alert( this );
	})
	arr[2](); // ?

// ОТВЕТ
//arr[2]() - Это похоже на обращение к методу обекта. Вернет массив и третим элемениом будет функция 
//function() {alert( this );}
*/

//_________________________
//2
//Каков будет результат этого кода?
// var obj = { go: function() { alert(this) }}
// (obj.go)();
//  Из-за того что нет точки с запятой будет ошибкаб но если ее поставить то все ок
//Вначеле выводится значение метода obj.go а потом этот метод вызывается и выводит Obj Obj

//_________________
//3
/*
"use strict"
var obj, method;
obj = {
  go: function() { alert(this); }
};
obj.go();            // (1) object
(obj.go)();          // (2) object
(method = obj.go)();      // (3) undefined
(obj.go || obj.stop)();
1 & 2 способы просто вызывают функцию в контексте вызова
3 сложный вариант присваивания с вызовом в такие вызовы не передается this
4 
*/
//______________
/*
3
Что выведет alert в этом коде? Почему?
var user = {
  firstName: "Василий",
  export: this
};
alert( user.export.firstName );

Ответ undefined
В обьекте нет методов которые могли бы влиять на this
Поскольку this находится вне функции то  this указывает на  window.
получается сто user.export укразывает на window, далее получается ищется свойство  window.firstName в windows, 
а оно не определено
*/
//_______________
/*
4
Возврат this
важность: 5
Что выведет alert в этом коде? Почему?
var name = "";
var user = {
  name: "Василий",
  export: function() {
    return this;
  }
};
alert( user.export().name );


ОТВЕТ
выводится свойство name = Василий обьекта user. 
функция export() return this возвращает  обьект user  

*/

/*
Что выведет alert в этом коде? Почему?
var name = "";
var user = {
  name: "Василий",
  export: function() {
    return {
      value: this
    };
  }
};
alert( user.export().value.name );

ОТВЕТ вернет "Василий"
когда выполняется user.export()  this = user.
когда создается  { value: this }, то в value копируется ссылка  на user.
*/

/*
Калькулятор

Создайте объект calculator с тремя методами:

read() запрашивает prompt два значения и сохраняет их как свойства объекта
sum() возвращает сумму этих двух значений
mul() возвращает произведение этих двух значений
*/
var calculator = {
  read() {
    this.x = +prompt('x?', 0);
    this.y = +prompt('y?', 0);
  },
  sum() {
    return this.x + this.y;
  },
  mul() {
    return this.x * this.y;
  }
}

calculator.read();
calculator.sum();
calculator.mul();
/*
//ЛЕСНИЦА
*/
var ladder = {
  step: 0,
  up: function() {
    this.step++;
    return this;
  },
  down: function() {
    this.step--;
    return this;
  },
  showStep: function() {
    console.log(this.step);
    return this;
  }
};
// ladder.up().up().up().up().down().up().down().showStep();

/*Две функции один объект 
Возможны ли такие функции A и B в примере ниже, что соответствующие объекты a,b равны (см. код ниже)?
*/
var arr = [];

function A() {
  return arr;
}

function B() {
  return arr;
}
let a = new A;
let b = new B;
console.log(a == b);

/*
Конструктор Калькулятор с тремя методами
*/
function Calculator() {
  // this.read = function() {
  //     this.x = +prompt('x?', 0);
  //     this.y = +prompt('y?', 0);
  //   },
  //   this.sum = function() {
  //     return this.x + this.y;
  //   },
  //   this.mul = function() {
  //     return this.x * this.y;
  //   }
  return {
    read() {
      x = +prompt('x?', 0);
      y = +prompt('y?', 0);
    },
    sum() {
      return x + y;
    },
    mul() {
      return x * y;
    }
  }
}



var calculator = new Calculator();
calculator.read();

alert("Сумма=" + calculator.sum());
alert("Произведение=" + calculator.mul());

/*
Создать Accumulator при помощи конструктора

Напишите функцию-конструктор Accumulator(startingValue).
 Объекты, которые она создает, должны хранить текущую сумму и прибавлять к ней то, что вводит посетитель.

Более формально, объект должен:

Хранить текущее значение в своём свойстве value. Начальное значение свойства value 
ставится конструктором равным startingValue.
Метод read() вызывает prompt, принимает число и прибавляет его к свойству value.
Таким образом, свойство value является текущей суммой всего, 
что ввел посетитель при вызовах метода read(), с учетом начального значения startingValue.

Ниже вы можете посмотреть работу кода:
*/


class Accumulator {
  constructor(startingValue) {
    this.startValue = startingValue;
  }
  read() {
    this.startValue += +prompt('How much add', 0);
  }
}

var accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.startValue);

/*
Создайте калькулятор
Напишите конструктор Calculator, который создаёт расширяемые объекты-калькуляторы.

Эта задача состоит из двух частей, которые можно решать одна за другой.

Первый шаг задачи: вызов calculate(str) принимает строку, например «1 + 2», с жёстко заданным форматом «ЧИСЛО операция ЧИСЛО» (по одному пробелу вокруг операции), и возвращает результат. Понимает плюс + и минус -.

Пример использования:

Поддержка скобок и сложных математических выражений в этой задаче не требуется.
Числа и операции могут состоять из нескольких символов. Между ними ровно один пробел.
Предусмотрите обработку ошибок. Какая она должна быть – решите сами.
Открыть песочницу с тестами для задачи.
*/

function Calculator(str) {

  var methods = {
    "-": function(x, y) {
      return x - y;
    },
    "+": function(x, y) {
      return x + y;
    }
  };
  this.calculate = function(str) {

    let newStr = str.split(' ');
    let x = +newStr[0];
    let meth = newStr[1];
    let y = +newStr[2];

    if (!methods[meth] || isNaN(x) || isNaN(y)) {
      return NaN;
    }
    return methods[meth](x, y);
  }

  this.addMethod = function(name, fn) {
    methods[name] = fn;

  }
}

var calc = new Calculator;

alert(calc.calculate("3 + 7"));

var powerCalc = new Calculator;
powerCalc.addMethod("*", function(x, y) {
  return x * y;
});
powerCalc.addMethod("/", function(x, y) {
  return x / y;
});
powerCalc.addMethod("**", function(x, y) {
  return Math.pow(x, y);
});

var result = powerCalc.calculate("2 ** 3");
console.log(result);


/*
Фильтрация через функцию
важность: 5
Создайте функцию filter(arr, func), которая получает массив arr и возвращает новый,
 в который входят только те элементы arr, для которых func возвращает true.
Создайте набор «готовых фильтров»: 
	inBetween(a,b) – «между a,b»,
		 inArray([...]) – "в массиве [...]".
Использование должно быть таким:
filter(arr, inBetween(3,6)) – выберет только числа от 3 до 6,
filter(arr, inArray([1,2,3])) – выберет только элементы, совпадающие с одним из значений массива.
Пример, как это должно работать:
*/

function filter(arr, func) {
  var result = [];
  arr.forEach(elem => {
    var val = elem;
    if (func(val)) {
      result.push(val);
    }
  });

  return result;
}

function inBetween(x, y) {
  return function(z) {
    return z >= x && z <= y;
  };
}

function inArray(arr) {
  return function(x) {
    return arr.indexOf(x) != -1;
  };
}

var arr = [1, 2, 3, 4, 5, 6, 7];

alert(filter(arr, function(a) {
  return a % 2 == 0
})); // 2,4,6

alert(filter(arr, inBetween(3, 6))); // 3,4,5,6

alert(filter(arr, inArray([1, 2, 10]))); // 1,2
