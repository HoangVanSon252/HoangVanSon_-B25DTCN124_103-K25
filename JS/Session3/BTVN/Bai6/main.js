
let tongPhanHoi = 0;
let khieuNaiNghiemTrong = 0; 
let khieuNaiTrungBinh = 0; 
let khieuNaiNhe = 0;        
let deXuatCaiThien = 0;  
let phanHoiTichCuc = 0;  

while (true) {
    let tiepTuc = prompt("Có khiếu nại/phản hồi mới từ bạn đọc không? (có/không)").toLowerCase().trim();

    if (tiepTuc === "không") {
        break;
    } else if (tiepTuc !== "có") {
        alert("Vui lòng chỉ nhập 'có' hoặc 'không'");
        continue;
    }
    let tenBanDoc;
    do {
        tenBanDoc = prompt("Nhập Tên bạn đọc (Không được để trống):");
    } while (!tenBanDoc || tenBanDoc.trim() === "");

    let maThe = prompt("Nhập Mã thẻ (có thể để trống):");
    let loaiPhanHoi;
    do {
        loaiPhanHoi = Number(prompt("Loại phản hồi:\n1: Phàn nàn/Khiếu nại\n2: Đề xuất cải thiện\n3: Phản hồi tích cực"));
    } while (loaiPhanHoi !== 1 && loaiPhanHoi !== 2 && loaiPhanHoi !== 3);

    let mucDo = 0;
    if (loaiPhanHoi === 1) {
        do {
            mucDo = Number(prompt("Mức độ nghiêm trọng:\n1: Nhẹ\n2: Trung bình\n3: Nghiêm trọng"));
        } while (mucDo !== 1 && mucDo !== 2 && mucDo !== 3);
    }

    let noiDung = prompt("Nội dung ngắn gọn:"); 
    tongPhanHoi++;
    console.log(`--- Đang xử lý hồ sơ của: ${tenBanDoc} ---`);

    // Kiểm tra theo Loại
    if (loaiPhanHoi === 1) {
        if (mucDo === 3) {
            console.log("-> Kết quả: Chuyển ngay lãnh đạo - Khiếu nại nghiêm trọng");
            khieuNaiNghiemTrong++;
        } else if (mucDo === 2) {
            console.log("-> Kết quả: Ghi nhận, sẽ xử lý trong ngày - Khiếu nại trung bình");
            khieuNaiTrungBinh++;
        } else {
            console.log("-> Kết quả: Xử lý ngay tại quầy - Khiếu nại nhẹ");
            khieuNaiNhe++;
        }
    } 
    else if (loaiPhanHoi === 2) {
        console.log("-> Kết quả: Cảm ơn! Đề xuất đã được ghi nhận vào sổ ý kiến");
        deXuatCaiThien++;
    } 
    else {
        console.log("-> Kết quả: Cảm ơn bạn đã phản hồi tích cực!");
        phanHoiTichCuc++;
    }
}
console.log("========================================");
console.log("BÁO CÁO TIẾP NHẬN PHẢN HỒI");
console.log(`- Tổng số phản hồi/khiếu nại đã xử lý: ${tongPhanHoi}`);
console.log("----------------------------------------");
console.log(`1. Số khiếu nại nghiêm trọng (Mức 3):  ${khieuNaiNghiemTrong}`);
console.log(`2. Số khiếu nại trung bình (Mức 2):    ${khieuNaiTrungBinh}`);
console.log(`3. Số khiếu nại nhẹ (Mức 1):           ${khieuNaiNhe}`);
console.log(`4. Số đề xuất cải thiện:               ${deXuatCaiThien}`);
console.log(`5. Số phản hồi tích cực:               ${phanHoiTichCuc}`);
console.log("========================================");