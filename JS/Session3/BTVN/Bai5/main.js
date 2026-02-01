
let tongYeuCau = 0;
let soThanhCong = 0;
let soTuChoi = 0;
let soChoXetDuyet = 0;
while (true) {
    let tiepTuc = prompt("Có yêu cầu đặt mượn trước mới không? (có/không)").toLowerCase().trim();

    if (tiepTuc === "không") {
        break; 
    } else if (tiepTuc !== "có") {
        alert("Vui lòng chỉ nhập 'có' hoặc 'không'");
        continue;
    }
    let tenBanDoc = prompt("Nhập tên bạn đọc:");
    let maSach = prompt("Nhập mã sách muốn đặt:");
    let tenSach = prompt("Nhập tên sách:"); 
    let soNgayCho;
    do {
        soNgayCho = Number(prompt("Số ngày dự kiến chờ (nhập số nguyên >= 1):"));
    } while (isNaN(soNgayCho) || soNgayCho < 1);
    let uuTien;
    do {
        uuTien = Number(prompt("Nhập mức ưu tiên:\n1: Sinh viên\n2: Giảng viên/NCS\n3: Nhân viên/Đặc cách"));
    } while (uuTien !== 1 && uuTien !== 2 && uuTien !== 3);
    
    tongYeuCau++; 
    console.log(`--- Xử lý yêu cầu: ${tenBanDoc} (Sách: ${tenSach}) ---`);
    if (soNgayCho > 45) {
        console.log("-> Kết quả: Từ chối: Thời gian chờ quá lâu (>45 ngày)");
        soTuChoi++;
    }
    else if (uuTien === 3) {
        console.log("-> Kết quả: Đặt trước thành công - Ưu tiên đặc cách cao nhất");
        soThanhCong++;
    }
    else if (uuTien === 2 && soNgayCho <= 30) {
        console.log("-> Kết quả: Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu");
        soThanhCong++;
    }
    else if (uuTien === 1 && soNgayCho <= 21) {
        console.log("-> Kết quả: Đặt trước thành công");
        soThanhCong++;
    }
    else {
        console.log("-> Kết quả: Đặt trước tạm thời - Chờ xét duyệt thêm");
        soChoXetDuyet++;
    }
}
console.log("========================================");
console.log("BÁO CÁO TỔNG HỢP CA LÀM VIỆC");
console.log(`- Tổng số yêu cầu đã xử lý:      ${tongYeuCau}`);
console.log(`- Số yêu cầu đặt trước thành công: ${soThanhCong}`);
console.log(`- Số yêu cầu bị từ chối:           ${soTuChoi}`);
console.log(`- Số yêu cầu chờ xét duyệt:        ${soChoXetDuyet}`);
console.log("========================================");