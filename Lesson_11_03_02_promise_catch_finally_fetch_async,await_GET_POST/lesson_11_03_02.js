// ********************** Promise() *********************************
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let data = [1, 2, 3];
//     console.log(data);
//     resolve(data); // mozno peredat mnogo argumentov no metod then polucit tolko 1 argument
//   }, 2000);
// });

// promise
//   .then(data => {
//     data.push(4);
//     console.log(data);
//     return data;
//   })
//   .then(data => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         data.shift();
//         console.log(data, 'last');
//         return data;
//       }, 10);
//     });
//   })
//   .then(data => {
//     data[0] = 'Alex';
//     console.log(data);
//   });

// Cto bi vipolnit cepocku dejstvij metodov then - oni dolzni vozvrasiat dannije cerez kliucevoje slovo return

// -------------------------

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let data = [1, 2, 3];
//     console.log(data);
//     resolve(data);
//     // reject('Failed to fetch');
//   }, 2000);
// });

// promise.then(data => console.log(data, 'then method'));

// ************************* catch() *******************************

// Metod catch dozidajetsia poka promise polucit funkciju reject i potom dalee ispolnit svoj callback, to cto mi polucim v metode catch - eto sodervimoje parametra funkciji reject()

// promise.catch(er => console.log(er)); // failed to catch

// promise.catch(er => console.error(er)); // failed to catch

// *********************** finally() *******************************

// finally - eto Metod, kotorij ispolnit svoj kod v liubom sluciaje (resolve, reject)

// promise.finally(() => console.log('finally'));

// ********************** fetch() **********************************

// let url = 'https://jsonplaceholder.typicode.com/users';

// fetch(url)
//   .then(res => res.json())
//   .then(data = console.log(data));

// ******************** async, await ******************************
// to ze samoje cto fetch zapros, kotorije pozvoliajet izbezat metodi .then
// Primeniajetsia strogo k funckijam. Pered funkcijej dolzen ispolzovatsia operator async
// Cto bi sohranit rezultat raboti promise, pered prisvojenijem k peremennoj neobhodimo ukazat operator await
// Kod vnutri funkciji budet dozidatsia vipolnenija kazdogo await
// Izbegajet metod then(), no ne catch() (smotri konstrukciju try... catch)

// async function fetchUsers() {
//   let url = 'https://jsonplaceholder.typicode.com/users';
//   let res = await fetch(url);
//   let data = await res.json();
//   console.log(data);
// }

// let result = fetchUsers();

// console.log(result); // vozvrasiajet promise

// ******************** GET, POST zaprosi ***************************

// GET
let url = 'http://51.250.8.198:8000/api/get_all/';
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data));

// POST
// let url = 'http://51.250.8.198:8000/api/create/';

// let data = {
//   title: 'telran',
//   text: 'Lesson 37-38',
// };

// fetch(url, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json;charset=utf-8',
//   },
//   body: JSON.stringify(data),
// });
