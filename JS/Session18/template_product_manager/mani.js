const products = [
  { code: "SP001", name: "Laptop Dell XPS 15", price: "25000000" },
  { code: "SP002", name: "iPhone 15 Pro Max", price: "32900000" },
  { code: "SP003", name: "Samsung Galaxy S24 Ultra", price: "28900000" },
  { code: "SP004", name: "Tai nghe AirPods Pro 2", price: "5990000" },
  { code: "SP005", name: "Bàn phím cơ Logitech MX Keys", price: "2990000" },
];

const form = document.getElementById("product-form");
const codeInput = document.getElementById("product-code");
const nameInput = document.getElementById("product-name");
const priceInput = document.getElementById("product-price");
const tBodyProduct = document.getElementById("product-tbody");

const renderProduct = (products) => {
  let productMap = products.map((product, index) => {
    return `<tr>
                <td>${index + 1}</td>
                <td>${product.code}</td>
                <td>${product.name}</td>
                <td>${Number(product.price).toLocaleString()} đ</td>
                <td>
                  <div class="action-buttons">
                    <button class="btn-edit">Sửa</button>
                    <button class="btn-delete">Xóa</button>
                  </div>
                </td>
              </tr>`;
  });
  tBodyProduct.innerHTML = productMap.join("");
};

const handleAdd = (event) => {
  if (event) event.preventDefault();

  const code = codeInput.value.trim();
  const name = nameInput.value.trim();
  const priceValue = priceInput.value.trim();
  const price = Number(priceValue);

  if (code === "") {
    alert("Mã sản phẩm không được để trống!");
    return;
  }

  const isDuplicate = products.some((p) => p.code === code);
  if (isDuplicate) {
    alert("Mã sản phẩm đã tồn tại!");
    return;
  }

  if (name === "") {
    alert("Tên sản phẩm không được để trống!");
    return;
  }
  if (name.length < 3) {
    alert("Tên sản phẩm phải có ít nhất 3 ký tự!");
    return;
  }

  if (priceValue === "") {
    alert("Giá sản phẩm không được để trống!");
    return;
  }
  if (isNaN(price) || price < 1000) {
    alert("Giá sản phẩm phải là số dương và tối thiểu 1,000 đ!");
    return;
  }

  const newProduct = {
    code: code,
    name: name,
    price: price.toString(),
  };

  products.push(newProduct);
  renderProduct(products);
  if (form) form.reset();
  alert("Thêm sản phẩm thành công!");
};

const init = () => {
  renderProduct(products);
  if (form) {
    form.addEventListener("submit", handleAdd);
  }
};

init();
