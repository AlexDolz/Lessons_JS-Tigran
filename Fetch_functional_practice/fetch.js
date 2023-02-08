// ************************ Task 1 **********************************

// Создать функцию, которая получает id пользователя и выводит в консоль данные о пользователе. Если такого пользователя нет, необходимо вызвать исключение “Такого пользователя нет”.
// Ссылка: https://jsonplaceholder.typicode.com/users/<id пользователя>

// const getUserById = id => {
//   let url = `https://jsonplaceholder.typicode.com/users/${id}`;
//   fetch(url).then(res =>
//     res.status == 404 ? console.log('Такого пользователя нет') : res.json()
//   );
// };

// getUserById(10); // {id: 10, name: 'Clementina DuBuque', username: 'Moriah.Stanton', email: 'Rey.Padberg@karina.biz', address: {…}, …}
// getUserByID(100); // Такого пользователя нет

// **************************** Task 2 *******************************
// Доработать ранее созданную функцию таким образом, чтобы помимо данных о пользователе (имя и почта) выводились все посты пользователя.
// Ссылка:
// https://jsonplaceholder.typicode.com/users/<id пользователя>
// https://jsonplaceholder.typicode.com/posts?userId=<id пользователя>

// Данные должны быть в виде объекта

const getUserById = id => {
  let urlUser = `https://jsonplaceholder.typicode.com/users/${id}`;
  let urlPost = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
  fetch(urlUser)
    .then(res =>
      res.status == 404 ? console.log('Такого пользователя нет') : res.json()
    )
    .then(data => {
      if (data) {
        let userPosts = {
          user: { name: data.name, email: data.email },
          posts: [],
        };
        fetch(urlPost)
          .then(res => res.json())
          .then(data => {
            userPosts.posts = [...data];
            render(userPosts);
          });
      }
    });
};

getUserById(5);
getUserById(10);
getUserById(1);

// 2 Solution async await

// async function getUserById(id) {
//   let urlUser = `https://jsonplaceholder.typicode.com/users/${id}`;
//   let urlPost = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;

//   let resUser = await fetch(urlUser);
//   if (resUser == 404) {
//     console.log('Такого пользователя нет');
//     return;
//   }
//   let dataUser = await resUser.json();

//   let dataPosts = await fetch(urlPost).then(res => res.json());
//   console.log(dataUser);

//   let userPosts = {
//     user: { name: dataUser.name, email: dataUser.email },
//     posts: [...dataPosts],
//   };
//   console.log(userPosts);
// }

// getUserById(1);

// *************************** Task 3 *******************************
// Создать функцию, которая генерирует div с данными о пользователе и всеми его постами. Возвращаемая карточка должна иметь следующую структуру.

// <div class=”user-container”>
//  <div class=”user”>
//   <p>Имя пользователя</p>
//   <p>Почта пользователя</p>
//  </div>
//  <div class=”posts”>
//   <div class=”item”>
//    <p>Название поста</p>
//    <p>Текст поста</p>
//   </div>
//   <div class=”item”>
//    <p>Название поста</p>
//    <p>Текст поста</p>
//   </div>
//   ….….
//  </div>
// </div>

function render(obj) {
  const rootDiv = document.querySelector('#root');

  // making container
  const containerDiv = document.createElement('div');
  containerDiv.classList.add('user-container');
  rootDiv.append(containerDiv);

  // making div with user
  const userDiv = document.createElement('div');
  userDiv.classList.add('user');
  containerDiv.append(userDiv);

  // filling div with data
  Object.values(obj.user).forEach(elem => {
    const pElem = document.createElement('p');
    pElem.innerText = elem;
    userDiv.append(pElem);
  });

  // making div with posts
  const postsDiv = document.createElement('div');
  postsDiv.classList.add('posts');
  containerDiv.append(postsDiv);

  // filling posts
  obj.posts.forEach(elem => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    postsDiv.append(itemDiv);

    const h3ElemTitle = document.createElement('h3');
    const pElemText = document.createElement('p');

    h3ElemTitle.innerText = elem.title;
    pElemText.innerText = elem.body;

    itemDiv.append(h3ElemTitle, pElemText);
  });
}
