fetch('https://github.com/imsandip2085/ajax1/blob/master/db.json')
  .then(response => response.json())
  .then(db => console.log(db))