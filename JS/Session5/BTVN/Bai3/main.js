let maSach = [];
let tenSach = [];
let soLuongSachTon = [];
let n = Number(prompt('Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay?'));
while (n <= 0 || isNaN(n)) {
    prompt('Số lượng không hợp lệ. Vui lòng nhập lại số nguyên dương:')
}
for (let i = 0; i < n; i++) {
    alert(`--- Nhập thông tin cho cuốn sách thứ ${i + 1} ---`);
    let ma = prompt(`Nhập mã cho cuốn sách thứ ${i + 1}:`)
    while (ma.trim() === '') {
        ma = prompt("Mã sách không được để trống. Nhập lại:");
    }
    let ten = prompt(`Nhập tên cho cuốn sách thứ ${i + 1}:`)
    while (ten.trim() === '') {
        ten = prompt("Tên sách không được để trống. Nhập lại:");
    }
    let soLuong = Number(prompt(`Nhập số lượng cho cuốn sách thứ ${i + 1}:`))
    while (isNaN(soLuong) || soLuong < 0) {
        soLuong = Number(prompt("Số lượng sách không được để trống. Nhập lại:"));
    }
    maSach.push(ma);
    tenSach.push(ten);
    soLuongSachTon.push(soLuong);
}
let count = 0;
let arrMaHetHang = []
console.log(`Danh sách cần xem xét bổ sung (${n})`);
for (let i = 0; i < maSach.length; i++) {
    console.log(`${i + 1}. Mã: ${maSach[i]} - Tên: ${tenSach[i]} - Còn: ${soLuongSachTon[i]}`);
    if (soLuongSachTon[i] <= 5) {
        count++;
    }
    if (soLuongSachTon[i] === 0) {
        arrMaHetHang.push(maSach[i]);
    }
}
console.log(`Số lượng sách có tồn kho thấp (<= 5) cần bổ sung: ${count}`);
if (arrMaHetHang.length > 0) {
    console.log(`Các mã sách đã hết hàng (SL = 0): ${arrMaHetHang.join(", ")}`);
} else {
    console.log("Không có sách nào hết hàng.");
}
