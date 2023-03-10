let divHeader = document.querySelector('.header__wrapper');

let divContent = document.createElement('div');
divContent.className = 'content__wrapper';

divHeader.after(divContent);

for (let i = 0; i < 100; i++) {
  let divItem = document.createElement('div');
  divItem.className = 'item';
  divItem.innerText = i;
  divContent.append(divItem);
}

// window.scrollTo(0, 1000); // pri pojavlenija brauzera scrolli 0 v pravo 1000px vniz

let [p1, p2, p3, p4] = document.querySelectorAll('p');

let items = document.querySelectorAll('.item');

// p1.addEventListener('click', () => {
//   scrollTo(0, items[73].offsetTop);
// }); 1 sposob scrolla na nuznij div

p1.addEventListener('click', () => {
  items[10].scrollIntoView({ behavior: 'smooth', block: 'start' }); // cto bi plavno scrollit, 2 sposob. start s verhu snacala, end snizu navigirujetsia s konca, center v centre, nearest -samaja blizniaja tocka
});

for (let elem of items) {
  elem.addEventListener('dblclick', () => {
    divHeader.scrollIntoView({ behavior: 'smooth' });
  });
} // cto bi snavigirovatsia nazad na header, nazimaja 2 raza na content
