const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

function addTask() {
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("please enter a task!");
        return;
    }
}

const li = document.createElement("li");
li.textContent = taskText;

const doneBtn = document.createElement("button");
doneBtn.textContent = "✅"
doneBtn.classList.add("done-btn");

const deleteBtn = 
document.createElement("button");
deleteBtn.textContent = "🗑️"
deleteBtn.classList.add("delete-btn");

li.appendChild(doneBtn);
li.appendChild(deleteBtn);

list.appendChild(li);

input.value = "";

doneBtn.addEventListener("click", 
    function() {
        li.classList.toggle("completed");
    }
);

deleteBtn.addEventListener("click",
    function () {
        list.removeChild(li);
    }
);

form.addEventListener("submit",
    function(event) {
        event.preventDefault();
        addTask();
    }
);


