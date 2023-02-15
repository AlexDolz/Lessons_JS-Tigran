// *************************** Events **********************************

let btn = document.querySelector('.btn_elem');

// function handle() {
//   console.log(101);
// btn.removeEventListener('click', handle); // to make only one time click working
// }

// btn.addEventListener('click', handle);
// btn.addEventListener('click', () => console.log('test'));

// btn.removeEventListener('click', handle); // works
// btn.removeEventListener('click', () => console.log('test')); // will not work

// ----------- Events types mouse, cursor

// btn.addEventListener('dblclick', () => console.log('dblclick'));
// btn.addEventListener('mousedown', () => console.log('mousedown'));
// btn.addEventListener('mouseup', () => console.log('mouseup'));

// btn.addEventListener('mouseout', () => console.log('mouseout'));
// btn.addEventListener('mouseover', () => console.log('mouseover'));

// ------------ Events types keyboard

// document.body.addEventListener('keydown', () => console.log('keydown'));
// document.body.addEventListener('keyup', () => console.log('keyup'));

// **************************** Task 1 *********************************

// Задание: по нажатию на кнопку, необходимо заменить цвет с brown на darkgreen.
// При воторном нажатии необходимо вернуть старый цвет (brown)

// 1 Solution
// const container = document.querySelector('.container');

// function clickHandler() {
//   container.style.backgroundColor =
//     container.style.backgroundColor == 'darkgreen' ? 'brown' : 'darkgreen';
// }

// btn.addEventListener('click', clickHandler);

// 2 Solution
// let themeMode = true;

// function clickHandler() {
//   themeMode = !themeMode;
//   container.style.backgroundColor = themeMode ? 'brown' : 'darkgreen';
// }

// btn.addEventListener('click', clickHandler);

// ********************** object event *********************************

// document.body.addEventListener('keydown', event => {
//   console.log(event.key, 'key');
//   console.log(event.code, 'code');
//   console.log(event.keyCode, 'keycode');
// });

// document.body.addEventListener('keydown', event => {
//   console.log(event);
// });

// *************************** Task 2 **********************************

// Задание. Реализуте горячую клавишу SHIFT(любой) + кнопка L (любой регистр), которая
// заменит текстовое сво-во заголовка на дату, которая отражает текущий момент времени (HH:MM:SS)
// const title = document.querySelector('.h_text');

// document.body.addEventListener('keydown', event => {
//   let date = new Date();

//   if (event.code == 'KeyL' && event.shiftKey) {
//     title.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
//     console.log('Get hot key!');
//   }
// });

// *********************** event.target ********************************

// object event svojstvo target - kotoroje peredajot znacenije tega pri kotorom bilo soversenno sobitije
document.body.addEventListener('click', event => {
  event.target.remove();
});
