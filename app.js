//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteAndDoneTodo);
filterOption.addEventListener("click", filterTodo);

// Function

function addTodo(e) {
  //Prevent from submiting and reloading the project
  event.preventDefault();
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
  //empty the input after adding a todo in the list
  todoInput.value = "";
}

function deleteAndDoneTodo(e) {
  const item = e.target;
  //Delete
  if (item.classList[0] === "trash-button") {
    const todo = item.parentElement;
    //Animation
    todo.classList.add("faid-out");

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
