// ******** Creating deleting and moving elements in DOM **********

// -------------------------------
// Creating elements

// A) Element must be created
// 1. Create element (createElement)
// 2. Filling element with something (innerText, className .... id)
// 3. Inserting element into DOM

// B) Element already exist
// 1. Searching for element (querrySelector, getElementsByClassName ...)
// 2. Changing the element (moving, deleting)

// let elem = document.createElement('div');

// -------------------------------
// Filling elements with content
// elem.innerText = 'some text' only text
// elem.innerHTML = '<b>some text</b>' with structure of Tag

// --------------------------------
// Filling attributes
// elem.id = 'elem5' making id for this tag
// elem.className = 'elem5' making class for this Tag, and removing exsisting class
// elem.classList.add() - making class for this Tag, and dont remove old
// elem.classList.remove() - removing class

// --------------------------------
// Method setAttribute() - making any attribute with a value
// elem.setAttribute('href', 'https://google.com');

// removeAttribute() - deleting attribute

// append - inserting element as last child
// prepend - inserting element as first child
// before - inserting element as before brother knot (ex. div) not inside this div
// after - inserting element as after brother knot (ex. div) not inside this div

// Making classes in loop for every element
// let p = document.querySelectorAll('p');
// p.forEach((elem, ind) => (elem.className = `elem${ind + 1}`));

// ************************* Task 1 ***********************************
// 1. Создайте ul список внутри body и поместите туда 3 li элемента с текстовым сво-вом (1,2,3)

// const body = document.querySelector('body');
// const ul = document.createElement('ul');

// for (let i = 1; i <= 3; i++) {
//   const li = document.createElement('li');
//   li.innerText = i;
//   ul.append(li);
// }

// body.prepend(ul);

// ------------------------------------------
// Moving and copying already exist elements

// let pElem = document.querySelector('.p_elem');
// clone = pElem.cloneNode(true); // copying the element
// document.body.prepend(clone);

// -----------------------------------------
// Removing DOM Tag

// let pElem = document.querySelector('.p_elem');
// Removing content of Tag
// pElem.innerHTML = '';

// Removing Tag
// pElem.remove();

// Removing child
// pElem.removeChild();

// ********** Determining an existing element in DOM *******************

// firstElementChild - searching of firstChild

// lastElementChild - searching of lastChild

// nextElementSibling - searching of next brother knot

// previousElementSibling - searching of previous brother knot

// parentElement - searching of parent

// let elem = document.body.firstElementChild.firstElementChild.nextElementSibling;

// console.log(elem);

// ************************ Task 2 ************************************
// задание 1
// Сформировать содержимое li элемента в полужирный шрифт

let elem = document.body.firstElementChild.firstElementChild.lastElementChild;
console.log((elem.style.fontWeight = 'bold'));

// задание 2
// Заменить содержимое заголовка h2 на обычный текст

let elem2 = document.body.firstElementChild.nextElementSibling;
console.log((elem2.innerHTML = '<p>Post</p>'));
