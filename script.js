let clear = document.getElementById("clearbtn");
let addtask = document.getElementById("addbtn");
let search = document.getElementById("search-task");
let taskInput = document.getElementById("task-input");
let searchInput = document.getElementById("search-task");


addtask.addEventListener("click", function () {
    let taskvalue = taskInput.value;
    let assignvalue = document.getElementById("priority").value;

    let alertmessage = "Invalid Type of Priority";
    let newtaskvalue = document.createElement("p");
    newtaskvalue.textContent = taskvalue;
    newtaskvalue.draggable = true;

    
    newtaskvalue.id = "task-" + Math.floor(Math.random() * 100000);

    
    if (assignvalue === "high") {
        newtaskvalue.className = "task high";
        document.getElementById("todo").appendChild(newtaskvalue);
    } else if (assignvalue === "medium") {
        newtaskvalue.className = "task medium";
        document.getElementById("todo").appendChild(newtaskvalue);
    } else if (assignvalue === "low") {
        newtaskvalue.className = "task low";
        document.getElementById("todo").appendChild(newtaskvalue);
    } else if (assignvalue === "In Progress") {
        newtaskvalue.className = "task";
        document.getElementById("inprogress").appendChild(newtaskvalue);
    } else {
        alert(alertmessage);
    }

    taskInput.value = "";
});


clear.addEventListener("click", function () {
    taskInput.value = '';
    document.getElementById("priority").value = '';
    searchInput.value = '';
});

// Search and filter
search.addEventListener("keyup", function () {
    let filter = searchInput.value.toUpperCase();

    let todoInput = document.getElementById("todo").getElementsByTagName("p");
    let inprogress = document.getElementById("inprogress").getElementsByTagName("p");
    let done = document.getElementById("done").getElementsByTagName("p");

    function filterTasks(tasks) {
        for (let i = 0; i < tasks.length; i++) {
            let txtValue = tasks[i].textContent || tasks[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tasks[i].style.display = "";
            } else {
                tasks[i].style.display = "none";
            }
        }
    }
    filterTasks(todoInput);
    filterTasks(inprogress);
    filterTasks(done);
});

// Drag and drop
document.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text", event.target.id);
});

document.addEventListener("dragover", function (event) {
    event.preventDefault();
});

// Drop zones
document.getElementById("todo").addEventListener("drop", function (event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    this.appendChild(document.getElementById(data));
});

document.getElementById("inprogress").addEventListener("drop", function (event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    this.appendChild(document.getElementById(data));
});

document.getElementById("done").addEventListener("drop", function (event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    this.appendChild(document.getElementById(data));
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.key === 'n') taskInput.focus();
  if (e.key === '/' && document.activeElement !== searchInput) {
    e.preventDefault();
    searchInput.focus();
  }
});
