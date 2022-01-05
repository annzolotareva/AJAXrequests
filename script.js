const getData = ({ url }) => {
  return fetch(url).then((response) => response.json());
};

const sendData = ({ url, data = {} }) => {
  return fetch(url, {
    method: "POST",
    body: data,
    headers: {
      "Content-type": "multipart/form-data",
    },
  }).then((response) => response.json());
};

getData({
  url: "db.json",
})
  .then((data) => {
    sendData({
      url: "https://jsonplaceholder.typicode.com/posts",
      data: JSON.stringify(data),
    });
  })
  .catch((error) => {
    console.log(error);
  });
