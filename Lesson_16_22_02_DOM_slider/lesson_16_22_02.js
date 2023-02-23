const rootDiv = document.querySelector('#root');

let sliderIndex = 0;

const images = [
  'https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg',
  'https://phonoteka.org/uploads/posts/2021-05/1622404546_17-phonoteka_org-p-peizazh-v-stile-piksel-art-krasivo-26.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg',
  'https://oir.mobi/uploads/posts/2021-06/1622803069_29-oir_mobi-p-peizazh-dlya-nachinayushchikh-priroda-kras-30.jpg',
  'https://static.insales-cdn.com/images/products/1/1609/213943881/lg100.jpg',
];

const frame = document.createElement('div');
frame.className = 'frame';

const cards = document.createElement('div');
cards.className = 'cards';

const triggers = document.createElement('div');
triggers.className = 'trigger';

const leftBtn = document.createElement('button');
leftBtn.innerText = '<';

const rightBtn = document.createElement('button');
rightBtn.innerText = '>';

triggers.append(leftBtn, rightBtn);

for (let elem of images) {
  const card = document.createElement('div');
  card.className = 'card';
  card.style.backgroundImage = `url(${elem})`;
  cards.append(card);
}

frame.append(cards, triggers);
rootDiv.append(frame);

function goRight() {
  if (sliderIndex < images.length - 1) {
    sliderIndex++;
    cards.style.transition = '0.5s';
  } else {
    sliderIndex = 0;
    if (sliderIndex == 0) {
      cards.style.transition = '0.02s';
    } else {
      cards.style.transition = '0.5s';
    }
  }
  cards.style.left = `${-1 * sliderIndex * 500}px`;
}
function goLeft() {
  if (sliderIndex != 0) {
    sliderIndex--;
    cards.style.transition = '0.5s';
  } else {
    sliderIndex = images.length - 1;
    if (sliderIndex == images.length - 1) {
      cards.style.transition = '0.02s';
    } else {
      cards.style.transition = '0.5s';
    }
  }
  cards.style.left = `${-1 * sliderIndex * 500}px`;
}

rightBtn.addEventListener('click', goRight);
leftBtn.addEventListener('click', goLeft);
