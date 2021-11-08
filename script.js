const getData = () => {
  getUserData()
    .then(user => sendData(user));
};

const getUserData = () => {
  return fetch('db.json')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
};

const sendData = (user) => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
  })
    .then(() => console.log("Data sent"))
    .catch(error => console.log(error));
};

getData();