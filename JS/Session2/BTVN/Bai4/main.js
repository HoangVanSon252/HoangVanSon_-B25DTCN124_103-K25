let bookName = prompt("Nhập tên sách:");
let borrower = prompt("Nhập tên người mượn:");
let favoriteLevel = Number(prompt("Nhập mức độ yêu thích (1 - 5):"));

if (favoriteLevel === 5 || favoriteLevel === 4) {
  console.log("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!");

} else if (favoriteLevel === 3) {
  console.log("Sách này khá ổn, có thể mượn");

} else if (favoriteLevel === 2 || favoriteLevel === 1) {
  console.log("Sách này bạn có thể cân nhắc mượn lại sau");

} else {
  console.log("Mức độ yêu thích không hợp lệ");
}

console.log(`--- THÔNG TIN MƯỢN SÁCH ---
Tên sách: ${bookName}
Người mượn: ${borrower}
Mức độ yêu thích: ${favoriteLevel}
`);
