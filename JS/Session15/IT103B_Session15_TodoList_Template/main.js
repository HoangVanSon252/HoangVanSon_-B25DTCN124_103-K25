const todos = [];

const btnInput = document.querySelector("#addBtn");
const inputForm = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const totalCount = document.querySelector("#totalCount");
const footerTask = document.querySelector(".footer");
const taskCheckBox = document.querySelector(".task-checkbox");
let editingIndex = -1;
const renderTaskList = (todos) => {
  taskList.innerHTML = todos
    .map((item, index) => {
      // Chỉ tạo class này khi task hoàn thành
      const textClass = item.isCompleted ? "completed-text" : "";
      const opaity = item.isCompleted ? 'style="opacity: 0.5;"' : "";
      if (index === editingIndex) {
        return `
        <div class="task-item"${opaity}>
            <input type="checkbox" class="task-checkbox" ${item.isCompleted ? "checked" : ""} onclick="checkBoxTask(${index})"/>
            <input type="text" id="edit-input" value="${item.nameTask}" />
            <button class="btn-save" data-index="${index}">💾 Lưu</button>
            <button class="btn-cancel">❌ Hủy</button>
        </div>`;
      }

      return `
        <div class="task-item" data-id="${index}" ${opaity}>
            <input type="checkbox" class="task-checkbox" ${item.isCompleted ? "checked" : ""} onclick="checkBoxTask(${index})"/>
            <span class="task-text ${textClass}">${item.nameTask}</span>
            <div class="task-actions">
                <button class="btn-edit" data-index="${index}">✏️ Sửa</button>
                <button class="btn-delete" data-index="${index}">🗑️ Xóa</button>
            </div>
        </div>`;
    })
    .join("");
};
taskList.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  const index = parseInt(btn.dataset.index);

  // 1. XÓA
  if (e.target.classList.contains("btn-delete")) {
    todos.splice(index, 1);
    renderTaskList(todos);
    renderFooter(todos);
  }

  // 2. SỬA (Chuyển sang chế độ edit)
  if (e.target.classList.contains("btn-edit")) {
    editingIndex = index;
    renderTaskList(todos);

    // Tìm ô input vừa được tạo ra và focus vào nó
    const editInput = document.getElementById("edit-input");
    if (editInput) editInput.focus();
  }

  // 3. HỦY SỬA
  if (e.target.classList.contains("btn-cancel")) {
    editingIndex = -1;
    renderTaskList(todos);
  }

  // 4. LƯU
  if (e.target.classList.contains("btn-save")) {
    const newName = document.getElementById("edit-input").value;
    todos[index].nameTask = newName;
    editingIndex = -1;
    renderTaskList(todos);
  }
});
const renderFooter = (todos) => {
  const count = todos.filter((t) => t.isCompleted).length;
  const allCompleted =
    todos.length > 0 && todos.every((t) => t.isCompleted === true);
  let footer = "";
  footer += `
     <div class="task-counter">
          <span id="completedCount">${count}</span> /
          <span id="totalCount">${todos.length}</span> công việc hoàn thành
            
        </div>
        <div id = "status" style="display: ${allCompleted ? "block" : "none"}">
            ✅ Hoàn Thành Tất cả!
        </div>
    `;
  footerTask.innerHTML = footer;
};
renderFooter(todos);
function addTask() {
  const task = inputForm.value.trim();
  if (task !== "") {
    const objTask = {
      nameTask: task,
      isCompleted: false,
    };
    todos.push(objTask);
    renderTaskList(todos);
    renderFooter(todos);
    console.log("Đã thêm:", todos);
    inputForm.value = "";
  } else {
    alert("Vui lòng nhập tên công việc!");
  }
}
btnInput.addEventListener("click", addTask);
inputForm.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
const checkBoxTask = (index) => {
  todos[index].isCompleted = !todos[index].isCompleted;
  //   const taskItems = document.querySelectorAll(".task-item");
  //   const taskText = taskItems[index].querySelector(".task-text");
  //   if (todos[index].isCompleted) {
  //     taskItems[index].style.opacity = "0.5";
  //     taskText.style.textDecoration = "line-through";
  //   } else {
  //     taskItems[index].style.opacity = "1";
  //     taskText.style.textDecoration = "none";
  //   }
  renderTaskList(todos);
  renderFooter(todos);
};
