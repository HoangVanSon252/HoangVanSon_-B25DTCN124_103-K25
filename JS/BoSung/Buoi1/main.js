const tables = document.querySelector("#table");

const products = [
  {
    id: 1,
    name: "cam",
    clasName: "A1",
    email: "hoangvan@gmail.com",
  },
  {
    id: 2,
    name: "tao",
    clasName: "A1",
    email: "hoangvan@gmail.com",
  },
];
const tbodys = document.getElementById("tbody");
const render = () => {
  tbodys.innerHTML = products
    .map(
      (product) => `
        <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.clasName}</td>
            <td>${product.email}</td>
        </tr>
        `,
    )
    .join("");
};
render();
