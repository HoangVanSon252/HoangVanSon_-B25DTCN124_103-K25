// Khởi tạo biến đếm thống kê
let soLanThanhCong = 0;
let soLanThatBai = 0;
while (true) {
    let yeuCau = prompt("Có yêu cầu gia hạn mới không? (có/không)").toLowerCase();

    if (yeuCau === "không") {
        break; 
    } else if (yeuCau !== "có") {
        alert("Vui lòng chỉ nhập 'có' hoặc 'không'");
        continue;
    }
    let tenBanDoc = prompt("Nhập tên bạn đọc:");
    let tenSach = prompt("Nhập tên sách:");
    let soNgayDaMuon;
    do {
        soNgayDaMuon = Number(prompt("Số ngày đã mượn hiện tại (nhập số >= 1):"));
    } while (isNaN(soNgayDaMuon) || soNgayDaMuon < 1);
    let soNgayGiaHan;
    do {
        soNgayGiaHan = Number(prompt("Số ngày muốn gia hạn thêm (nhập số >= 1):"));
    } while (isNaN(soNgayGiaHan) || soNgayGiaHan < 1);
    let tongThoiGian = soNgayDaMuon + soNgayGiaHan;

    console.log(`--- Xử lý hồ sơ: ${tenBanDoc} - Sách: ${tenSach} ---`);
    if (tongThoiGian > 60) {
        console.log("-> Kết quả: Không được gia hạn: Tổng thời gian vượt quá 60 ngày tối đa.");
        soLanThatBai++;
    } 
    else if (soNgayDaMuon > 45) {
        console.log("-> Kết quả: Không được gia hạn: Đã mượn quá lâu (>45 ngày).");
        soLanThatBai++;
    } 
    else {
        console.log("-> Kết quả: Gia hạn thành công.");
        soLanThanhCong++;
    }
}
console.log("========================================");
console.log("THỐNG KÊ CA LÀM VIỆC:");
console.log(`- Số lần gia hạn thành công: ${soLanThanhCong}`);
console.log(`- Số lần gia hạn KHÔNG thành công: ${soLanThatBai}`);