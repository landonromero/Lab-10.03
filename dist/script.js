window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   const addBtn = document.querySelector("#add-btn");
   const taskInput = document.querySelector("#new-task");

   addBtn.addEventListener("click", addBtnClick);

   taskInput.addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
         addBtnClick();
      }
   });

   const doneButtons = document.querySelectorAll(".done-btn");

   for (let i = 0; i < doneButtons.length; i++) {
      doneButtons[i].addEventListener("click", removeTask);
   }
}

function addBtnClick() {
   const taskInput = document.querySelector("#new-task");
   const newTask = taskInput.value.trim();

   if (newTask !== "") {
      addTask(newTask);

      taskInput.value = "";
      taskInput.focus();
   }
}

function addTask(newTask) {
   const newLi = document.createElement("li");

   newLi.innerHTML = `<span class="task-text">${newTask}</span><button class="done-btn">&#10006;</button>`;

   const orderedList = document.querySelector("ol");
   orderedList.appendChild(newLi);

   const doneButtons = document.querySelectorAll(".done-btn");
   doneButtons[doneButtons.length - 1].addEventListener("click", removeTask);
}

function removeTask(event) {
   const taskItem = event.target.parentNode;
   const orderedList = taskItem.parentNode;

   orderedList.removeChild(taskItem);
}