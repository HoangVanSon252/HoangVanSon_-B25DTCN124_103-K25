const tasks = [
  {
    id: 1,
    name: "Quét nhà",
  },
  {
    id: 2,
    name: "Giặt quần áo",
  },
];

const taskList = document.querySelector("#taskList");
const btn = document.querySelector("#btn");
const taskInput = document.querySelector("#taskInput");

const render = (task) => {
  let taskHtml = "";

  task.forEach((el) => {
    taskHtml += `
    <li>${el.name}</li>
    `;
  });
  taskList.innerHTML = taskHtml;
};
render(tasks);

const addTask = (tasks) => {
  btn.addEventListener("click", (event) => {
    const objTask = {
      id: tasks.length + 1,
      name: taskInput.value,
    };
    tasks.push(objTask);
    render(tasks);
    taskInput.value = "";
  });
};
addTask(tasks);
