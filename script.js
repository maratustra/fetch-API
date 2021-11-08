const getData = () => {
  let data = getUserData();
  sendData(data);
};

const getUserData = () => {
  let requestData = new XMLHttpRequest();
  requestData.open('GET', 'db.json');
  requestData.responseType = 'json';
  requestData.send();

  return requestData;
};

const sendData = (data) => {
  let receivedData = JSON.stringify(data);
  let sendRequest = new XMLHttpRequest();

  sendRequest.upload.onprogress = e => {
    console.log(`Sent ${e.loaded} of ${e.total}`);
  };

  sendRequest.onloadend = () => {
    if (sendRequest.status === 201) {
      console.log('Data sent');
    } else {
      console.log('Error');
    }
  };

  sendRequest.open('POST', 'https://jsonplaceholder.typicode.com/posts');
  sendRequest.setRequestHeader('Content-Type', 'application/json');
  sendRequest.send(receivedData);
};


getData();
