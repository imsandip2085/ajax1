var Person = fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())
.then(data => table(data))
.then(data1 => New_table(data1))

//table body
function table(Person){
  var tBody = document.getElementById('myTable');
  for(var i = 0 ; i< 5; i++){
   var row = `<tr>
    <td>${Person[i].id}</td>
    <td>${Person[i].name}</td>
    <td>${Person[i].email}</td>
    <td>${Person[i].body}</td>
   </tr>`
   tBody.innerHTML+= row;
   //window.location.reload(5);
  }
}
// New table
function New_table(Person){
  var tBody = document.getElementById('myTable');
  for(var j= 5; j< 10; j++){
    var row = `<tr>
    <td>${Person[j].id}</td>
    <td>${Person[j].name}</td>
    <td>${Person[j].email}</td>
    <td>${Person[j].body}</td>
   </tr>`
   tBody.innerHTML+= row;
  }
}
 var changeInterval =  setInterval(
  function cal(){
    document.getElementsByTagName("tbody")[0].remove();
    New_table(Person);
  },5000
)
