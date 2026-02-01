
let matKhauDung = "admin123";
let soLanNhap = 0;
let dangNhapThanhCong = false;

console.log("--- HỆ THỐNG QUẢN LÝ THƯ VIỆN ---");
while (soLanNhap < 3) {
    let passInput = prompt(`Nhập mật khẩu (Lần thử ${soLanNhap + 1}/3):`);
    
    if (passInput === matKhauDung) {
        alert("Đăng nhập thành công!");
        console.log("-> Trạng thái: Đã đăng nhập.");
        dangNhapThanhCong = true;
        break; 
    } else {
        soLanNhap++;
        alert("Mật khẩu sai!");
    }
}
if (!dangNhapThanhCong) {
    console.log("HỆ THỐNG BỊ KHÓA: Bạn đã nhập sai quá 3 lần.");
} else {
    while (true) {
        let luaChon = prompt(
            "CHỌN CHỨC NĂNG:\n" +
            "1. Nhập lô sách mới\n" +
            "2. Xem sơ đồ kệ sách\n" +
            "3. Thoát chương trình"
        );
        if (luaChon === "1") {
            let soLuong = Number(prompt("Bạn muốn nhập bao nhiêu cuốn sách?"));
            let tongTien = 0;

            console.log(`--- Bắt đầu nhập ${soLuong} cuốn sách ---`);

            for (let i = 1; i <= soLuong; i++) {
                let giaTien = Number(prompt(`Nhập giá tiền cuốn thứ ${i}:`));
                if (giaTien <= 0 || isNaN(giaTien)) {
                    console.log(`Lỗi: Giá cuốn thứ ${i} không hợp lệ (${giaTien}). Bỏ qua.`);
                    continue;
                }

                tongTien += giaTien; 
                console.log(`Đã nhập cuốn ${i}: ${giaTien} VNĐ`);
            }

            console.log("--------------------------------");
            console.log(`TỔNG GIÁ TRỊ NHẬP KHO ĐỢT NÀY LÀ: ${tongTien} VNĐ`);
        }
        else if (luaChon === "2") {
            console.log("--- SƠ ĐỒ KỆ SÁCH HIỆN TẠI ---");
            for (let khu = 1; khu <= 3; khu++) {
                for (let ke = 1; ke <= 5; ke++) {
                    if (khu === 2 && ke === 3) {
                        console.log(`Khu vực ${khu} - Kệ ${ke}: (ĐANG SỬA CHỮA - KHÔNG SỬ DỤNG)`);
                        continue; 
                    }
                    console.log(`Khu vực ${khu} - Kệ ${ke}: [Trống]`);
                }
                console.log("-------------------");
            }
        }
        else if (luaChon === "3") {
            console.log("Hẹn gặp lại!");
            alert("Đã thoát chương trình.");
            break;
        }
        else {
            alert("Chức năng không tồn tại. Vui lòng nhập 1, 2 hoặc 3.");
        }
    }
}