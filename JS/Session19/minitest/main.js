let contacts = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    phone: "0901234567",
    email: "nguyenvanan@email.com",
  },
  {
    id: 2,
    name: "Trần Thị Bình",
    phone: "0912345678",
    email: "tranthibinh@email.com",
  },
  {
    id: 3,
    name: "Lê Văn Cường",
    phone: "0923456789",
    email: "levancuong@email.com",
  },
  {
    id: 4,
    name: "Phạm Thị Dung",
    phone: "0934567890",
    email: "phamthidung@email.com",
  },
  {
    id: 5,
    name: "Hoàng Văn Em",
    phone: "0945678901",
    email: "hoangvanem@email.com",
  },
];

let editId = null;

const tBody = document.getElementById("contact-tbody");
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("contact-name");
const phoneInput = document.getElementById("contact-phone");
const emailInput = document.getElementById("contact-email");
const btnSubmit = form.querySelector("button[type='submit']");

const render = () => {
  const contactEl = contacts
    .map((contact, index) => {
      return `
    <tr>
      <td>${index + 1}</td>
      <td>${contact.name}</td>
      <td>${contact.phone}</td>
      <td>${contact.email}</td>
      <td>
        <div class="action-buttons">
          <button class="btn-edit" onclick="handleEdit(${contact.id})">Sửa</button>
          <button class="btn-delete" onclick="handleDelete(${contact.id})">Xóa</button>
        </div>
      </td>
    </tr>`;
    })
    .join("");
  tBody.innerHTML = contactEl;
};
const handleDelete = (id) => {
  if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
    contacts = contacts.filter((c) => c.id !== id);
    alert("Xóa sản phẩm thành công!");
    render();
  }
};
const handleEdit = (id) => {
  const contact = contacts.find((c) => c.id === id);
  if (contact) {
    nameInput.value = contact.name;
    phoneInput.value = contact.phone;
    emailInput.value = contact.email;

    editId = id;
    btnSubmit.innerText = "Cập nhật";
    btnSubmit.classList.add("btn-update");
  }
};
form.onsubmit = (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const email = emailInput.value.trim();

  if (!name) return alert("Họ tên không được để trống!");
  if (name.length < 3) return alert("Họ tên phải có ít nhất 3 ký tự!");

  if (!phone) return alert("Số điện thoại không được để trống!");
  if (isNaN(phone) || phone.length < 10)
    return alert("Số điện thoại không hợp lệ!");

  if (!email) return alert("Email không được để trống!");
  if (editId) {
    contacts = contacts.map((c) =>
      c.id === editId ? { ...c, name, phone, email } : c,
    );
    alert("Cập nhật sản phẩm thành công!");
    editId = null;
    btnSubmit.innerText = "Thêm";
  } else {
    const newContact = {
      id: Date.now(),
      name,
      phone,
      email,
    };
    contacts.push(newContact);
    alert("Thêm sản phẩm thành công!");
  }

  form.reset();
  render();
};
render();
