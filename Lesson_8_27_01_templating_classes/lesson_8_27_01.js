// ******************* OOP, sablonizacija, Classes ******************

// let user1 = {
//   name: 'Alex',
//   age: 30,
//   salary: 1500,
//   sayHi() {
//     console.log(`Пользователь ${user1.name} говорит привет!`);
//   },
// };

// let user2 = {
//   name: 'Neena',
//   age: 25,
//   salary: 2000,
//   sayHi() {
//     console.log(`Пользователь ${user2.name} говорит привет!`);
//   },
// };

// user1.sayHi();
// user2.sayHi();

// ------------------------------

// Sablonizacija cerez function declaration
// function createUser(name, age, salary) {
//   return {
//     name,
//     age,
//     salary,
//     isJob: true,
//     sayHi(n) {
//       console.log(`Пользователь ${this.name} говорит привет!`, n);
//       console.log(this); // { name: 'Tigran', age: 30, salary: 1500, sayHi: [Function: sayHi] }
//     },
//   };
// }

// let user1 = createUser('Alex', 30, 1500);
// let user2 = createUser('Neena', 30, 1500);
// console.log(user1);
// user1.name = 'Tigran';
// user1.sayHi();

// console.log(this); // {}

// let user3 = new createUser('Alex', 20, 1500);

// console.log(user3);

// Object;
// Number;
// Promise;
// Response;
// Date;

// --------------------------------
// Sablonizator kak klass (class)

// class User {
// constructor opredeliajet vse svojstva kotorije budut dostupni ekzempliaram
//   constructor(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//     this.isJob = true;
//   }
//   sayHi() {
//     console.log(`Пользователь ${user2.name} говорит привет!`);
//   }
// }

// let user1 = new User('Alex', 20, 1500);
// let user2 = new User('John', 30, 2500);
// let user3 = new User('Mike', 40, 3500);
// user1.name = 'Tigran';
// user1.sayHi();

// console.log(user1);
// console.log(user2);
// console.log(user3);

// ************************** Task 1 ******************************
// Напишите класс MathNum, который будет определять в экземплярах:
// 1) Свойство number - числовое значение
// 2) Метод quad(), который должен выводить в консоль квадрат сво-ва number
// 3) Метод sqrt(), который должен выводить в консоль корень сво-ва number

// class MathNum {
//   constructor(number) {
//     if (typeof number != 'number') {
//       console.log('Error: is not a number');
//     } else {
//       this.number = number;
//     }
//   }
//   quad() {
//     console.log(this.number ** 2);
//   }
//   sqrt() {
//     console.log(Math.sqrt(this.number)); // or this.number ** 0.5
//   }
// }

// let number = new MathNum(3);

// number.quad();
// number.sqrt();

// ---------------------------------

// Staticeskije metodi i svojstva u klassov - eto metodi i svojstva, kotorije dostupni tolko klassu

// let date = new Date();

// console.log(date.now()); // new rabotajet poskolku now()-tolko k klassu Date
// console.log(Date.now()); // rabotajet

// izvestnije nam staticesskije metodi
// Object.assign()
// Object.entries()
// Object.keys()
// Object.values()
// Date.now()
// Array.isArray()

class Example {
  constructor(prop) {
    this.prop = prop;
  }
  method() {
    console.log('method');
  }
  // staticesskij metod
  static staticMethod() {
    console.log('Static method!');
  }
  // staticeskoje svojstvo
  static staticProp = 'static prop';
}

let ex = new Example('test');

// Vizov obicnih metodov i svojstv
// ex.staticMethod();
ex.method();

// Vizov staticeskih metodov i svojstv
// ex.staticMethod(); //-  ne rabotajet

Example.staticMethod();
console.log(Example.staticProp);

console.log(ex.staticProp); // undefined, poskolku svojstvo javliajetsia staticesskim. Do nego mozno dobratsia cerez klass Example
