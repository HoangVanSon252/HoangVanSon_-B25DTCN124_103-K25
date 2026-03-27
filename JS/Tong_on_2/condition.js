const persion = [
  {
    id: 1,
    name: " Nguyen Van A",
    gender: "MALE",
    date: "20/3/2026",
    status: "ACTIVE",
  },
  {
    id: 2,
    name: " Nguyen Van B",
    gender: "FEMALE",
    date: "21/3/2026",
    status: "INACTIVE",
  },
  {
    id: 3,
    name: " Nguyen Van C",
    gender: "FEMALE",
    date: "22/3/2026",
    status: "ACTIVE",
  },
  {
    id: 4,
    name: " Nguyen Van D",
    gender: "MALE",
    date: "23/3/2026",
    status: "INACTIVE",
  },
];

const users = JSON.parse(localStorage.getItem("users"));
localStorage.setItem("users", JSON.stringify(users));

const tableBody = document.querySelector("#tbody");
const btnAddElement = document.querySelector("#btn-add");
const btnCloseElement = document.querySelector("#btn-close");
const form = document.querySelector("#form");
const fullName = document.querySelector("#fullname");
const dateBrithElement = document.querySelector("#date-birth");
const genderElements = document.querySelectorAll("input[name = gender]");
const statusElements = document.querySelectorAll("input[name = status]");
const btnPage = document.querySelector("#btn-page");

let genderValuue = "OTHER";
let statusValue = "INACTIVE";

genderElements.forEach((gender) => {
  gender.addEventListener("change", (event) => {
    if (event.target.checked) {
      genderValuue = gender.value;
      // console.log(gender.value);
    }
  });
});

statusElements.forEach((status) => {
  status.addEventListener("change", (event) => {
    if (event.target.checked) {
      genderValuue = status.value;
    }
  });
});

const formatDate = (formatted) => {
  return new Intl.DateTimeFormat("vi-VN").format(new Date(formatted));
};

let currentPage = 1;
const perPage = 4;

const render = () => {
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const userPage = users.slice(start, end);
  tableBody.innerHTML = userPage
    .map(
      (el, index) => `
        <tr>
            <td>${el.id}</td>
            <td>${el.name}</td>
            <td>${el.gender === "MALE" ? "Nam" : "Nữ"}</td>
            <td>${el.status === true ? "Đang hoạt động" : "Ngừng hoạt động"}</td>
            <td>${el.date}</td>
            <td>
                <button>Sửa</button>
            </td>
            <td>
                <button onclick = handleDelete(${index})>Xóa</button>
            </td>
        </tr>
    `,
    )
    .join("");
  renderPagination();
};

btnAddElement.addEventListener("click", (event) => {
  form.style.display = "block";
});

btnCloseElement.addEventListener("click", (event) => {
  form.style.display = "none";
});

//Xây dựng chức năng thêm mới
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // 1. Xây dựng dữ liệu từ form và validate

  if (fullName.value === "" || dateBrithElement.value === "") {
    alert("Khong duoc de trong");
  } else {
    // console.log(fullName.value);
    // console.log(genderValuue);
    // console.log(statusValue);
    // console.log(dateBrithElement.value);
    const newId =
      users.length > 0 ? Math.max(...users.map((el) => el.id)) + 1 : 1;
    const newPertion = {
      id: newId,
      name: fullName.value,
      gender: genderValuue,
      status: statusValue,
      date: formatDate(dateBrithElement.value),
    };
    users.push(newPertion);
    form.reset();
    form.style.display = "none";
    localStorage.setItem("users", JSON.stringify(users));
    render();
  }
});

//2.

function handleDelete(index) {
  const isComfirm = confirm("Bạn có xác nhận muốn xóa không");
  if (isComfirm) {
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    render();
  }
}

const renderPagination = () => {
  const totalPage = Math.ceil(users.length / perPage);
  let btnHtml = "";
  for (let i = 1; i <= totalPage; i++) {
    btnHtml += `<button onclick="changePage(${i})" 
                style="${i === currentPage ? "background:orange" : ""}">
                ${i}</button>`;
  }
  btnPage.innerHTML = btnHtml;
};
function changePage(page) {
  currentPage = page;
  render();
}
render();
