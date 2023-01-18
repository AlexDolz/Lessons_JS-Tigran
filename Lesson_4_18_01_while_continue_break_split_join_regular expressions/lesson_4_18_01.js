// ************************ while() break *****************************
// let i = 0;

// Derektiva break - prinuditelnaja ostonovka cikla
// while (true) { // beskonecnij cikl
//   let answer = prompt('2+2=?');
//   if (answer == '4') {
//     break; // prerivajetsia beskonecnij cikl
//   }
// }

// console.log(i > 10);

// while (false) {
// cikl ne budet vipolniatsia
//   console.log('test');
// }

// let i = 0;

// while (i < 3) {
//   i++;
//   console.log('...');
// }

// 1 iteracija  0 < 3 true
// 2 iteracija  1 < 3 true
// 3 iteracija  2 < 3 true
// 4 iteracija  3 < 3 false

// let array = [5, 6, 7, 8, 9, 10];
// for (let elem of array) {
//   console.log(elem); // 5,6,7
//   if (elem > 6) {
//     break;
//   }
// }

// let array = [5, 6, 7, 8, 9, 10];
// for (let elem of array) {
//   if (elem > 6) {
//     break;
//   }
//   console.log(elem); // 5,6
// }

// *********************** continue **********************************

// Derektiva continue - prinuditelno perehodit k sledujusej iteracijii

// let array = [5, 6, 7, 8, 9, 10];

// for (let elem of array) {
//   if (elem == 8) {
//     continue;
//   }
//   console.log(elem); // 5,6,7,9,10   (8) otsutstvujet, potomu cto peresli s continue na druguju iteraciju
// }

// for (let elem of array) {
//   if (elem != 8) {
//     console.log(elem); // to ze samoje tolko bez continue
//   }
// }

// ************************ split() ***********************************

// split()- metod stroki preobrozovivajet stroku v massiv po razdeliteliu

// let string = 'Hello my friend';

// console.log(string.split('')); // [
//   'H', 'e', 'l', 'l',
//   'o', ' ', ' ', 'm',
//   'y', ' ', 'f', 'r',
//   'i', 'e', 'n', 'd'
// ]

// console.log(string.split(' ')); // [ 'Hello', '', 'my', 'friend' ]

// console.log(string.split('l')); // [ 'He', '', 'o my friend' ]

// *************************** join() ********************************

// join()- metod massiva. Preobrazovivajet iz massiva v stroku po razdeliteliu

// let array = ['He', '', 'o my friend'];
// console.log(array.join('l')); // Hello my friend

// ************************* Regular expressions **********************

// let array = ['world134strin', '14strin', 'world134345', 'worldstrin134234564'];

// for (let elem of array) {
//   reg = /\d+/;
//   console.log(elem.match(reg)[0]);
// }

// ----------------------------------- Method match
// match() - vozvrasiajet massiv dannih, v kotorom opredeliajetsia informacija najdennogo sovpadenija po maske

// let string = 'hello world';

// let reg = /wo/;
// let result = string.match(reg);
// console.log(result);

// ---------------------------------- Poisk po gruppe simvolov

// \w - latinskije bukvi i diapozon cisel ot 0 do 9 i simvol niznego podciorkivanija _
// let string = 'hello world';

// let reg = /\w\w\w \w/; // llo w
// let result = string.match(reg);
// console.log(result);

// \d - tolko diapozon cisel ot 0 do 9

// let string = 'hello wor9ld';

// let reg = /\d/; // 9
// // let reg2 = /\d\d/; // null
// let result = string.match(reg);
// console.log(result);

// \s - tolko probel
// let string = 'hello wor9ld';

// let reg = /\s/; // '
// let result = string.match(reg);
// console.log(result);

// \W - NE latinskije bukvi i diapozon cisel ot 0 do 9 i simvol niznego podciorkivanija _
// \D - NE  diapozon cisel ot 0 do 9
// \S - NE probel

// let string = '213412546h6466543';
// let reg = /\D/; // h
// let result = string.match(reg);
// console.log(result);

// -------------- Polzovatelskij nabor simvolov

// [abcABC123] - polzovatelskij nabor

// let string = 'Hello Д world';
// let reg = /[а-яА-Я]/; // Д
// let result = string.match(reg);
// console.log(result);

// .  -  liuboj simvol
// [.] - ekranirrovanije spec simvolov
// ili \.
// let string = 'Hello . world';
// let reg = /[.]/; // .
// let result = string.match(reg);
// console.log(result);

// ^ (cirkumflex) - nacalo stroki
// $          -      konec stroki

// let string = '!Hello . world';
// let reg = /^\W\w\w\w\w\w\w\s[.]\s\w\w\w\w$/; // null
// let result = string.match(reg);
// console.log(result);

// let string = '*Hello . world';
// let reg = /^[!?]\W\w\w\w\w\w\w\s[.]\s\w\w\w\w$/; // null
// let result = string.match(reg);
// console.log(result);

// ************************ Task 1 ********************************

// Задача 1
// Задан массив phones. Найдите номера телефонов, которые соответствуют маске
// 'xxx.xxx.xxx'. Поместите эти номера в новый массив newPhones.

// let phones = [
//   '4235123.123.123',
//   '453.567.9857876',
//   '23.33.22.34',
//   '567.986.423',
//   '123456.4533',
//   '567.90987.5',
//   '12.3323.321',
//   '1234.566777',
//   '655.432.342',
// ];

// let newPhones = [];

// let reg = /^\d\d\d[.]\d\d\d[.]\d\d\d$/;
// for (let elem of phones) {
//   let result = elem.match(reg);
//   if (result != null) {
//     newPhones.push(result[0]);
//   }
// }
// console.log(newPhones);

// -------------------------------------
// Kvantifikatori
// {n} - n-oje kolicestvo podriad idusih grupp simvola

// let string = '567.986.423';

// let reg = /^\d{3}[.]\d{3}[.]\d{3}$/; // vmesto 3 podriad \d\d\d {3}
// let result = string.match(reg);

// console.log(result);

// /[a-zA-Z]{5}/
