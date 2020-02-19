var Person = fetch("https://jsonplaceholder.typicode.com/comments")
  .then(response => response.json())
  .then(data => table(data));

//table body
function table(Person) {
  var tBody = document.getElementById("myTable");
  for (var i = 0; i < 5; i++) {
    var row = `<tr>
    <td>${Person[i].id}</td>
    <td>${Person[i].name}</td>
    <td>${Person[i].email}</td>
    <td>${Person[i].body}</td>
   </tr>`;
    tBody.innerHTML += row;
  }
}

for (i = 0; i < 3; i++) {
  var x = document.createElement("A");
  x.setAttribute("href", "#");
  x.id = "a1";
  var t = document.createTextNode(i + 1);
  x.appendChild(t);
  var y = document.getElementsByClassName("pagination")[0].appendChild(x);
  //console.log(y);
  x.addEventListener("click", function() {
    var index = (document.getElementById("a1").value = this.innerHTML);
    var loop_end = 5 * index;
    var loopStart = loop_end - 5;
    document.getElementsByTagName("tbody")[0].remove();
    table_Row(loopStart);
    
  });
}

// //Next Table

function table_Row(loopStart) {
  var Person = fetch(
    `https://jsonplaceholder.typicode.com/comments?_start=${loopStart}&_limit=5`
  )
    .then(response => response.json())
    .then(data2 => new_row(data2));
}
function new_row(Person) {
  console.log(Person);

  // var loopEnd = 5 * 2;
  // var loopStart = loopEnd - 5;
  var table1 = document.getElementsByTagName("table");
  var tBody = document.createElement("tbody");
  for (var i = 0; i < Person.length; i++) {
    //console.log(tBody)
    var row = `<tr>
          <td>${Person[i].id}</td>
          <td>${Person[i].name}</td>
          <td>${Person[i].email}</td>
          <td>${Person[i].body}</td>
    </tr>`;
    tBody.innerHTML += row;
    table1[0].appendChild(tBody);
  }
}
