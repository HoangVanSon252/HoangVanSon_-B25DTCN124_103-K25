const employeeList = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "a.nguyen@example.com",
    date: "01/01/1995",
    position: "Nhân viên",
  },
  {
    id: 2,
    name: "Trần Thị B",
    email: "b.nguyen@example.com",
    date: "12/03/1993",
    position: "Trưởng nhóm",
  },
  {
    id: 3,
    name: "Lê Văn C",
    email: "c.nguyen@example.com",
    date: "20/07/1990",
    position: "Trưởng phòng",
  },
];

const table = document.getElementById("table");
const inputName = document.querySelector("#fullName");
const inputEmail = document.querySelector("#email");
const inputDate = document.querySelector("#dateOfBirth");
const inputPosition = document.querySelector("#position");
const btnAdd = document.querySelector("#btn-add");
const btnDelete = document.querySelector(".btn-delete");
const btnReset = document.querySelector("#btn-reset");
const total = document.querySelector(".footer");
let currentEditId = null;

// 1. Render Table
const render = (list) => {
  table.innerHTML = list
    .map(
      (e, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${e.name}</td>
      <td>${e.email}</td>
      <td>${e.date}</td>
      <td>${e.position}</td>
      <td>
        <button class="btn-edit btn" data-id="${e.id}">Sửa</button>
        <button class="btn-delete btn " data-id="${e.id}">Xóa</button>
      </td>
    </tr>
  `,
    )
    .join("");

  total.innerHTML = `
    <span>Tổng số nhân viên: ${list.length}</span>
    `;
};

// 2. Định dạng ngày
const formatDate = (dateStr) => {
  const regex = /^(\d{4})-(\d{2})-(\d{2})$/;
  return dateStr.replace(regex, "$3/$2/$1");
};

// 3. Hàm hiển thị lỗi vào thẻ span kế tiếp
const showError = (inputElement, message) => {
  const errorSpan = inputElement.parentElement.querySelector(".err-mess");
  if (errorSpan) {
    errorSpan.innerText = message;
    errorSpan.style.color = "red";
    errorSpan.style.fontSize = "12px";
  }
};

// 4. Hàm xóa sạch lỗi cũ
const clearErrors = () => {
  const spans = document.querySelectorAll(".form-group .err-mess");
  spans.forEach((span) => (span.innerText = ""));
};

// 5. Logic Validate
const validateForm = () => {
  clearErrors();
  let isValid = true;

  // Validate Name
  if (!inputName.value.trim()) {
    showError(inputName, "Họ và tên không được để trống");
    isValid = false;
  } else if (!isNaN(inputName.value)) {
    showError(inputName, "Họ tên không được là số");
    isValid = false;
  }

  // Validate Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!inputEmail.value.trim()) {
    showError(inputEmail, "Email không được để trống");
    isValid = false;
  } else if (!emailRegex.test(inputEmail.value)) {
    showError(inputEmail, "Email không hợp lệ");
    isValid = false;
  }

  // Validate Date
  if (!inputDate.value) {
    showError(inputDate, "Ngày sinh không được để trống");
    isValid = false;
  }

  // Validate Position
  if (!inputPosition.value) {
    showError(inputPosition, "Chức vụ không được để trống");
    isValid = false;
  }

  return isValid;
};

// 6. Xử lý thêm nhân viên
const handleAddEmployee = () => {
  // Logic khi bấm nút Reset / Hủy
  btnReset.addEventListener("click", (event) => {
    clearErrors();
    // Trả form về trạng thái Thêm mới
    btnAdd.innerText = "Thêm mới";
    btnReset.innerText = "Làm mới";
  });

  // Logic khi bấm nút Thêm / Cập nhật
  btnAdd.addEventListener("click", (event) => {
    event.preventDefault();

    if (validateForm()) {
      if (currentEditId !== null) {
        // --- TRẠNG THÁI 1: ĐANG SỬA (UPDATE) ---
        const indexId = employeeList.findIndex((e) => e.id === currentEditId);
        if (indexId !== -1) {
          employeeList[indexId].name = inputName.value.trim();
          employeeList[indexId].email = inputEmail.value.trim();
          employeeList[indexId].date = formatDate(inputDate.value);
          employeeList[indexId].position = inputPosition.value;
        }

        // Sửa xong thì trả form về trạng thái Thêm mới
        btnAdd.innerText = "Thêm mới";
        btnReset.innerText = "Làm mới";
        currentEditId = null;
      } else {
        // --- TRẠNG THÁI 2: THÊM MỚI (ADD) ---
        const newEmployee = {
          id: Date.now(),
          name: inputName.value.trim(),
          email: inputEmail.value.trim(),
          date: formatDate(inputDate.value),
          position: inputPosition.value,
        };
        employeeList.push(newEmployee);
      }

      // Xử lý chung sau khi Thêm hoặc Sửa xong:
      render(employeeList); // Vẽ lại bảng
      [inputName, inputEmail, inputDate, inputPosition].forEach(
        (i) => (i.value = ""),
      ); // Reset input
      clearErrors();
    }
  });
};

render(employeeList);
handleAddEmployee();

const handleDeleteEmployee = (list) => {
  table.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-delete")) {
      const idDelete = Number(event.target.dataset.id);
      const indexId = list.findIndex((index) => {
        return index.id === idDelete;
      });

      if (indexId !== -1) {
        if (confirm("Bạn có chắc chắn muốn xóa không?")) {
          list.splice(indexId, 1);
          render(list);
        }
      }
    }
  });
};

handleDeleteEmployee(employeeList);

const handleEditEmployee = (list) => {
  table.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.classList.contains("btn-edit")) {
      const idEdit = Number(event.target.dataset.id);
      const indexId = list.findIndex((index) => index.id === idEdit);

      if (indexId !== -1) {
        // 1. Đổ dữ liệu lên form
        inputName.value = list[indexId].name;
        inputEmail.value = list[indexId].email;
        const dateString = list[indexId].date;
        const dateParts = dateString.split("/");
        if (dateParts.length === 3) {
          inputDate.value = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
        }
        inputPosition.value = list[indexId].position;

        // 2. Đổi giao diện nút bấm
        btnAdd.innerText = "Cập nhật";
        btnReset.innerText = "Hủy";

        // 3. ĐÁNH DẤU ID ĐANG ĐƯỢC SỬA
        currentEditId = idEdit;
      }
    }
  });
};
handleEditEmployee(employeeList);
