let bookName = prompt("Nhập tên sách:");
let author = prompt("Nhập tên tác giả:");
let year = Number(prompt("Nhập năm xuất bản:"));

let currentYear = new Date().getFullYear();

if (year === currentYear) {
  console.log("Đây là sách mới!");

} else if (currentYear - year <= 5 && currentYear - year > 0) {
  console.log("Sách khá mới");

} else {
  console.log("Sách đã cũ");
}

console.log(`--- THÔNG TIN SÁCH ---
Tên sách: ${bookName}
Tác giả: ${author}
Năm xuất bản: ${year}
`);