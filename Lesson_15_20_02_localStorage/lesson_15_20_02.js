// ************************** Local storage ******************************

// console.log(localStorage);

// Initializing records in localStorage
// localStorage.setItem('user', 'Hello world!');
// localStorage.setItem('user', 'Hello world! TEST!');

// ------------------------------
// Removing records in localStorage
// localStorage.removeItem('user');

// -------------------------------
// Removing all records in localStorage
// localStorage.clear();

// localStorage.setItem('user', 'Hello world! TEST!');

// -------------------------------
// Get records from localStorage
// let row = localStorage.getItem('user');

// console.log(row); // Hello world! TEST!

// let obj = {
//   name: 'Alex',
//   age: 25,
//   salary: 1500,
// };

// localStorage.setItem('form', JSON.stringify(obj)); //from array or obj to JSON

// *************************** Task 1 ************************************
// Задача. Опишите две функции: writeLocalStorage(obj) и readLocalStorage(). Функции должны записывать или считывать объекты в localStorage соответственно.

// function writeLocalStorage(obj) {
//   localStorage.setItem('user', JSON.stringify(obj));
// }

// function readLocalStorage() {
//   return JSON.parse(localStorage.getItem('user')); // Making an array with JSON.parse
// }

// writeLocalStorage(['Alex', 1000, 20]);
// console.log(readLocalStorage());

// *************************** Task 2 **************************************
// 1. Создать форму, которая добавляут запись в массив и отрисовывает элемент на разметке

// 2. Связать процесс с localStorage, что бы после обновления страницы данные никуда не пропадали

// 3. Создайте кнопку, которая будет хранить тектсовое сво-во "Удалить всех пользователей" и очищать localStorage

const formElem = document.querySelector('#form_elem');
const root = document.querySelector('#root');
const divContainer = document.createElement('div');
divContainer.className = 'users_container';
root.append(divContainer);

const resetBtn = document.createElement('button');
resetBtn.className = 'reset_btn';
resetBtn.innerText = 'Delete all users';
root.before(resetBtn);

resetBtn.addEventListener('click', () => {
  localStorage.removeItem('users');
  users = [];
  render(users);
});

const storageData = JSON.parse(localStorage.getItem('users'));
let users = storageData ?? [];

render(users);

formElem.onsubmit = event => {
  event.preventDefault();
  const dataList = new FormData(event.target);
  const data = Object.fromEntries(dataList);
  users.push(data);
  localStorage.setItem('users', JSON.stringify(users));
  render(users);
  formElem.reset();
};

function render(array) {
  divContainer.innerHTML = '';
  for (let elem of array) {
    const cardDiv = document.createElement('div');
    const fullNameP = document.createElement('p');

    cardDiv.className = 'user_card';
    fullNameP.innerText = `${elem.name} ${elem.lastname}`;

    cardDiv.append(fullNameP);
    divContainer.append(cardDiv);
  }
}
