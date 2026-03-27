const staffs = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    date: "12/05/1990",
    email: "an.nguyen@company.vn",
    address: "12 Lý Thường Kiệt, Hoàn Kiếm, Hà Nội",
  },
  {
    id: 2,
    name: "Trần Thị Bích",
    date: "23/08/1995",
    email: "bich.tran@company.vn",
    address: "45 Nguyễn Huệ, Quận 1, TP. HCM",
  },
  {
    id: 3,
    name: "Lê Minh Cường",
    date: "03/11/1988",
    email: "cuong.le@company.vn",
    address: "78 Trần Phú, Hải Châu, Đà Nẵng",
  },
  {
    id: 4,
    name: "Phạm Thị Dung",
    date: "17/02/1993",
    email: "dung.pham@company.vn",
    address: "23 Lê Lợi, Vũng Tàu",
  },
  {
    id: 5,
    name: "Hoàng Văn Em",
    date: "09/07/1997",
    email: "em.hoang@company.vn",
    address: "56 Điện Biên Phủ, Bình Thạnh, TP. HCM",
  },
  {
    id: 6,
    name: "Vũ Thị Phương",
    date: "30/12/1991",
    email: "phuong.vu@company.vn",
    address: "9 Pasteur, Quận 3, TP. HCM",
  },
  {
    id: 7,
    name: "Đặng Quang Huy",
    date: "14/04/1999",
    email: "huy.dang@company.vn",
    address: "34 Lê Văn Lương, Thanh Xuân, Hà Nội",
  },
];

const listStaff = JSON.parse(localStorage.getItem("Staffs") || []);
localStorage.setItem("Staffs", JSON.stringify(listStaff));

const tableBody = document.getElementById("tableBody");

const inputName = document.getElementById("inputName");
const inputDob = document.getElementById("inputDob");
const inputEmail = document.getElementById("inputEmail");
const inputAddress = document.getElementById("inputAddress");
const btnSubmit = document.getElementById("btnSubmit");
const listCount = document.getElementById("listCount");
const searchInput = document.getElementById("searchInput");
let editId = null;

const addStaff = () => {
  btnSubmit.addEventListener("click", () => {
    if (editId !== null) {
      const index = listStaff.findIndex((s) => s.id === editId);
      listStaff[index] = {
        ...listStaff[index],
        name: inputName.value,
        date: inputDob.value,
        email: inputEmail.value,
        address: inputAddress.value,
      };
      if (
        inputName.value === "" ||
        inputDob.value === "" ||
        inputEmail.value === ""
      ) {
        Swal.fire({
          icon: "error",
          title: "Không đc để trống",
        });
        return;
      }
      editId = null;
      btnSubmit.textContent = "Thêm nhân viên";
    } else {
      if (
        inputName.value === "" ||
        inputDob.value === "" ||
        inputEmail.value === ""
      ) {
        Swal.fire({
          icon: "error",
          title: "Không đc để trống",
        });
        return;
      }
      const newId =
        listStaff.length > 0
          ? Math.max(...listStaff.map((el) => el.id)) + 1
          : 1;
      const newStaff = {
        id: newId,
        name: inputName.value,
        date: inputDob.value,
        email: inputEmail.value,
        address: inputAddress.value,
      };
      listStaff.push(newStaff);
      Swal.fire({
        title: "Drag me!",
        icon: "success",
        draggable: true,
      });
    }

    localStorage.setItem("Staffs", JSON.stringify(listStaff));
    render();

    inputName.value = "";
    inputDob.value = "";
    inputAddress.value = "";
    inputEmail.value = "";
  });
};
addStaff();
const render = (fillter = "") => {
  tableBody.innerHTML = listStaff
    .map(
      (staff, index) => `
        <tr id="row-NVMN2GOVDBY3X">
                <td>${index + 1}</td>
                <td class="td-name">${staff.name}</td>
                <td>${staff.date}</td>
                <td class="td-email">${staff.email}</td>
                <td>${staff.address}</td>
                <td>
                  <div class="td-actions">
                    <button class="btn btn-sm btn-edit" onclick =" handleEdit(${staff.id})">✏ Sửa</button>
                    <button class="btn btn-sm btn-delete"onclick =" handleDelete(${staff.id}, ${index})">✕ Xóa</button>
                  </div>
                </td>
              </tr>
        `,
    )
    .join("");
  listCount.textContent = `${listStaff.length} kết quả`;
};

const handleEdit = (id) => {
  const staff = listStaff.find((el) => el.id === id);
  if (staff) {
    inputName.value = staff.name;
    inputDob.value = staff.date;
    inputAddress.value = staff.address;
    inputEmail.value = staff.email;

    editId = id;
    btnSubmit.textContent = "Cập nhật nhân viên";
  }
};
const handleDelete = (id, index) => {
  const isComfirm = confirm("Bạn có xác nhận muốn xóa không");
  if (isComfirm) {
    listStaff.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(listStaff));
    render();
  }
};

const search = () => {
  searchInput;
};
render();
