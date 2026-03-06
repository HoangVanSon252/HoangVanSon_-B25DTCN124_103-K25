let employee = [
  {
    id: 1,
    fullName: "Nguyễn Văn A",
    email: "a.nguyen@example.com",
    dob: "01/01/1995",
    positionValue: "Nhân viên",
  },
  {
    id: 2,
    fullName: "Trần Thị B",
    email: "b.nguyen@example.com",
    dob: "01/01/1996",
    positionValue: "Trưởng nhóm",
  },
  {
    id: 3,
    fullName: "Lê Văn C",
    email: "c.nguyen@example.com",
    dob: "01/01/1997",
    positionValue: "Trưởng phòng",
  },
];
let idEmployee = 1;
let isupdate = null;

let form = document.getElementById("form-employee");

let fullName = document.getElementById("fullName");
let id = document.getElementById("id");
let email = document.getElementById("email");
let dob = document.getElementById("dateOfBirth");
let positionValue = document.getElementById("position");

let errolFullName = document.getElementById("errol-fullname");
let errolEmail = document.getElementById("errol-email");
let errolDOB = document.getElementById("errol-dateOfBirth");
let errolPosition = document.getElementById("errol-position");

let formAction

let tbody = document.getElementById("tbody");
let footer = document.querySelector(".footer");

let badge = document.querySelector(".badge");
let title = document.querySelector("#maintitle");

let render = () => {
  let tr = document.createElement("tr");

  let temp = "";
  employee.forEach((e) => {
    temp += `
    <tr>
        <td>${e.id}</td>
        <td>${e.fullName}</td>
        <td>${e.email}</td>
        <td>${e.dob}</td>
        <td>${e.positionValue}</td>
        <td class="action">
            <button class="btn-edit">Sửa</button>
            <button class="btn-delete">Xóa</button>
        </td>
    </tr>
    `;
  });
  tbody.innerHTML = temp;
};
render();
