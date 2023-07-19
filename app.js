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
  completedButton.innerHTML = '<i class="fas fa-ckeck"></i>';
  completedButton.classList.add("compelete-button");
  //Append the Completed btn to the Div
  todoDiv.appendChild(completedButton);
  //Trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-button");
  //Append the trash btn to the Div
  todoDiv.appendChild(trashButton);
}
