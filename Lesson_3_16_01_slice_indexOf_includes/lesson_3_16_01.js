// *************************** Taks 1 *******************************

// Задана почта в переменной email.
// Пример:
// let email = 'thegreat@mail.com';
// let email = 'tigran@rambler.net';

// Результат: thegreat
// Результат: tigran

// 1)Выведите в консоль только логин почты.

// console.log(email.slice(0, email.indexOf('@')));

// 2) Выведите в консоль только логин домена (mail, rambler)

// console.log(email.slice(email.indexOf('@') + 1, email.indexOf('.')));

// 3) Выведите в консоль только доменную зону (com, net)

// console.log(email.slice(email.indexOf('.') + 1));

// 2 solution if two dots

// console.log(email.slice(email.lastIndexOf('.') + 1));

// ****************************** Task 2 *****************************
// Задача 2.
// Задача строка string. Сформируйте новую подстроку по следующему правилу:
// если строка начинается на date: в этом случае оставьте только дату
// если в строка не начинает на date - оставить строку в исходном виде

// Пример:
// 1)
// let string = 'date: 2022.10.10';
// 2)
// let string = '2010.06.06';
// Результат:
// 1) '2022.10.10'
// 2) '2010.06.06'

// let result = string.startsWith('date: ')
//   ? string.replace('date: ', '')
//   : string;
// console.log(result);

// 2 solution
// if (string.startsWith('date:')) {
//   console.log(string.slice(string.indexOf(':') + 2));
// } else {
//   console.log(string);
// }

// **************************** Task 3 *****************************
// Задан массив phones
// Сформируйте новый массив newPhones.
// Если телефон начинается на +7 - он должен оказаться в новом массиве

// Пример:
// let phones = ['+7975644911', '8975644944', '+7975644999', '+7975644945'];

// Результат:
// ['+7975644911','+7975644999','+7975644945']

// let newPhones = [];

// for (let elem of phones) {
//   if (elem.startsWith('+7')) {
//     newPhones.push(elem);
//   }
// }

// console.log(newPhones);

// 2 solution
// newPhones = phones.filter(elem => elem.startsWith('+7'));
// console.log(newPhones);

// *************** Methods that works with strings and arrays *******
// ********************** slice() *********************************

// slice(n, m) - pozvoliajet sformiroavat podstroku ot n indeksa do m indeksa (m ne vkliucitelno)

// let a = 'Hello my friend';
// let a = 'Hello my friend my';

// console.log(a.slice(3, 7)); // lo m

// console.log(a.slice(9)); // friend  beriot ot 9 i idiot do konca

// console.log(a.slice(-6)); // friend  nacinajem sciot ot -1 s prava

// console.log(
//   a.slice(a.indexOf('friend'), a.indexOf('friend') + 'friend'.length + 1)
// ); // friend vsegda budet vozvrasiat eto. avtomatizirovannoje resenije

// slice() - vozvrasiajet novij massiv s ukazannim diapozonom elementov

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(a.slice(0, 4)); // [1,2,3,4]

// console.log(a.slice(5)); // [6,7,8,9]

// console.log(a.slice(-2)); // [8,9]

// ************************** indexOf() *****************************

// indexOf() - vozvrasiajet index najdennogo elementa massiva/ V kacestve argumenta peredajot znacenije iskomogo elementa massiva

// let a = [' one', 'two', 'three', ['four']];

// console.log(a.indexOf('three')); // 2

// console.log(a.indexOf('four')); // -1 tak kak indexOf rabotajet tolko s primitivom, a u nas vlozennij massiv

// console.log(a.findIndex(elem => elem == 'four')); // 2 pokazivajet i massiv v massive

// console.log(a.indexOf('fo')); // -1  esli ne nasol polnoje nazvanije

//  pod kapotom indexOf

// function indexOf(string) {
//   for (let elem in array) {
// elem = ['four']
// ['four'] == ['four'] false
//     if (array[elem] == string) {
//       return elem;
//     }
//   }
//   return -1;
// }

// let a = [1, 2, 3];
// let b = a;

// console.log(a == b); // true peremennije a i b ssilajuutsia na tot ze massiv. Tak lucse nikogda ne pisat

// b.push(4); // togda izmenenija budut and b and a
// console.log(a);
// console.log(b);

// let a = [1, 2, 3];
// let b = [1, 2, 3];

// console.log(a == b); // false tak kak peremennije hraniat put v oblast jaceiki pamiati

// let b = ['four'];
// let arr = ['one', 'two', 'three', b];

// console.log(arr.indexOf(b)); // tak budet rabotat, b ssilajetsia na tot ze massiv gde a

// *********************** Copy of array ***************************

// Sozdat kopiju massiva
// let a = [1, 2, 3];
// let b = a.slice(0); // slice vozvrasiajet novij massiv, poetomu peremennaja b budet hranit kopiju novogo massiva. V principe podojtio liuboj metod kotorij vozvrasiajet novij massiv
// let b = a.map(elem => elem);
// let b = [...a]; // toze kopija massiva spread operator

// b.shift();
// console.log(1,2,3);
// console.log(...a); // 1 2 3

// console.log(a, b, a == b);

// ************************** includes() **************************

// includes() - vozvrasjaiet bulevij tip i proveriajet susetvujet li zadannoje znacenije sredi vseh elementov

// let a = ['one', 'two', 'three', ['four']];
// console.log(a.includes('one')); // true
// console.log(a.includes('four')); // false tak ze kak i indexOf
