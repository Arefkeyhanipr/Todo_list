//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteAndDoneTodo);
filterOption.addEventListener("click", filterTodo);
document.addEventListener("DOMContentLoaded", getTodos);

// Function

function addTodo(e) {
  if (todoInput.value != "") {
    //Prevent from submiting and reloading the project
    e.preventDefault();
    //Create Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-div");
    //Append the div to the list of todos
    todoList.appendChild(todoDiv);
    //Create the LI
    const newTodoLi = document.createElement("li");
    newTodoLi.innerText = todoInput.value;
    newTodoLi.classList.add("todo-item");
    //Append the Li to the Div
    todoDiv.appendChild(newTodoLi);
    //Completed Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-button");
    //Append the Completed btn to the Div
    todoDiv.appendChild(completedButton);
    //Trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-button");
    //Append the trash btn to the Div
    todoDiv.appendChild(trashButton);
    //Add Todo To Localstorge
    saveLocalTodos(todoInput.value);
    //empty the input after adding a todo in the list
    todoInput.value = "";
  } else {
    alert("Please Enter what you want to do :)");
  }
}

function deleteAndDoneTodo(e) {
  const item = e.target;
  //Delete
  if (item.classList[0] === "trash-button") {
    const todo = item.parentElement;
    //Animation
    todo.classList.add("faid-out");
    removeLocalstorgeTodo(todo);

    todo.addEventListener("transitionend", () => {
      todo.classList.add("fall");
      todo.addEventListener("transitionend", () => todo.remove());
    });
  }

  //Completed
  if (item.classList[0] === "complete-button") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  //Check that do i already have thing in there?
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach((todo) => {
    //Create Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-div");
    //Append the div to the list of todos
    todoList.appendChild(todoDiv);
    //Create the LI
    const newTodoLi = document.createElement("li");
    newTodoLi.innerText = todo;
    newTodoLi.classList.add("todo-item");
    //Append the Li to the Div
    todoDiv.appendChild(newTodoLi);
    //Completed Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-button");
    //Append the Completed btn to the Div
    todoDiv.appendChild(completedButton);
    //Trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-button");
    //Append the trash btn to the Div
    todoDiv.appendChild(trashButton);
  });
}

function removeLocalstorgeTodo(todo) {
  //Check that do i already have thing in there?
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
