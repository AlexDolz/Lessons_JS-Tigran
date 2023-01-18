// ********************** Strings Methods **************************

// let a = 'Hel\nlo'; // perenos stroki dlia "" i ''
// let b = 'Hel\tlo'; // tabuliacija
// let c = 'Hel  lo'; // tobuliacija

// console.log(a);
// console.log(b);
// console.log(c);

// ************************** concat() *******************************

// concat() - metod conkatinirujusij stroki

// let a = 'Hello';
// let b = 'friend';

// console.log(a.concat(', ', b)); // redsko polzujut

// console.log(a + ', ' + b); // to ze samoje v rezultate

// console.log(`${a}, ${b}`); // to ze samoje v rezultate

// concat dlia massiva

// let a = [1, 2, 3];
// let b = [4, 5, 6];

// console.log(b.concat(a));
// console.log(a * b);
// console.log([...b, ...a]); // rabotajet kak konkatenacija dlia massiva
// console.log([...b, ...a, 7]); // rabotajet kak push, dobavliajet v konec cislo

// ************************* repeat() *********************************

// repeat() - povtorit n-oje kolicestvo raz stroku

// let a = 'Hello';
// console.log(a.repeat(5)); // povtorit 5 raz Hello bez probela

// ************************* includes() *******************************

// includes() - metod kotorij opredeliajet, susetvujet li podstroka substring v stroke

// let a = 'Hello my friend';

// console.log(a.includes('lo m')); // true
// console.log(a.includes('my')); // true
// console.log(a.includes('friend')); // true
// console.log(a.includes('frienda')); // false
// console.log(a.includes('Friend')); // false

// ************************* startsWith() *****************************

// startWith(substring) - metod kotorij proveriajet, nacinajetsia li stroka s zadannoj v kacestve argumenta podstrokoj

// let a = 'Hello my friend';

// console.log(a.startsWith('Hello')); // true
// console.log(a.startsWith('my')); // false
// console.log(a.startsWith('friend')); // false

// ************************* endsWith() *******************************

// endsWith(substring) - metod kotorij proveriajet, zakancivajetsia li stroka s zadannoj v kacestve argumenta podstrokoj

// let a = 'Hello my friend';

// console.log(a.endsWith('Hello')); // false
// console.log(a.endsWith('my')); // false
// console.log(a.endsWith('friend')); // true
// console.log(a.endsWith('y friend')); // true
// console.log(a.endsWith('lo my friend')); // true

// ************************* indexOf() *****************************

// indexOf() - vozvrasiajet index nacala podstroki

// let a = 'Hello my friend';

// console.log(a.indexOf('Hello')); // 0
// console.log(a.indexOf('friend')); // 9
// console.log(a.indexOf('my')); // 6
// console.log(a.indexOf('My')); // -1 tak kak netu podstroki My s bolsoj bukvi

// let a = 'Hello my friend my';

// console.log(a.indexOf('my', 0)); // po default 0, nacalo poiska
// console.log(a.indexOf('my', 8)); // isem s 8 indexa, i nahodim index vtorogo sovpadenija takogo ze slovo
// console.log(a.lastIndexOf('my')); // lastIndexOf iset s konca index v stroke a ne s nacala

// *******************************************************************
// Задача 1.
// Определить индекс второй подстроки 'date' у переменной string.
// Код должен работать на 2 тестах
// 1-ый тест
// let string = 'date 10.10.10 date 20.20.20 date 30.30.30';
// 14

// 2-ой тест
// let string2 = '10.10.10.10.10.10 date 20.20.20 date 30.30.30 date';
// 32

// console.log(string.indexOf('date', string.indexOf('date') + 1));
// console.log(string2.indexOf('date', string2.indexOf('date') + 1));

// *******************************************************************

// Задача.
// Задан формат даты в переменной dates в виде строки.
// '2022/10/18' - американский
// '2022.10.18' - русский

// Напишите программу, которая определит к какой стране относится формат даты
// В качестве ответа вывести сообщение "Формат даты российский"

// Пример:
// let date = '2020/10/18';
// let date = '2020.10.18';

// Результат:
// Формат даты американский

// let result = date.includes('/');
// if (result === true) {
//   console.log(`Формат даты американский`);
// } else {
//   console.log(`Формат даты российский`);
// }

// function checkDate(date) {
//   if (date.includes('/') === true) {
//     console.log(`Формат даты американский`);
//   } else {
//     console.log(`Формат даты российский`);
//   }
// }

// checkDate(date);

// ******************************************************************
// Задача 3.
// Задан массив emails, передающий строковые элементы. Определите, все ли элементы содержат верную почту.
// Критерии правильной почты: наличие "@" и "."
// В качестве ответа необходимо в консоль вывести ответ true/false для каждого элемента.

// Пример:
// let emails = ['top@dot.com', 'abra@gmailcom', 'pot.mail.ru', 'grek@pro.pro'];

// Результат:
// true
// false
// false
// true

// for (let elem of emails) {
//   console.log(elem.includes('@') && elem.includes('.'));
// }

// ForEach

// emails.forEach(elem => console.log(elem.includes('@') && elem.includes('.')));

// *********************** replace() ******************************

// replace() - zameniajet 1 podstroku na druguju podstroku. Metod vozrasiajet novuju stroku

// let a = 'Hello my friend';

// console.log(a.replace('my', 'our')); // Hello our friend
// console.log(a); // Hello my friend

// let a = 'Hello my friend my'; // tolko pervoje vhozdenije meniajet

// console.log(a.replace('my', 'our')); // Hello our friend my

// let a = 'Hello my friend my'; // Nicego ne pomeniajet esli ne najdena podstroka

// console.log(a.replace('My', 'our')); // Hello my friend my

// let a = 'Hello my friend';

// console.log(a.replace('my', '')); // Hello friend udaliajet podstroku

// let a = 'Hello my friend my';
// console.log(a.replaceAll('my', 'our')); //Hello our friend our
// ReplaceAll meniajet vse vhozdenija takih ze

// *****************************************************************

// Задача 4
// Задан массив phones, передающий номера телефонов в виде строки.
// Реализуйте очистку данных, сформировав единый вид для все элементов массива.phones

// Пример:

// let phones = ['891 11112 233', '89111-1122-44', '8911-11122-55', '89111112266'];

// Результат:

// ['+79111112233','+79111112244','+79111112255','+79111112266']

// for (let i in phones) {
// in mozem perezapisat v masive
//   phones[i] = phones[i]
//     .replaceAll(' ', '')
//     .replaceAll('-', '')
//     .replace('8', '+7');

//   console.log(phones);
// }

// console.log(
//   phones.map(elem =>
//     elem.replaceAll(' ', '').replaceAll('-', '').replace('8', '+7')
//   )
// );

// **************************** slice() ****************************

// slice(n, m) - pozvoliajet sformiroavat podstroku ot n indeksa do m indeksa (m ne vkliucitelno)

// let a = 'Hello my friend';

// console.log(a.slice(3, 7)); // lo m
