// Отсортируйте массив в рандомном порядке

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const shuffledArray = array.sort((a, b) => 0.5 - Math.random());

// // solution 2
// // const shuffledArray = array.sort((a, b) => Math.random() - Math.random());

// console.log(shuffledArray);

// **********************Method find()***************

// find() - Vozvrasiajet element massiva po usloviju kolbeka

// let users = [
//   { id: 1, name: 'Alex', salary: 1000 },
//   { id: 2, name: 'Steven', salary: 5000 },
//   { id: 3, name: 'Neena', salary: 450 },
//   { id: 4, name: 'Wolyam', salary: 10000 },
//   { id: 5, name: 'Jonh', salary: 799 },
//   { id: 6, name: 'Clark', salary: 2222 },
// ];

// let result = users.find(value => value.salary < 1000); // verniot  tolko pervij popavsijsia element massiva
// console.log(result);

// *******************Method findIndex()***************

// findIndex() -  vozvrasiajet index elementa podhodiasij pod zapros, vozvrasiajet tolko pervij popavsijsia

// let users = [
//   { id: 1, name: 'Alex', salary: 1000 },
//   { id: 2, name: 'Steven', salary: 5000 },
//   { id: 3, name: 'Neena', salary: 450 },
//   { id: 4, name: 'Wolyam', salary: 10000 },
//   { id: 5, name: 'Jonh', salary: 799 },
//   { id: 6, name: 'Clark', salary: 2222 },
// ];

// let result = users.findIndex(value => value.salary > 5000);
// console.log(result);

// ******************** Task 1 ***********************************

// Найдите пользователся, id которого представляется в виде четного числа, а возраст менее 33

// let users = [
//   { id: 1, name: 'Alex', lastname: 'Folon', age: 24 },
//   { id: 2, name: 'Willyam', lastname: 'Maxwell', age: 33 },
//   { id: 3, name: 'Steven', lastname: 'Fersters', age: 35 },
//   { id: 4, name: 'Neena', lastname: 'Maxwell', age: 31 },
// ];

// let result = users.find(value => value.id % 2 === 0 && value.age < 33);
// console.log(result);

// ********************** Method some() and every()*****************

// some() - opredelijaet susestvujet hotia bi 1 element, kotorij sootvestvujet kolbek usloviju, vozvrasiajet boolean tip, true ili false

// let users = [
//   { id: 1, name: 'Alex', salary: 1000 },
//   { id: 2, name: 'Steven', salary: 5000 },
//   { id: 3, name: 'Neena', salary: 450 },
//   { id: 4, name: 'Wolyam', salary: 10000 },
//   { id: 5, name: 'Jonh', salary: 799 },
//   { id: 6, name: 'Clark', salary: 2222 },
// ];

// let result = users.some(value => value.id == 2);
// let result2 = users.some(value => value.salary > 5000);
// let result3 = users.some(value => value.id == 100);
// console.log(result);
// console.log(result2);
// console.log(result3);

// *****************************************************

// every() - opredelijaet vse li elemeenti, kotorij sootvestvujet kolbek usloviju, vozvrasiajet boolean tip, true ili false

// let users = [
//   { id: 1, name: 'Alex', salary: 1000 },
//   { id: 2, name: 'Steven', salary: 5000 },
//   { id: 3, name: 'Neena', salary: 450 },
//   { id: 4, name: 'Wolyam', salary: 10000 },
//   { id: 5, name: 'Jonh', salary: 799 },
//   { id: 6, name: 'Clark', salary: 2222 },
// ];

// let result = users.every(value => value.id == 1);
// console.log(result);

// **************************** Task 2 **************************

// Решите следующие задачи:
// 1) Определите наличие одного элемента, чей квадратный корень цены будет вычисляться без остатка. Выведите булевый тип
// 2) Определите, у всех ли элементов массива сво-во count отличимо от 0

// let data = [
//   { id: 2, goods: 'Самокат', count: 1, price: 3500 },
//   { id: 3, goods: 'Ролики', count: 15, price: 6000 },
//   { id: 5, goods: 'Скейтборд', count: 8, price: 999 },
//   { id: 4, goods: 'Ракетки', count: 30, price: 100 },
//   { id: 1, goods: 'Велосипед', count: 5, price: 2000 },
// ];

// 1) Определите наличие одного элемента, чей квадратный корень цены будет вычисляться без остатка. Выведите булевый тип
// let result = data.some(value => Math.sqrt(value.price) % 1 === 0);
// console.log(result); // ili value.price ** 0.5 % 1 === 0

// 2) Определите, у всех ли элементов массива сво-во count отличимо от 0
// let result2 = data.every(value => value.count != 0);
// console.log(result2);

// **************************** Task 3 ******************************
// Повторить метод some(), сформировав функцию some2(array, callback)
// Функция должна вернуть булевый тип

let data = [
  { id: 2, goods: 'Самокат', count: 1, price: 3500 },
  { id: 3, goods: 'Ролики', count: 15, price: 6000 },
  { id: 5, goods: 'Скейтборд', count: 8, price: 999 },
  { id: 4, goods: 'Ракетки', count: 30, price: 100 },
  { id: 1, goods: 'Велосипед', count: 5, price: 2000 },
];

function some2(array, callback) {
  for (let elem of array) {
    if (callback(elem)) {
      return true;
    }
  }
  return false;
}

console.log(some2(data, elem => elem.price > 1000));
console.log(some2(data, elem => elem.id == 10));

// function handler(callback) {
//   return callback(10);
// }
// handler(value => console.log(a));
