const products = [
  { id: 1, name: "Bánh Chưng", price: 150000, img: "./img/banhchung.webp" },
  { id: 2, name: "Giò Lụa", price: 180000, img: "./img/giolua.jpg" },
  { id: 3, name: "Cành Đào", price: 500000, img: "./img/canhdao.webp" },
  { id: 4, name: "Mứt Tết", price: 120000, img: "./img/muttet.webp" },
  { id: 5, name: "Lì Xì (Tệp)", price: 20000, img: "./img/lixi.webp" },
  { id: 6, name: "Dưa Hấu", price: 60000, img: "./img/duahau.jpg" },
];
const forMatCrentcy = (price) => {
  return price.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });
};
const renderProduce = (products) => {
  const produceListElement = document.querySelector("#product-list");
  const producMap = products.map((product, index) => {
    return `
        <div class="product-card">
            <img src="${product.img}" alt="">
            <h3>${product.name}</h3>
            <p class="price">${forMatCrentcy(product.price)}</p>
            <button class="btn-add" id="btn-add-${product.id}" data-index = "${index}">Thêm vào giỏ</button>
        </div>
    `;
  });
  produceListElement.innerHTML = producMap.join("");
};
renderProduce(products);

// const renderShopingCart = (product) => {
//   const cartList = document.getElementById("cart-list");
//   const cartMap = product.map((el, index) => {
//     return `
//     <li>
//       <span class="cart-item-name">${el.name}</span>
//       <div>
//           <span class="cart-item-price">${el.price}</span>
//           <button class="btn-remove">X</button>
//       </div>
//     </li>
//     `;
//   });
//   cartList.innerHTML = cartMap.join("");
// };

const addShopingCart = (product) => {
  const productList = document.getElementById("product-list");
  const cartList = document.getElementById("cart-list");
  const empty = document.querySelector(".empty-msg");
  productList.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-add")) {
      const index = parseInt(event.target.dataset.index);
      if (empty) {
        empty.remove();
      }

      const itemCart = `<li>
        <span class="cart-item-name">${product[index].name}</span>
        <div>
           <span class="cart-item-price">${product[index].price}</span>
           <button class="btn-remove" data-index = "${index}">X</button>
        </div>
      </li>`;
      cartList.innerHTML += itemCart;
    }
  });
};
addShopingCart(products);

const deleteCart = (product) => {
  const btnDelete = document.querySelectorAll(".btn-remove");
  btnDelete.addEventListener("click", (event) => {});
};
deleteCart(products);
