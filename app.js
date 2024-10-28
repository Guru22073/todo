let button = document.getElementById("button");
let input = document.getElementById("input");
let allTasks = document.getElementById("all");
let completedTasks = document.getElementById("completed");
let uncompletedTasks = document.getElementById("uncompleted");
let listContainer = document.getElementById("listContainer");

const addTask = () => {
    if (input.value === "") {
        alert("You must enter something");
    }
    else { 
        let li = document.createElement('li');
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    saveData();
}
  
button.addEventListener("click", () => addTask());
input.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    addTask();
  }
});

listContainer.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
      } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
      }
    },
);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask () {
    listContainer.innerHTML = localStorage.getItem("data");
}

allTasks.addEventListener("click", function () {
    showTask();
})

completedTasks.addEventListener("click", () => {
    let allTask = document.querySelectorAll("li");
    allTask.forEach((task) => {
        if (task.classList.contains("checked")) {
            task.style.display = "block";
        }
        else {
            task.style.display = "none";
        }
    })
});

uncompletedTasks.addEventListener("click", () => {
    let allTask = document.querySelectorAll("li");
    allTask.forEach((task) => {
        if (! task.classList.contains("checked")) {
            task.style.display = "block";
        }
        else {
            task.style.display = "none";
        }
    })
})

showTask();
