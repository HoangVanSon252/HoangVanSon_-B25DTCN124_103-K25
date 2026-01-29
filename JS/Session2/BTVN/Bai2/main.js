let totalBooks = Number(prompt("Nhập số lượng sách trong thư viện:"));

if (totalBooks < 10) {
  console.log("Thư viện có ít sách");

} else if (totalBooks >= 10 && totalBooks <= 20) {
  console.log("Thư viện có số lượng sách vừa đủ");

} else {
  console.log("Thư viện có nhiều sách");
}

for (let i = 1; i <= totalBooks; i++) {
  console.log("Sách số " + i);
}
