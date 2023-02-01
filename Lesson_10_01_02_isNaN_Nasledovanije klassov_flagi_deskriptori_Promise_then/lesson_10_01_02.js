// *********************** isNaN() ***********************************
// let a = NaN;

// console.log(isNaN(a)); // Dejstvitelno li a ravnijaetsia NaN, true

// if (!isNaN(a)) { // true i togda uze otvet. Konvertirujem logiku operatora
//   ...
// }

// ********************** Nasledovanije klassov *********************

// class Drive {
//   constructor(model) {
//     this.model = model;
//     this.speed = 0;
//   }
//   driving(speed) {
//     this.speed = speed;
//     console.log(`${this.model} едет со скоростью ${this.speed} км/ч`);
//   }
//   parking() {
//     this.speed = 0;
//     console.log(`${this.model} припорковался!`);
//   }
// }

// let car1 = new Drive('Tesla');
// car1.driving(60);
// car1.parking();
// console.log(car1);

// Operator extends pozvoliajet ukazat imia nasledujemogo klassa
// class Car extends Drive {
//   constructor(model) {
//     super(); // cto bi skopirovat vse svojstva s drugogo klassa. Obezatelnoje trebovanije
//     this.model = model;
//     this.lights = false;
//   }
//   setLights() {
//     this.lights = !this.lights;
//     console.log(
//       `${this.model} ${this.lights ? 'включил/а' : 'выключил/а'} фары`
//     );
//   }
// }

// let car2 = new Car('Opel');
// car2.driving(100); // Opel едет со скоростью 100 км/ч
// car2.parking(); // Opel припорковался!
// car2.setLights(); // Opel включил/а фары
// car2.setLights(); // Opel выключил/а фары
// console.log(car2); // Car { model: 'Opel', speed: 0, lights: false }

// let car3 = new Drive('BMW');
// console.log(car3); // Drive { model: 'BMW', speed: 0 }

// ***************** Flagi (deskriptori) svojstva objekta **********

// let obj = {
//   name: 'Tigran',
//   salaray: 1000,
//   age: 30,
//   jobId: 'it_prog',
// };

// console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
// Object.getOwnPropertyDescriptor(obj, 'name') - pozvoliajet polucit sostojanije vseh flagov deskriptorov dlia ukazannogo svojstva

// value: 'Tigran'
// writable: true - pravo na izmenenije znacenije svojstva
// enumerable: true - pravo na iteraciju v cikle
// configurable: true - pravo na izmenenije i udalenije eto go ze flaga v dalnejssem

// -------------------------------------------
// Object.defineProperty(obj, 'name', {}) - metod pozvoliajet izmenit flagi deskriptorov

// console.log(Object.defineProperty(obj, 'name', { writable: false })); // zapretit meniat svojstvo  name
// console.log(Object.defineProperty(obj, 'name', { enumerable: false })); // spriatat svojstvo v objekte
// console.log(Object.defineProperty(obj, 'name', { configurable: false })); // ne smogu udalit name svojstvo
// console.log(Object.getOwnPropertyDescriptor(obj, 'name'));

// obj.name = 'Alex';
// console.log(obj);

// for (let key in obj) {
//   console.log(key); // spriatali svojstvo v cikle
// }

// delete obj.name;

// console.log(obj);

// Object.seal(obj) - pozvoliajet izmeniat deskriptori vseh svojstv

// ------------------------
// let obj2 = {
//     name: 'Tigran',
//     get readName(){
//         return 'Пользователь: ' + this.name
//     }
// }

// let obj1 = {
//     age: 10
// }

// let obj3  = Object.assign(obj1, obj2)

// После копирования getter перестал быть getterom (стал обычном сво-вом)
// console.log(obj3)
// console.log(obj1 == obj3)

// -----------------------------

// ************************* Promise() *****************************

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(json => console.log(json));

// Vvedenije v asinhronnij kod

// Asinhronnij kod - kod na vipolnenije kotorogo trebujetsia n-oje vremia. Kotorije vipolniajutsia momentalno oni pokazivajut srazu, a kotorije vipolniajutsia dolse pokazet poze

// Function setTimeout - pozvolijaet sformirovat zaderzku pered ispolnenijem funkciji callbacka

// setTimeout(() => {
//   console.log('1 log');
// }, 1000); // js ne budet dozidatsia poka vipolnitsia etot kod, vipolniatsia srazu 2 i 3 log, cerez sekundu 1 log

// console.log('2 log');
// console.log('3 log');

// ---------------------------------

// Vlozennost koda, togda budet vipolniatsia snacala vsegda 1 log

// setTimeout(() => {
//   console.log('1 block of code');
//   setTimeout(() => {
//     console.log('2 block of code');
//   }, Math.random() * 30);
// }, Math.random() * 30);

// ----------------------------------

// console.log('send request...');

// setTimeout(() => {
//   let data = [1, 2, 3];
//   console.log('data...', data);

//   setTimeout(() => {
//     handle(data);
//     console.log('handle data...', data);
//   }, Math.random() * 30);
// }, Math.random() * 30);

// function handle(data) {
//   data.push(4);
// }

// Cto bi ne rabotat s takoj vlozennostju, pridumali objekt Promise

// ------------------ Promise

// Promise - kotorij pozvolijaet udobno rabotat s asinhronnim kodom

// fetch vozvrasiajet Promise

// 2 sostojanije Promise = resolve i reject

// Poslali zapros i polucili otvet togda resolve

// Poslali zapros i ne polucili otvet togda reject

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let data = [1, 2, 3];
//     console.log(data);
//     reject();
//   }, 2000);
// });

// console.log(promise);

// ************************** Task 1 *******************************
// Dobavit v massiv element 4

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let data = [1, 2, 3];
//     console.log(data);
//     resolve(data); // mozno peredat mnogo argumentov no metod then polucit tolko 1 argument
//   }, 2000);
// });

// promise.then(() => console.log('I garantee that i show after showing data'));
// promise.then(() => console.log(data)); // error
// promise.then(data => console.log(data)); // [1,2,3]
// To cto mi poluciajem v metode then - eto soderzimoje parametra funkciji resolve()

// promise.then(data => {
//   data.push(4);
//   console.log(data); // [1,2,3,4]
// });

// Metod then - dozidajetsia poka Promise polucit funkciju result i potom dalee ispolnit svoj callback
