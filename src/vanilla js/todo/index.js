const inputBox = document.getElementById('taskInput');
const addTaskButton = document.querySelector('.addNewTask');
const taskList = document.querySelector('.taskList');
const sortBtn = document.querySelector('.sortButton');

function complete() {
  this.parentNode.children[1].classList.toggle('complete');
}
function deleteTask() {
  this.parentNode.remove();
}
function addTask(e) {
  if (!inputBox.value) return;
  const neWtask = document.createElement('div');
  neWtask.classList.add('task');
  neWtask.innerHTML = ` <input type="checkbox" onchange="handleChange()">
                         <span>${inputBox.value}</span>
                         <button class="delButton">Del</button>`;
  neWtask.children[2].addEventListener('click', deleteTask);
  neWtask.children[0].addEventListener('click', complete);
  taskList.appendChild(neWtask);
  inputBox.value = '';
}

addTaskButton.addEventListener('click', addTask);
