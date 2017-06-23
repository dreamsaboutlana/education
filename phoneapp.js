'use strict';

function myPhoneApp() {
  this.DataBase = [];
}

//phone format and validation
myPhoneApp.prototype.validateNumber = function(number) {
  number = '0' + number;
  if (!isNaN(number)) {
    return `(${number.slice(0, 3)}) ${number.slice(3, 5)}-${number.slice(5, 7)}-${number.slice(7, 10)}`;
  } else {
    console.log(`Put real number`);
  }
};

//add user with phone validation
myPhoneApp.prototype.addUser = function(name, surName, age, tag, number) {
  return this.DataBase.push({
    name: name,
    surName: surName,
    age: age,
    tag: tag,
    number: this.validateNumber(number)
  });
};

//фильтр по указаному свойству
myPhoneApp.prototype.sorter = function(param) {
  return this.DataBase.sort((a, b) => {
    return a[param] > b[param];
  })
};

//delete User from Data
myPhoneApp.prototype.deleteUser = function(keyWord) {
  let index, param;
  this.DataBase.filter((obj, i) => {
    if (obj.name === keyWord || obj.surName === keyWord) {
      index = i;
      param = 1;
      return index;
    } else {
      index = 0;
      param = 0;
    }
  });
  return this.DataBase.splice(index, param);
};

//search
myPhoneApp.prototype.searcher = function(param) {
  this.DataBase.sort(elem => {
    if (elem.name.includes(param)) {
      console.log(elem);
      return elem;
    }
  });
};

//filter for different options
myPhoneApp.prototype.filter = function(options) {
  return this.DataBase.sort(elem => {
    for (let keys in elem) {
      if (elem[keys].includes(options)) {
        console.log(elem);
        return elem;
      };
    }
  });
};

//changing User Infofrmation
myPhoneApp.prototype.editUser = function(arr) {
  this.DataBase.filter((obj, i) => {
    if (obj.name === arr[0].name || obj.surName === arr[0].surName) {
      // console.log(obj);
      // console.log(arr[1]);
      for (let key in arr[1]) {
        for (let newKeys in obj) {
          if (key === newKeys) {
            obj[newKeys] = arr[1][key];
          }
        }
      }
      return obj;
    } else {
      return 'You couldn\'t change information about this user';
    }
  });
};

let Phone = new myPhoneApp();
Phone.addUser('Sveta', 'Chekalina', 25, 'css', 0957784760);
Phone.addUser('Yaroslav', 'Chekalin', 30, 'php', 0667784760);
Phone.addUser('Guest', 'Undefined', 20, 'css', 999999999);
// Phone.addUser('Guest', 'Undefined', 20, 'html', 999999999);
// Phone.addUser('Guest', 'Undefined', 20, 'css', 999999999);
// Phone.addUser('Guest2', 'LastName2', 20, 'css', 999999999);
// Phone.addUser('Guest2', 'LastName2', 20, 'html', 999999999);
// Phone.addUser('Guest2', 'LastName2', 20, 'css', 999999999);
// Phone.validateNumber(0957784760);
// Phone.deleteUser('Guest');
// Phone.deleteUser('Guest');
// Phone.deleteUser('LastName2');
// Phone.sorter('number');
// Phone.searcher('Guest');
// Phone.filter('Chekalin');

Phone.editUser([{ name: 'Sveta', surName: 'Chekalina' }, { name: 'Svitlana', age: 27 , tag:'some tags'}]);

console.log(Phone);
