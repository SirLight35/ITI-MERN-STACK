let todo = JSON.parse(localStorage.getItem("todo")) || [];

const todoINPUT = document.getElementById('todolist');
const todoScroll = document.getElementById('scroller');
const todoCount = document.querySelector('.thewhat span');

const addButton = document.getElementById("add");
const deleteButton = document.getElementById("delete");

document.addEventListener("DOMContentLoaded", function() {
  addButton.addEventListener("click", addTask);
  todoINPUT.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask();
    }
  });
  deleteButton.addEventListener("click", deleteAllTasks);
  displayTasks();
});

function addTask() {
  const newTask = todoINPUT.value.trim();
  if (newTask !== "") {
    todo.push({
      text: newTask,
      disabled: false,
    });
    saveToLocalStorage();
    todoINPUT.value = "";
    displayTasks();
  }
}

function deleteAllTasks() {
  todo = [];
  saveToLocalStorage();
  displayTasks();
}

function displayTasks() {
  todoScroll.innerHTML = "";
  todo.forEach((item, index) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("todo-container");
    taskElement.innerHTML = `
      <input type="checkbox" class="todo-checkbox" id="input-${index}" ${item.disabled ? "checked" : ""}>
      <p id="todo-${index}" class="${item.disabled ? "disabled" : ""}">${item.text}</p>
    `;
    taskElement.querySelector(".todo-checkbox").addEventListener("change", () => {
      toggleTask(index);
    });
    todoScroll.appendChild(taskElement);
  });
  updateTaskCount();
}

function toggleTask(index) {
  todo[index].disabled = !todo[index].disabled;
  saveToLocalStorage();
  displayTasks();
}

function saveToLocalStorage() {
  localStorage.setItem("todo", JSON.stringify(todo));
}

function updateTaskCount() {
  todoCount.textContent = todo.length;
}