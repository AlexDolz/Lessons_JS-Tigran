// ********************** Objects ***********************************

// Kopirovanije objektov -------------------------------------

// let obj1 = { name: 'Tigran', age: 30 };
// let obj2 = obj1; // true
// let obj2 = { name: 'Tigran', age: 30 };
// let obj2 = Object.assign({}, obj1);
// let obj2 = { ...obj1 }; // { name: 'Tigran', age: 30 }
// console.log(obj2); // { name: 'Tigran', age: 30 }

// console.log(obj1 == obj2); // false

// Sravnenije objektov --------------------------------------

// "{'name': 'Tigran', 'age': 30}"; // json - JavaScript Object Notation

// JSON.stringify() - MediaStreamAudioDestinationNode, preobrazujusij objekt v JSON (vozvrasiajet stroku)
// JSON.parse() - metod, preobrazujusija JSON v JS objekt (vozvrasiajet objekt)

// let obj1 = { name: 'Tigran', age: 30 };
// let obj2 = { name: 'Tigran', age: 30 };

// let json = JSON.stringify(obj1);
// console.log(json); // {"name":"Tigran","age":30}

// console.log(typeof JSON.stringify(obj1));

// console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); //true

// Kopiraovanije objektov 2 ----------------------------------------

// let obj1 = { name: 'Tigran', age: 30 };

// Ne glubokoje kopirovanije
// let objCopy = Object.assign({}, obj1)

// Glubokoje kopirovanije
// let objCopy = JSON.parse(JSON.stringify(obj1));

// console.log(objCopy); // { name: 'Tigran', age: 30 }

// ************************* Task 1 *********************************

// Задача 1
// Заданы три объекта:
// let user_11 = { id: 1 };
// let user_12 = { username: 'user' };
// let user_2 = {
//   id: 1,
//   username: 'user',
// };
// Задача: объедините user_11 и user_12 в один объект
// и сравните результат с объектом user_2.
// В качестве ответа необходимо получить булевый тип

// let obj = Object.assign(user_11, user_12);

// console.log(JSON.stringify(obj) === JSON.stringify(user_2)); // true

// *************************** Task 2 *******************************

// Задача 2:
// Напишите функцию checkObj(obj), которая проверяет, действительно
// ли объект obj пустой {}. Функция должна вернуть булевый тип
// Подсказка: можно попробовать преобразовать объект в массив
// let obj = {};

// function checkObj(obj) {
//   let obj2 = Object.entries(obj);
//   return obj2.length <= 0 ? true : false;
// }

// console.log(checkObj(obj));

// 2 Solution
// let obj = {};

// function checkObj(obj) {
//   let length = Object.keys(obj).length;
//   return length === 0 ? true : false;
// }

// console.log(checkObj(obj));

// 3 Solution
// let obj = {};

// function checkObj(obj) {
//   return Object.keys(obj).length === 0;
// }

// console.log(checkObj(obj));

// 4 Solution

// function checkObj(obj) {
//   return JSON.stringify(obj) == '{}';
// }

// console.log(checkObj({}));

// ************************** Task 3 ********************************

// Задача 3:
// Напишите функцию checkObjectLength(obj1,obj2), которая принимает в
// аргументе 2 объекта. Если у 1 и 2 объекта количество свойств
// одинаковое - функция должна вернуть ответ true

// Пример:
// checkObjectLength({test: 10}, {great: 12})
// Результат: true

// function checkObjectLength(obj1, obj2) {
//   return Object.values(obj1).length === Object.values(obj2).length;
// }

// console.log(checkObjectLength({ test: 10 }, { great: 12 }));

// ---------------------------------

// Proverit dejstvitelno li massiv javliajetsia massivom a ne objektom
// let array = [1, 2, 3];
// let obj = { name: 'Tigran' };

// console.log(typeof array); // object

// console.log(Array.isArray(array)); // true
// console.log(Array.isArray(obj)); // false

// ---------------------------------

// let array = [
//   { id: 1, name: 'Tigran' },
//   [2, 'Alex'],
//   { id: 3, name: 'Neena' },
//   [3, 'Steven'],
// ];

// Задание: сформируйте из массива array два новых массива usersArray и usersObjs,
// элементы которых будут содержать вложенный массив и объект соответственно

// const usersArray = array.filter(elem => Array.isArray(elem));
// const usersObjs = array.filter(elem => !Array.isArray(elem));

// console.log(usersArray);
// console.log(usersObjs);

// ************************ Destrukturizacija ***********************

// Destrukturizacija - eto process sozdanija novih peremennih ( bolse 1 strokoj)

// let a,b,c = 10,40,30 // false

// let [a, b, c] = [10, 40, 30]; // true destrukturizacija
// Poriadok peremennih i cisel posle znaka ravenstva strogo zavisim

// console.log(a, b, c);

// Destrukturizacija dlia objekta -------------------------

// let { a, b, c } = { a: 10, b: 20, c: 30 };

// console.log(a, b, c);

// let obj = { a: 10, b: 20, c: 30 };

// let { a, b, c } = obj;
// console.log(a, b, c); //10,20,30

// let { d, f, c } = obj;
// console.log(d, f, c); // undefined undefined 30

// let { c } = obj;
// console.log(c);

// Destrukturizacija dlia massivov ---------------------------

// let array = [10, 40, 30];
// let [a, b, c, d, f, g] = array;

// console.log(a, b, c, d, f, g); //10 40 30 undefined undefined undefined

// let [a, b] = array;

// console.log(a, b); // 10 40

// ********************** Raspakovka massiva ***********************

// rest operator -----------------------------------
// rest operator - ispolzujetsia dlia soedinenija otdelnih elemntov v massiv

// let array = [5, 6, 7, 8, 9];

// console.log(...array); //5 6 7 8 9
// console.log(5, 6, 7, 8, 9); //5 6 7 8 9 the same

// ...array = 5,6,7,8,9

// let arrayCopy = [...array]; // [5,6,7,8,9] ne glubokoje kopirovanije massiva

// console.log(arrayCopy);

// kopirovanije i dobavlenije
// let arrayCopy = [...array, 10]; // [5,6,7,8,9,10] dobavili 10 kak push
// let arrayCopy2 = [30, 40, ...array, 'Alex']; // [30,40,5,6,7,8,9,'Alex'] dobavili 30,40, 'Alex'

// console.log(arrayCopy);
// console.log(arrayCopy2);

// spread operator -----------------------------------

// operator spread = ispolzujetsia dlia razdelenija massiva/objekta na otdelnije elementi

// function log(...array) {
//   console.log(array);
// }

// log(1, 2, 3); // [1,2,3]
// log(1, 2, 3, 4, 5); // [1,2,3,4,5]

// function log(...array) // rest operator {
//   console.log(...array) // spread operator;
// }

// function handle(n1, n2, ...array) {
//   console.log(n1, n2, array);
// }

// Dannaja struktura ocen silno pohoza na realizaciju metoda splice()
// handle(1, 2, 3, 4, 5);

// *********************** splice() ****************************

// let array = ['one', 'two', 'three', 'four'];

// array.splice(2, 1, 3, 4, 5, 6); // 2 index s kakovo elementa udaliajem, 1 skolko udaliajem, 3,4,5,6 dobavliajem v massiv
// console.log(array);
