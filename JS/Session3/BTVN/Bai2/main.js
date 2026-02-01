
let soLuot = Number(prompt('Hôm nay có bao nhiêu lượt trả sách?'));
let soLuotTre = 0; 

if (soLuot > 0) {
    for (let i = 1; i <= soLuot; i++) {
        console.log(`--- Lượt trả thứ: ${i} ---`);
        
        let tenNguoiTra = prompt(`Lượt ${i}: Nhập tên người trả`);
        let tenSach = prompt(`Lượt ${i}: Nhập tên sách`);
        let soNgayDaMuon = Number(prompt(`Lượt ${i}: Nhập số ngày đã mượn`));
        while (soNgayDaMuon < 1 || isNaN(soNgayDaMuon)) {
            soNgayDaMuon = Number(prompt('Lỗi: Số ngày phải >= 1. Vui lòng nhập lại:'));
        }
        if (soNgayDaMuon <= 14) {
            console.log("-> Kết quả: Trả đúng hạn.");
        } 
        else if (soNgayDaMuon >= 15 && soNgayDaMuon <= 21) {
            console.log("-> Kết quả: Trả muộn nhẹ. Phạt nhắc nhở.");
            soLuotTre++; 
        } 
        else {
            console.log("-> Kết quả: Quá hạn nghiêm trọng. Cần ghi biên bản phạt.");
            soLuotTre++;
        }
    }
    console.log("==================================");
    console.log("TỔNG KẾT HÔM NAY:");
    console.log("- Tổng số lượt trả: " + soLuot);
    console.log("- Số lượt trả muộn (>= 15 ngày): " + soLuotTre);

} else {
    console.log("Không có lượt trả sách nào.");
}