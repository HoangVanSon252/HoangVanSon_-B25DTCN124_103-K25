let tongSach = 0;
let sachMat = 0;
let sachHetHang = 0;
let sachTonNhieu = 0;
let sachTonBinhThuong = 0; 
while (true) {
    let tiepTuc = prompt("Tiếp tục kiểm kê sách tiếp theo? (có/không)").toLowerCase().trim();

    if (tiepTuc === "không") {
        break; 
    } else if (tiepTuc !== "có") {
        alert("Vui lòng chỉ nhập 'có' hoặc 'không'");
        continue; 
    }
    let maSach;
    do {
        maSach = prompt("Nhập Mã sách (không được để trống):");
    } while (!maSach || maSach.trim() === "");

    let tenSach = prompt("Nhập Tên sách:");

    let soLuong;
    do {
        soLuong = Number(prompt("Nhập Số lượng thực tế (số nguyên >= 0):"));
    } while (isNaN(soLuong) || soLuong < 0);

    let tinhTrang;
    do {
        tinhTrang = Number(prompt("Nhập Tình trạng (1-Bình thường, 2-Mất):"));
    } while (tinhTrang !== 1 && tinhTrang !== 2);

    console.log(`--- Đang xử lý: ${tenSach} (Mã: ${maSach}) ---`);
    if (tinhTrang === 2) {
        sachMat++;
        console.log("-> Kết quả: Sách mất");
    } 
    else {
        if (soLuong === 0) {
            sachHetHang++;
            console.log("-> Kết quả: Sách hết hàng (vẫn còn trong hệ thống)");
        } else if (soLuong >= 10) {
            sachTonNhieu++;
            console.log("-> Kết quả: Sách tồn kho nhiều");
        } else {
            sachTonBinhThuong++;
            console.log("-> Kết quả: Sách tồn kho bình thường");
        }
    }
}
console.log("========================================");
console.log("BÁO CÁO KIỂM KÊ KHO SÁCH");
console.log(`Tổng số sách đã kiểm kê: ${tongSach} cuốn`);
console.log(`Số sách mất:             ${sachMat} cuốn`);
console.log(`Số sách hết hàng:        ${sachHetHang} cuốn`);
console.log(`Số sách tồn nhiều:       ${sachTonNhieu} cuốn`);
console.log(`Số sách tồn bình thường: ${sachTonBinhThuong} cuốn`);
console.log("========================================");