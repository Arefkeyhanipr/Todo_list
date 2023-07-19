//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listener
todoButton.addEventListener("click", addTodo);

// Function

function addTodo(event) {
  //Prevent from submiting and reloading the project
  event.preventDefault();
  //Create Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-Div");
  //Create the LI
  const newTodoLi = document.createElement("li");
  newTodoLi.innerText = todoInput.value;
  newTodoLi.classList.add("todo-item");
  //Append the Li to the Div
  todoDiv.appendChild(newTodoLi);
}
