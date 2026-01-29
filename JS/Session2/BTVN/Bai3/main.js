let bookName = prompt("Nhập tên sách:");
let category = prompt("Nhập thể loại sách (Khoa học / Lịch sử / Văn học / Truyện)");
let status = prompt("Tình trạng sách (có sẵn / đã mượn)");

category = category ? category.toLowerCase() : "";
status = status ? status.toLowerCase() : "";

if (category === "khoa học" || category === "lịch sử") {

  if (status === "có sẵn") {
    console.log("Sách này có sẵn trong thư viện");
  } else {
    console.log("Sách đã được mượn");
  }

} else if (category === "văn học" || category === "truyện") {
  console.log("Sách này có thể đọc giải trí");

} else {
  console.log("Thể loại sách không hợp lệ");
}

console.log(`--- THÔNG TIN SÁCH ---
Tên sách: ${bookName}
Thể loại: ${category}
Tình trạng: ${status}
`);
