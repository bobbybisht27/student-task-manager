const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let count = 0;

addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    taskList.appendChild(li);

    count++;
    taskCount.textContent = count;

    taskInput.value = "";
});