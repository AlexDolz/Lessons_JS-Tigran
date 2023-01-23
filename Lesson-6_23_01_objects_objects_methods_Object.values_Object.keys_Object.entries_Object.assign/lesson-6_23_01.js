//  ************************* Object ********************************

// let array = [5, 6, 7, 8];

// let obj = {
//   name: 'Tigran',
//   age: 30,
//   isJob: false,
//   test1: [1, 2, 3, 4],
//   test2: {
//     string: 'somestring',
//   },
//   test3: () => console.log(123),
//   test4: function () {
//     console.log(123);
//   },
//   test5: array.map(elem => elem ** 2),
// };

// console.log(obj);

// -----------------------------------------

// let obj = {
//   name: 'Tigran',
//   age: 30,
//   'first name': 'Alex',
//   firstname1: 'John',
//   firstname2: 'Mike',
//   firstname3: 'Koby',
// };

// console.log(obj.name + ' test');
// console.log(obj.age, typeof obj.age);
// console.log(obj['first name']);
// console.log(obj[`first name${i}`]); // cerez cikl

// ------------------------------------------

// let obj = {
//   11: 7,
//   10: 6,
//   0: 1,
//   1: 2,
//   2: 3,
//   3: 4,
//   4: 5,
// };

// console.log(obj); // { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '10': 6, '11': 7 } otsortirovan

// -----------------------------------------

// let obj = {
//   name: 'Tigran',
//   name: 'Alex', // perezapisivajet kliuc name
//   age: 30,
// };

// Dobavlenije novogo svojstva / perezapisat susetvujuseje svojstvo

// obj.salary = 10000;
// obj.name = 'Ivan';

// console.log(obj); // { name: 'Ivan', age: 30, salary: 10000 }

// Udalenije svojstva operator deelte

// delete obj.age;
// console.log(obj); // { name: 'Ivan', salary: 10000 }

// ----------------------------------------------
// Osobennosti delete u massiva

// let array = [1, 2, 3, 4];

// delete array[1];

// console.log(array); // [ 1, <1 empty item>, 3, 4 ] udaliajet znacenije ostavliaja index

// Cilki po objektam  ----------------------------------

// let obj = {
//   name: 'Alex',
//   age: 30,
//   salary: 4000,
// };

// for (let key in obj) {
//   console.log(key); // name age salary  znacenije kliucej
//   console.log(obj[key]); // Alex 30 4000  znacenije svojstv
// }

// ************************* Boolean *******************************

// let string = ' '; // 123
// let string = ''; // pusto

// if (string) {
//   console.log('123');
// }

// console.log(Boolean(undefined));

// ****************************** Task 1 ****************************

// Задача 1
// Используя цикл, выведите все значения объекта с числовым набором данных.

// Пример:
// let obj = {
//   char1: 1,
//   char2: 'string',
//   char3: 3,
//   char4: true,
//   char5: 'false',
//   char6: 1,
// };

// Результат:
// 1
// 3
// 1

// for (let key in obj) {
//   if (typeof obj[key] === 'number') {
//     console.log(obj[key]);
//   }
// }

//  2 Solution with typeOf()
// for (let key in obj) {
//   if (typeof obj[key] === 'number') {
//     console.log(obj[key]);
//   }
// }

// ************************* Task 2 ********************************

// Задача 2.
// Используя цикл, выведите значения сво-св, у которых
// значение ключа завершатся на четное число.

// Пример:
// let obj = {
//   char1: 1,
//   char2: 'string',
//   char3: 3,
//   char4: true,
//   char5: 'false',
//   char6: 1,
// };

// Результат:
// string
// true
// 1

// for (let key in obj) {
//   if (key[key.length - 1] % 2 == 0) {
//     console.log(obj[key]);
//   }
// }

// 2 Solution
// for (let key in obj) {
//   if (key.slice(key.length - 1) % 2 == 0) {
//     console.log(obj[key]);
//   }
// }

// ****************** metodi klassa Object ***************************

// Preobrazovanije objekta v massiv --------------------------

// Object.values(obj) - metod klassa Object, kotorij vozvrasiajet massiv so znacenijami svojstv objekta

// let obj = {
//   name: 'Alex',
//   age: 30,
//   salary: 2000,
// };

// console.log(Object.values(obj)); // [ 'Alex', 30, 2000 ]

// -----------------------------------
// Object.keys(obj) - metod klassa Object, kotorij vozvrasiajet massiv s kliucami objekta

// let obj = {
//   name: 'Alex',
//   age: 30,
//   salary: 2000,
// };

// console.log(Object.keys(obj)); // [ 'name', 'age', 'salary' ]

// --------------------------------------

// Object.entries(obj) - metod klassa Object, kotorij vozvrasiajet vlozennij massiv s kliuciami i znacemnijami objekta.

// let obj = {
//   name: 'Alex',
//   age: 30,
//   salary: 2000,
// };

// console.log(Object.entries(obj)); // [ [ 'name', 'Alex' ], [ 'age', 30 ], [ 'salary', 2000 ] ]

// -----------------------------------------
// Object.assign() - metod klassa Object, pozvoliajusij iz 2 objektov sdelat 1 objekt, mutirujet 1 objekt, ne sozdavaja novij

// let user = {
//   name: 'Alex',
//   age: 30,
// };

// let job = {
//   job_id: 'IT',
//   salary: 5000,
// };

// console.log(Object.assign(user, job)); // { name: 'Alex', age: 30, job_id: 'IT', salary: 5000 }

// console.log(user); // { name: 'Alex', age: 30, job_id: 'IT', salary: 5000 } meniajet objekt iznacalnij

// console.log(job); // { job_id: 'IT', salary: 5000 }
