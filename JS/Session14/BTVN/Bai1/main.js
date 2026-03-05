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
    </div>
  `;
  });
  producElement.innerHTML = productMap.join("");
};
renderProdutList(products);
