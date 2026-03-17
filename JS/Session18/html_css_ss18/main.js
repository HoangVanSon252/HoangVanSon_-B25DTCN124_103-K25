let products = [
  {
    id: 1,
    name: "Kẹo cao su",
    category: "Thực phẩm",
    price: 1000,
    quantity: 20,
    dicription: null,
  },
  {
    id: 2,
    name: "Bim Bim",
    category: "Thực phẩm",
    price: 10000,
    quantity: 100,
    dicription: null,
  },
  {
    id: 3,
    name: "Áo đại bàng",
    category: "Thời trang",
    price: 1000000,
    quantity: 30,
    dicription: null,
  },
];

let nexId = 4;
let idUpdate = null;
let formTitle = document.getElementById("formTitle");
let form = document.querySelector("#productForm");
let nameInput = document.getElementById("productName");
let categoryChoice = document.getElementById("productCategory");
let priceInput = document.getElementById("productPrice");
let quantityInput = document.getElementById("productQuantity");
let decriptionInput = document.getElementById("productDescription");

let btnSubmit = document.getElementById("submitBtn");
let btnCancel = document.getElementById("cancelBtns");
let btnClear = document.getElementById("clearAllBtn");

let searchInput = document.getElementById("searchInput");
let filterChoice = document.getElementById("filterCategory");

let tableBody = document.getElementById("tbodyProduct");
let totalProducts = document.getElementById("totalProducts");
let totalValue = document.getElementById("totalValue");
let totalQuantity = document.getElementById("totalQuantity");

let init = () => {
  renderProduct();
};

let renderProduct = () => {
  let newRender = "";
  products.forEach((product) => {
    newRender += `
        <tr>
        <td>1</td>
        <td><strong>${product.name}</strong></td>
        <td>Thời trang</td>
        <td class="price">${product.price}</td>
        <td class="quantity ">${product.quantity}</td>
        <td class="description">${product.dicription ? product.dicription : "Nhập mô tả sản phẩm"}</td>
        <td>
            <div class="action-buttons">
                <button class="btn-edit" onclick="editProduct(${product.id})" fdprocessedid="itsi3y">
                    ✏️ Sửa
                </button>
                <button class="btn-delete" onclick="deleteProduct(${product.id})" fdprocessedid="pklaas">
                    🗑️ Xóa
                </button>
            </div>
        </td>
    </tr>`;
  });
  tableBody.innerHTML = newRender;
};

init();

let valiDate = (name, price, quantity) => {
  if (name === "" || price === "" || quantity === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
    return false;
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = nameInput.value.trim();
  let catagory = categoryChoice.value;
  let price = Number(priceInput.value);
  let name = nameInput.value.trim();
  let name = nameInput.value.trim();
});
