const menu = document.querySelector('.menu');
const content = document.querySelector('.content');

menu.addEventListener('click', () => openMenu());

let setModal = false;

function openMenu() {
  if (!setModal) {
    let menuElems = ['Home', 'About', 'Contacts', 'Q&A', 'Auth'];
    const modalDiv = document.createElement('div');
    modalDiv.className = 'modal';

    for (let elem of menuElems) {
      const pELem = document.createElement('p');
      pELem.innerText = elem;
      modalDiv.append(pELem);
    }
    const [spanELem1, spanELem2, spanELem3] =
      document.querySelectorAll('.line');
    spanELem1.style.position = 'absolute';
    spanELem1.style.transform = 'rotate(45deg)';
    spanELem2.style.position = 'absolute';
    spanELem2.style.transform = 'rotate(315deg)';
    spanELem3.style.position = 'absolute';
    spanELem3.style.transform = 'rotate(315deg)';

    content.after(modalDiv);
  } else {
    const [spanELem1, spanELem2, spanELem3] =
      document.querySelectorAll('.line');
    spanELem1.style.position = 'static';
    spanELem1.style.transform = 'none';
    spanELem2.style.position = 'static';
    spanELem2.style.transform = 'none';
    spanELem3.style.position = 'static';
    spanELem3.style.transform = 'none';
    const modal = document.querySelector('.modal');
    modal.remove();
  }
  setModal = !setModal;
}
