fetch(" https://my-json-server.typicode.com/imsandip2085/ajax1")
  .then(response => response.json())
  .then(db => console.log(db));
