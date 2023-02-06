// ************************** GET, POST, DELETE, PUT ****************

// GET
// const getAllPosts = () => {
//   let url = 'http://51.250.8.198:8000/api/get_all/';
//   fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data));
// };

// getAllPosts();

// POST

// const createPost = (title, text) => {
//   let url = 'http://51.250.8.198:8000/api/create/';

//   let data = {
//     title,
//     text,
//   };

//   fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8',
//     },
//     body: JSON.stringify(data),
//   });
// };

// createPost('frontEnd', '06.02.2023');

// ----------------------------
// DELETE

// const deleteByID = id => {
//   let url = 'http://51.250.8.198:8000/api/drop/10';
//   fetch(url, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8',
//     },
//   });
// };

// deleteByID(12);

// ********************** Obrabotcik osibok ***********************
// try ... catch

// Naznacenije obrabotki vozmoznih osibok

// try {
//   let a = 10 + b; // jesli tut ne budet osibki, to catch console.log ne budet vipolniatsia. Sintakticesskije osibki ne scitajutsia
// } catch {
//   console.log('Obrabotali osibku'); // tak vipolnitsia, daze jesli b is not defined
// }

// console.log('log 2'); // Posle try i catch obrabotali osibku i etot kod vipolniajetsia daze jesli b is not defined, script viopolniajetsia dalee

// ----------------------------
// Obrabotka osibok na storone zaprosa  kak vnutri domena, tak i vnutri dostupa k route
// async function fetchUsers() {
//   try {
//     let url = 'https://jsonplaceholder.typicode.com/users';
//     let res = await fetch(url);
//     if (res.status >= 400) {
//       console.log('ID Пользователя не существует или ссылка не верна');
//     } else {
//       let data = await res.json();
//       console.log(data, res);
//     }
//   } catch {
//     // catch(error) mozet imet argumenti
//     console.log('Сервер не найден');
//   }
// }

// fetchUsers();

// ------------------------------
// let url = 'https://jsonplaceholder.typicode.com/users';
// fetch(url)
//   .then(res => {
//     if (res.status >= 400) {
//       console.log('ID Пользователя не существует или ссылка не верна');
//     } else {
//       return res.json();
//     }
//   })
//   .then(data => (data ? console.log(data) : ''))
//   .catch(() => console.log('Сервер не найден'));
