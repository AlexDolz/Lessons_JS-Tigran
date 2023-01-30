// ************************ Task 1 ***********************************
// Задача 1
// 1) Создать класс Object2
// 2) Сделать полную копию метода values() примечание (метод должен быть статичным, метод должен получать объект и возвращать новый массив)

let user = { name: 'name', salary: 100, id: 1 };

// class Object2 {
//   static values(obj) {
//     let array = [];
//     for (let key in obj) {
//       array.push(obj[key]);
//     }
//     return array;
//   }
// }

// console.log(Object.values(user));
// console.log(Object2.values(user));

// **************************** Task 2 ******************************
// 3) Допишите ещё один статичксский метод, который полностью повторяет метод entries

// class Object2 {
//   static entries(obj) {
//     let array = [];
//     for (let key in obj) {
//       array.push([key, obj[key]]);
//     }
//     return array;
//   }
// }

// console.log(Object.entries(user));
// console.log(Object2.entries(user));

// ********************** Task 3 ************************************
// Primer klassa, kotorij ispolzujet staticeskoje svojstvo------------------------
// Zadaca - napisat process kotorij budet scitat itogovoje kolicestvo egzempliarov v classe.

// class Users {
//   static count = 0;

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     ++Users.count;
//   }
// }

// let user1 = new Users('Alex', 30);
// let user2 = new Users('Neena', 25);
// let user3 = new Users('Steven', 35);
// let user4 = new Users('Mike', 40);

// console.log(Users.count); // 4

// ************************** Getter ******************************

// Metod get - eto metod, kotorij pozvoliajet procitat svojstvo objekta
// Osobenost:
// 1. obrasenije k getteru proishodit kak k svojstvu
// 2. gettter ne mozet polucat argumenti
// 3. getter perezapisat nevozmozno

// 1 Example
// let pet = {
//   name: 'Шарик',
//   breed: 'Пудель',
//   get nameBreed() {
//     return `${this.name} - это ${this.breed}`;
//   },
// };

// pet.name = 'Mike';
// console.log(pet.nameBreed); // string Mike - это Пудель

// -------------------------------------

// 2 Example
// let obj = {
//   numbers: ['One', 'Two', 'Three', 'Four'],
//   get lastValue() {
//     return this.numbers[this.numbers.length - 1];
//   },
//   get length() {
//     return this.numbers.length;
//   },
// };

// obj.numbers.push('Five');

// obj.numbers = [1,2,3,45] // 45

// obj.lastValue = 'Tigran'; // nelzia perezapisat
// console.log(obj.lastValue); // Five
// console.log(obj.length); // 5

// ************************** Task 4 ********************************

// Задача:
// задан объект obj. Определите новое сво-во которое будет хранить разницу первого и последнего элемента массива array

// let obj = {
//   array: [10, 40, 30, 50],
//   get valuesDifference() {
//     return Math.abs(this.array[0] - this.array[this.array.length - 1]);
//   },
// };

// console.log(obj.valuesDifference); // 40 Math.abs ctob vozvrasialo vsegda polozitelnoje cislo

// ************************ Setter ********************************
// setter -------------------------------------
// Metod set - pozvoliajet pereopredelit svojstvo objekta
// Pocti takije ze osobennosti kak u getter
// 1. setter javno dolzen polucit tolko 1 argument. Ne mense ne bolse
// 2. setter tak ze javliajetsia svojstvom, argument peredajotsia cerez znak ravenstvo =.
// 3. setter v tele pereopredelajet ukazannije svojstvo objekta na peredannij argument

// let obj = {
//   numbers: ['One', 'Two', 'Three', 'Four'],
//   get lastValue() {
//     return this.numbers[this.numbers.length - 1];
//   },
//   set setArray(value) {
//     let array = value.split(' ');
//     this.numbers = array;
//   },
// };

// obj.setArray = [1, 2, 3, 4];
// obj.numbers = ['One', 'Two', 'Three', 'Four']; Opiat pomeniajetsia takze

// obj.setArray = '1 2 3 4 5';
// console.log(obj.numbers); // [ '1', '2', '3', '4', '5' ] preobrazovalsia v massiv

// console.log(obj.numbers); // [1,2,3,4]
// console.log(obj.lastValue); // 4

// ************************ getter and setter in classes ***********

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   get getAge() {
//     return `Год рождения пользователя ${this.name} - ${
//       new Date().getFullYear() - this.age
//     }`;
//   }

//   set setAge(year) {
//     this.age = new Date().getFullYear() - year;
//   }
// }

// let user1 = new User('Alex', 25);

// user1.setAge = 1984;
// console.log(user1.getAge, user1.age);

// ************************ Privatnoje svojstvo *********************

// class User {
//   #string = 'test'; // privatnoje svojstvo
//   #checkString(value) {
//     // privatnij metod
//     if (value != this.#string) {
//       console.log('Not a string');
//     } else {
//       console.log('string');
//     }
//   }
// }

// let example = new User();

// console.log(example.string); // undefined
// console.log(example.#string); // error
// console.log(example.checkString('string')); // undefined

// ----------------------------------------------
// class User {
//   #string = 'test'; // privatnoje svojstvo
//   get readString() {
//     return this.#string;
//   }

//   set setString(value) {
//     if (typeof value != 'string') {
//       console.log(new Error('Данный тип не поддурживается'));
//     } else {
//       this.#string = value;
//     }
//   }
// }

// console.log(new Error('TEST')); // Erro: TEST

// let example = new User();

// example.setString = 10; // error
// example.setString = 'string';

// console.log(example.readString); // test
