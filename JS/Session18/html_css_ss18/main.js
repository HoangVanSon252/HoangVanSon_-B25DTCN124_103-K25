let products = [
  {
    id: 1,
    name: "Kẹo cao su",
    category: "Thực phẩm",
    price: 1000,
    quantity: 20,
    description: "Ngon",
  },
  {
    id: 2,
    name: "Gucci",
    category: "Thời trang",
    price: 12000000,
    quantity: 2,
    description: "Chất",
  },
  {
    id: 3,
    name: "Ipad",
    category: "Đồ điện tử",
    price: 30000000,
    quantity: 5,
    description: "Dùng tốt",
  },
];

let nextId = 4;

let idUpdate = null;

let formTitle = document.getElementById("formTitle");
let form = document.querySelector("#productForm");

let nameInput = document.getElementById("productName");
let categoryChoice = document.querySelector("#productCategory");
let priceInput = document.getElementById("productPrice");
let quantityInput = document.querySelector(".productQuantity");
let descriptionInput = document.querySelector("#productDescription");

let btnSubmit = document.getElementById("submitBtn");
let btnCancel = document.getElementById("cancelBtn");
let btnClear = document.getElementById("clearAllBtn");

let searchInput = document.getElementById("searchInput");
let filterChoice = document.getElementById("filterCategory");

let table = document.getElementById("tableProduct");

let tableBody = document.getElementById("tbodyProduct");

let totalProduct = document.getElementById("totalProducts");
let totalValue = document.getElementById("totalValue");
let totalQuantity = document.getElementById("totalQuantity");

let init = () => {
  renderProducts(products);
};

let totalPrice = () => {
  let totalV = products.reduce((total, price) => {
    return total + price.price * price.quantity;
  }, 0);
  return totalV.toLocaleString();
};

let totalQtity = () => {
  let totalQ = products.reduce((total, product) => {
    return total + product.quantity;
  }, 0);

  return totalQ.toLocaleString();
};

let renderProducts = (list = products) => {
  let newRender = "";
  console.log(list);

  list.forEach((product) => {
    newRender += `
            <tr>
        <td>${product.id}</td>
        <td><strong>${product.name}</strong></td>
        <td>${product.category}</td>
        <td class="price">${product.price}</td>
        <td class="quantity low-stock">${product.quantity}</td>
        <td class="description">${product.description ? product.description : "Không có mô tả"}</td>
        <td>
            <div class="action-buttons">
                <button class="btn-edit" onclick="editProduct(${product.id})">
                    ✏️ Sửa
                </button>
                <button class="btn-delete" onclick="deleteProduct(${product.id})">
                    🗑️ Xóa
                </button>
            </div>
        </td>
    </tr>
        `;
  });
  tableBody.innerHTML = newRender;
  totalProduct.textContent = products.length;
  totalValue.textContent = totalPrice();
  totalQuantity.textContent = totalQtity();
};

let validateForm = (name, price, quantity) => {
  if (name === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Không được để trống!!!",
      footer: '<a href="https://wheelofnames.com/">Học lại một khóa HTML</a>',
    });
    return false;
  }

  if (price < 0 || quantity < 0) {
    alert("giá phải lớn hơn 0!!");
    return false;
  }
  return true;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = nameInput.value.trim();
  let category = categoryChoice.value;
  let price = Number(priceInput.value);
  let quantity = Number(quantityInput.value);
  let description = descriptionInput.value;

  if (!validateForm(name, price, quantity)) return;

  if (idUpdate == null) {
    console.log("hello");

    let product = {
      id: nextId++,
      name,
      category,
      price,
      quantity,
      description,
    };

    products.push(product);
    Swal.fire({
      title: "Thêm Thành công một sản phẩm",
      text: "CLick để bỏ qua!",
      icon: "success",
    });
  } else {
    let productUpdate = products.find((product) => product.id === idUpdate);
    productUpdate.name = name;
    productUpdate.price = price;
    productUpdate.quantity = quantity;
    productUpdate.category = category;
    productUpdate.description = description;
  }

  renderProducts(products);
  form.reset();
});

let deleteProduct = (id) => {
  let findId = products.find((product) => product.id === id);
  console.log(findId);

  if (!findId);

  let confirmDelete = confirm("bạn có muốn xóa không");
  if (confirmDelete) {
    products = products.filter((product) => product.id !== findId.id);
    console.log("before", products);

    renderProducts(products);
  } else {
    return;
  }
};

let editProduct = (id) => {
  let findProduct = products.find((product) => product.id === id);
  if (!findProduct) return;

  nameInput.value = findProduct.name;
  priceInput.value = findProduct.price;
  categoryChoice.value = findProduct.category;
  quantityInput.value = findProduct.quantity;
  descriptionInput.value = findProduct.description;

  formTitle.textContent = "Sửa sản phẩm";
  btnSubmit.textContent = "Cập Nhật";

  btnCancel.style.display = "inline-block";

  idUpdate = findProduct.id;
};

btnCancel.addEventListener("click", (event) => {
  form.reset();
});

const clearProduct = (products) => {
  btnClear.addEventListener("click", () => {
    if (confirm("Bạn có chắc chắn muốn xóa tất cả sản phẩm?")) {
      products = [];
      renderProducts(products);
    }
  });
};
clearProduct(products);

const searchProduct = () => {
  searchInput.addEventListener("input", (event) => {
    let keyWord = event.target.value.trim().toLowerCase();

    let filterProduct = products.filter((product) => {
      return product.name.toLowerCase().includes(keyWord);
    });
    renderProducts(filterProduct);
  });
};

const filterProductCategory = () => {
  filterChoice.addEventListener("change", (e) => {
    let selectedValue = e.target.value;

    if (selectedValue === "" || selectedValue === "Tất cả danh mục") {
      renderProducts(products);
      return;
    }
    let choice = products.filter((product) => {
      return product.category === selectedValue;
    });

    console.log("Sản phẩm đã lọc:", choice);
    renderProducts(choice);
  });
};

filterProductCategory();
searchProduct();
init();
