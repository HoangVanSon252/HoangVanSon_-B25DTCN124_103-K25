let bookName = prompt("Nhập tên sách:");
let status = prompt("Nhập trạng thái sách (có sẵn / đã mượn)");
let publishYear = Number(prompt("Nhập năm xuất bản:"));

let currentYear = new Date().getFullYear();

status = status ? status.toLowerCase() : "";
let yearDiff = currentYear - publishYear;

if (status === "có sẵn" && yearDiff <= 5) {
  console.log("Sách này mới và có sẵn để mượn");

} else if (status === "đã mượn" && yearDiff <= 10) {
  console.log("Sách này đã mượn nhưng khá mới, có thể mượn lại sau");

} else if (status === "đã mượn" && yearDiff > 10) {
  console.log("Sách này đã mượn và khá cũ");

} else if (status === "có sẵn" && yearDiff > 5) {
  console.log("Sách này có sẵn nhưng đã lâu năm");

} else {
  console.log("Thông tin sách không hợp lệ");
}

console.log(`--- THÔNG TIN SÁCH ---
Tên sách: ${bookName}
Trạng thái: ${status}
Năm xuất bản: ${publishYear}
`);
