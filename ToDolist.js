let AddTask = document.querySelector(".addTaskBtn");
let inp = document.querySelector("#add_task");
let ul = document.querySelector(".task_list");

let tasks = JSON.parse(localStorage.getItem("Tasks")) || [];

AddTask.addEventListener("click", () => {
    console.log(inp.value);
    let task = inp.value.trim();

    tasks.push({text: task, done: false});

    if(task !== "") {
        inp.value = "";
    }
    SaveIntoLocalStorage(tasks);
    RenderUI();
});

function SaveIntoLocalStorage(tasks) {
    localStorage.setItem("Tasks", JSON.stringify(tasks));
}

function RenderUI() {
    ul.innerHTML = "";
    console.log(tasks);
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `
        <input type="checkbox" ${task.done ? "checked" : ""}>
        <span class="${task.done ? "line" : ""}">${task.text}</span>
        <button class="dbtn">Delete</button>`;
        ul.appendChild(li);
    });
}

ul.addEventListener("click", (e) => {

    const li = e.target.closest("li");
    if (!li) return;

    const index = Array.from(ul.children).indexOf(li);

    // CHECKBOX TOGGLE
    if (e.target.type === "checkbox") {
        tasks[index].done = e.target.checked;
    }

    // DELETE BUTTON
    if (e.target.classList.contains("dbtn")) {
        tasks.splice(index, 1);
    }

    SaveIntoLocalStorage(tasks);
    RenderUI();
});
RenderUI();