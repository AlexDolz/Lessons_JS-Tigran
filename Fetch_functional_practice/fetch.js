// ************************ Task 1 **********************************

// Создать функцию, которая получает id пользователя и выводит в консоль данные о пользователе. Если такого пользователя нет, необходимо вызвать исключение “Такого пользователя нет”.
// Ссылка: https://jsonplaceholder.typicode.com/users/<id пользователя>

// **************************** Task 2 *******************************
// Доработать ранее созданную функцию таким образом, чтобы помимо данных о пользователе (имя и почта) выводились все посты пользователя.
// Ссылка:
// https://jsonplaceholder.typicode.com/users/<id пользователя>
// https://jsonplaceholder.typicode.com/posts?userId=<id пользователя>

// Данные должны быть в виде объекта

// {
//  user: {name, email},
//  posts: [...]
// }

const getUserById = id => {
  let url = `https://jsonplaceholder.typicode.com/users/${id}`;
  fetch(url)
    .then(res =>
      res.status == 404 ? console.log('Такого пользователя нет') : res.json()
    )
    .then(data => {
      if (data) {
        let obj = {
          users: {
            name: data.name,
            email: data.email,
          },
        };
        console.log(obj);
        let url2 = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
        fetch(url2)
          .then(res =>
            res.status == 404
              ? console.log('Такого пользователя нет')
              : res.json()
          )
          .then(data2 => (obj.posts = [...data2]));
        return obj;
      }
    });
};

getUserById(10); // {id: 10, name: 'Clementina DuBuque', username: 'Moriah.Stanton', email: 'Rey.Padberg@karina.biz', address: {…}, …}
// getUserByID(100); // Такого пользователя нет
