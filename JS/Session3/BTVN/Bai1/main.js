
let soLuot = Number(prompt("Hôm nay có bao nhiêu lượt mượn sách?"));
if (soLuot > 0) {
    for (let i = 1; i <= soLuot; i++) {
        console.log(`--- Lượt mượn thứ: ${i} ---`);
        let tenNguoiMuon = prompt(`Lượt ${i}: Nhập tên người mượn:`);
        let tenSach = prompt(`Lượt ${i}: Nhập tên sách:`);
        let soNgayMuon = Number(prompt(`Lượt ${i}: Nhập số ngày mượn (1-30):`));
        if (soNgayMuon > 14) {
            console.log("Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)");
        } else {
            console.log("Mượn thành công");
        }
    }
    console.log("--------------------------------");
    console.log("Đã hoàn thành nhập liệu.");
    console.log("Tổng số lượt mượn hôm nay: " + soLuot);

} else {
    console.log("Số lượt mượn không hợp lệ.");
}
