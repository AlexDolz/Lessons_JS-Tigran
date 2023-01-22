// *********************** Regular expressions *********************

// /\d{4, 5}/  ili 4 ili 5 cifr, bolseje znacenije imeejt privilegiju, najdiot 5
// /\d{4, 6}/  ili 4 ili 5  ili 6 cifr, bolseje znacenije imeejt privilegiju, najdiot 6 esli jest
// {n, } - n ili mnogo
// + - {1, } (odin ili mnogo)
// * - zamena {0, } (0 ili mnogo)
// ? - zamena {0,1} (0 ili 1)
// /g - Флаг g означает, что поиск будет идти по всей строке и вернёт все вхождения (в отличии от метода indexOf)
// ?: - ?: говорит о том, что мы хотим исключить из выдачи какую-то группу символов (но при этом искать по ней всё равно будем)
// [^@] - [^@] означает, что нас устроит любой символ, кроме “@”. В целом это работает примерно как логическое  “не” для набора символов.

// let string = 'tigran@mail.com.ru';
// let reg = /\w+[@]\w{2,}[.]\w{2,}[.]?\w*/;
// let result = string.match(reg);

// console.log(result);

// --------------------------------
// Metod split v kacestve argumenta mozet peredavat masku

// Sformirovat iz stroki string massiv, elementi kotorogo budut soderzat tolko podstroku test
// let string = 'test1test7test9test20test';

// let result = string.split(/\d+/);

// console.log(result);

// ************************* date **********************************

// Inizialization of date (3 variation)

// 1 variation ------------------
// let date = new Date('2023-01-20 9:30:00 GMT'); // GMT lokalizujem vremia pod nas ciasovoj pojas

// console.log(date);

// 2 variation -----------------
// let date = new Date(2023, 0, 20, 9, 30, 0); // esli ukazat mesiac v vide cisla, togda nacalo mesiacev s 0.

// console.log(date);

// 3 variation -----------------

// Otciot s 1970 goda 1 mesiaca 1 cisla v 00:00
// let date = new Date(); // po defaultu rabotajet Date.now() i pokazivajet datu i vremia po grinvicu
// let date2 = new Date(0); // 1970-01-01T00:00:00.000Z
// let date3 = new Date(1000 * 60 * 6); // 1970-01-01T00:06:00.000Z
// let date4 = new Date(1000 * 60 * 60 * 24 * 365); // 1971-01-01T00:00:00.000Z

// console.log(date4);

// Tekusij moment vremeni -------------------

// let date = new Date() // vozvrasiajet datu tekusego momenta vremeni
// let num = Date.now() // - metod kotorij vozvrasjaiet kolicestvo projdennih milisekund s 1970 goda do momenta vizova

// Metodi dati (komponenti dati) --------------------
// Metodi kotorije pozvoliajut polucit otvet v vide cisla liuboj komponent dati
// let date = new Date('2023-01-20 9:30:00');

// console.log(date.getFullYear()); // 2023
// console.log(date.getMonth()); // 0 januar
// console.log(date.getDate()); // 20
// console.log(date.getTime()); // milisekundi

// console.log(date.getHours()); // 9
// console.log(date.getMinutes()); // 30
// console.log(date.getSeconds()); // 0
// console.log(date.getMilliseconds()); // 0

// console.log(date.getDay()); // 5 friday   0-voskresenije

//  ------------------------------
// Metodi kotorije pozvoliajut izmenit datu ukazav otdelnije komponenti
// i vozvrasiajut kolicestvo milisekund s 1970 goda do znacnija izmenionoj dati
// let date = new Date('2023-01-20 9:30:00');

// date.setFullYear(2030);
// date.setMonth(11);
// date.setDate(30);

// date.setHours(20);
// date.setMinutes(0);
// date.setSeconds(0);
// date.setMilliseconds(0);

// console.log(date); // 2030-12-30T19:00:00.000Z

// ************************** Task 1 ******************************
// Задача 1.
// Напишите функцию getWeekDay(), которая в зависимости от даты (текущего момента времени) в консоль выводит день недели

// Пример:
// getWeekDay()

// Результат:
// 'Сегодня вторник'

// 1 Solution
// function getWeekDay() {
//   let date = new Date();
//   let day = date.getDay();
//   if (day === 0) {
//     console.log('Today Sunday');
//   } else if (day === 1) {
//     console.log('Today Monday');
//   } else if (day === 2) {
//     console.log('Today Tuesday');
//   } else if (day === 3) {
//     console.log('Today Wednesday');
//   } else if (day === 4) {
//     console.log('Today Thursday');
//   } else if (day === 5) {
//     console.log('Today Friday');
//   } else if (day === 6) {
//     console.log('Today Saturday');
//   }

//   return day;
// }
// console.log(getWeekDay());

// 2 Solution short

// function getWeekDay() {
//   let day = new Date().getDay();
//   let array = [
//     'Sunday',
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//   ];
//   console.log(`Today ${array[day]}`);
// }
// getWeekDay();

// Sravnenije date --------------------------
// let date1 = new Date('2023-5-10 10:00:00');
// let date2 = new Date('2023-5-10 10:00:00');
// console.log(date1 == date2); // false objekti sravnit nelzia
// console.log(date1.getTime() == date2.getTime()); // true eto uze ne objekt

// From date to string -----------------------
// let date = new Date('2023-5-10 10:00:00');

// console.log(date.toLocaleDateString()); // 5/10/2023
// console.log(date.toLocaleTimeString()); // 10:00:00 AM
// console.log(date.toLocaleString()); // 5/10/2023, 10:00:00 AM

// console.log(date.toLocaleString('it-IT')); // format vremeni italiji
// console.log(date.toLocaleString('de-DE')); // format vremeni germaniji
// console.log(date.toLocaleString('ru-RU')); // format vremeni rossiji

// console.log(
//   date.toLocaleString('ru-RU', {
//     year: 'numeric',
//     month: 'long',
//     hour: '2-digit',
//   })
// );
