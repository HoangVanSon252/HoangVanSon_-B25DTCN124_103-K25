const products = [
  { id: 1, name: "Bánh Chưng", price: 150000 },
  { id: 2, name: "Giò Lụa", price: 180000 },
  { id: 3, name: "Cành Đào", price: 500000 },
  { id: 4, name: "Mứt Tết", price: 1200000 },
  { id: 5, name: "Bao lì xì", price: 25000 },
  { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];
const forMatCrentcy = (price) => {
  return price.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });
};
const producElement = document.getElementById("product-list");
const renderProdutList = (products) => {
  const productMap = products.map((el) => {
    return `
    <div class="product">
        <span>${el.name}</span>
        <span class="price">${forMatCrentcy(el.price)}</span>
        <button class="delete-btn">Xóa</button>
    </div>
  `;
  });
  producElement.innerHTML = productMap.join("");
};
renderProdutList(products);
const inputName = document.getElementById("product-name");
const inputPrice = document.getElementById("product-price");
const form = document.getElementById("product-form");
form.addEventListener("submit", (even) => {
  even.preventDefault();
  const name = inputName.value;
  const price = Number(inputPrice.value);
  addProduct(name, price);
  form.reset();
});

const addProduct = (name, price) => {
  const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1;
  const product = {
    id: newId,
    name: name,
    price: price,
  };
  products.push(product);
  renderProdutList(products);
};

const deleteProduct = (products) => {
  const btnDeleter = document.querySelectorAll(".delete-btn");
  btnDeleter.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      products.splice(index, 1);
      renderProdutList(products);
      deleteProduct(products);
    });
  });
};
deleteProduct(products);
