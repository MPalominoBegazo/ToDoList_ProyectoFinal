
function Tareas(title) {
  this.userId = 1
  this.title = title;
  this.completed = false;

}

function ToDoList() {
  this.arrDatos = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": false
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "userId": 1,
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "userId": 1,
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": false
    },
    {
      "userId": 1,
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 10,
      "title": "illo est ratione doloremque quia maiores aut",
      "completed": false
    }
  ];
  this.add = function (tareas) {
    this.arrDatos.push(tareas);
  }
  this.isChecked = function (event) {
    if (event.target.tagName === 'LI') {
      event.target.classList.toggle('checked');
    }

  }
  this.mostrar = function (content) {
    var newLi = document.createElement('li');
    var checkBox = cb = document.createElement("input");
    cb.type = "checkbox";
    cb.id = "c1";
    cb.value = content;
    cb.checked = false;

    newLi.appendChild(cb);

    var text = document.createTextNode(content);
    newLi.appendChild(text);

    var ul = document.getElementById("lista");
    ul.appendChild(newLi).contentEditable = true;


  }
}

var list = new ToDoList();


listar();
listas();
var btnAdd = document.getElementById("btnActivity");
btnAdd.onclick = function add() {
  var content = document.getElementById("Activity").value;
  list.mostrar(content);
  list.add(new Tareas(content));
  listas();
  return false;
}


function listar() {
  for (var i in list.arrDatos) {
    datos = list.arrDatos[i];
    list.mostrar(datos.title);
  }
}


function listas() {
  var listas = document.getElementsByTagName("li");
  for (var i in listas) {
    listas[i].onclick = function (event) {
      list.isChecked(event);
    }
    console.log(listas);
  }
}
