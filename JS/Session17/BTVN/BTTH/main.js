const products = [
  { id: 1, name: "Bánh Chưng", price: 150000, img: "./img/banhchung.webp" },

  { id: 2, name: "Giò Lụa", price: 180000, img: "./img/giolua.jpg" },

  { id: 3, name: "Cành Đào", price: 500000, img: "./img/canhdao.webp" },

  { id: 4, name: "Mứt Tết", price: 120000, img: "./img/muttet.webp" },

  { id: 5, name: "Lì Xì (Tệp)", price: 20000, img: "./img/lixi.webp" },

  { id: 6, name: "Dưa Hấu", price: 60000, img: "./img/duahau.jpg" },
];
const carts = JSON.parse(localStorage.getItem("carts")) || [];
localStorage.setItem("products", JSON.stringify(products));

const productList = document.querySelector("#product-list");

const forMatPrie = (price) => {
  return (price = price.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  }));
};
let listProducts = JSON.parse(localStorage.getItem("products"));

const renderProducs = () => {
  if (Array.isArray(listProducts)) {
    const productMap = listProducts
      .map((product) => {
        return `<div class="product-card">
                    <img src="${product.img}" alt="">
                    <h3>${product.name}</h3>
                    <p class="price">${forMatPrie(product.price)}</p>
                    <button onclick = "handleAddProduct(${product.id})" class="btn-add" id="btn-add-${product.id}">Thêm vào giỏ</button>
                </div>
                `;
      })
      .join();
    productList.innerHTML = productMap;
  }
};
renderProducs();
const btnAddElement = document.querySelector(".btn-add");
const cartListElement = document.querySelector("#cart-list");
let listCart = JSON.parse(localStorage.getItem("carts"));
const rendercart = (listCart) => {
  if (Array.isArray(listCart)) {
    if (listCart.length === 0) {
      cartListElement.innerHTML = `<li class="empty-msg">Chưa có món nào...</li>`;
      return;
    }
    const elementMaps = listCart.map((cart, index) => {
      return `<li>
                <span class="cart-item-name">${cart.product.name}</span>
                <div>
                    <span class="cart-item-price">${cart.product.price}</span>
                    <button class="btn-remove" onclick = "handleDelete(${cart.product.id})">X</button>
                </div>
            </li>`;
    });
    const elementConverted = elementMaps.join("");
    cartListElement.innerHTML = elementConverted;
  }
};
rendercart(listCart);

const handleAddProduct = (id) => {
  const index = carts.findIndex((indexId) => {
    return indexId.product.id === id;
  });
  if (index === -1) {
    const findProduct = listProducts.find((cart) => cart.id === id);

    if (findProduct) {
      const newCart = {
        id: carts.length + 1,
        product: findProduct,
        quantity: 1,
      };
      carts.push(newCart);
      localStorage.setItem("carts", JSON.stringify(carts));
      rendercart(carts);
      renderTotalPrice(listCart);
    }
  }
};

const handleDelete = (id) => {
  const indexFind = listCart.findIndex((item) => item.product.id === id);
  if (indexFind !== -1) {
    carts.splice(indexFind, 1);
    localStorage.setItem("carts", JSON.stringify(carts));
    rendercart(carts);
    renderTotalPrice(listCart);
  }
};
const renderTotalPrice = (listCart) => {
  listCart = JSON.parse(localStorage.getItem("carts"));
  const totalPriceElement = document.getElementById("total-price");

  // Kiểm tra nếu giỏ hàng trống hoặc không phải mảng
  if (!Array.isArray(listCart) || listCart.length === 0) {
    totalPriceElement.innerHTML = "Tổng tiền: 0₫";
    return;
  }

  // Sử dụng reduce để tính tổng
  const totals = listCart.reduce((total, el) => {
    // el.product.price là giá tiền, el.quantity là số lượng
    return total + el.product.price;
  }, 0);

  // Hiển thị ra màn hình (đã format tiền tệ)
  totalPriceElement.innerHTML = `Tổng tiền: ${forMatPrie(totals)}`;
};
renderTotalPrice(listCart);
