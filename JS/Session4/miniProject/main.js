let user = 'admin'
let pass = 12345;
let statsLogin = false;

for (let i = 3; i >= 1; i--) {
    let taiKhoan = prompt('Nhap tai khoan');
    let matKhau = Number(prompt('Nhap mat khau'));
    if (taiKhoan === user && matKhau === pass) {
        alert(`Đăng nhập thành công!`);
        statsLogin = true;
        break;
    }
    if (i === 1) {
        alert("Tài khoản đã bị khóa do nhập sai quá 3 lần.");
        break;
    }
    if (taiKhoan !== user && matKhau !== pass) {
        alert(`Sai cả tài khoản và mật khẩu! Bạn còn ${i - 1} lần thử.`)
    }else if (taiKhoan !== user) {
        alert(`Sai tài khoản. Bạn còn ${i - 1} lần thử.`);
    } else{
        alert(`Sai mật khẩu. Bạn còn ${i - 1} lần thử.`);
    }
}
if (statsLogin) {
    let choice;
    do {
        choice = Number(prompt(`---HỆ THỐNG QUẢN TRỊ THƯ VIỆN---
    1.Phân loại mã sách(chẵn/lẻ)
    2.Thiết kế sơ đồ kho sách(Dạng lưới)
    3.Dự toán phí bảo trì sách theo năm
    4.Tìm mã số sách may mắn
    5.Thoát
    Vui lòng nhập lựa chọn của bạn(1-5):`));
    switch (choice) {
            case 1:
                let tongSach = 0;
                let sachKhoaHoc = 0;  
                let sachNgheThuat = 0;
                let maSach;

                while (true) {
                    maSach = Number(prompt("Nhập mã sách (Nhập 0 để dừng):"));
                    if (maSach === 0) {
                        alert('Đã phân loại xong! Xem kết quả tại Console (F12).');
                        break;
            
                    }
                    if (isNaN(maSach)) {
                        alert("Mã sách không hợp lệ, vui lòng nhập số!");
                        break;
                    }
                    tongSach++; 

                    if (maSach % 2 === 0) {
                        sachKhoaHoc++;
                    } else {
                        sachNgheThuat++;
                    }
                }
                console.log('--- Kết quả phân loại mã sách ---');
                console.log(`- Tổng số lượng mã sách đã nhập: ${tongSach}`);
                console.log(`- Số mã chẵn (Sách khoa học): ${sachKhoaHoc}`);
                console.log(`- Số mã lẻ (Sách nghệ thuật): ${sachNgheThuat}`);
                break;
            case 2:
                alert("Bạn chọn: Thiết kế sơ đồ kho sách.");
                let soHang = Number(prompt('Nhập số hàng của kho:'));
                let soCot = Number(prompt('Nhập số cột của kho:'));
                let viTri;
                if (isNaN(soHang) || isNaN(soCot) || soHang <= 0 || soCot <= 0) {
                    alert('Số hàng và cột phải là số dương!');
                }else{
                    alert('Đã in bản đồ kho ra Console (F12).');
                    console.log(`--- BẢN ĐỒ KHO SÁCH ${soHang}x${soCot} ---`);
                    for (let i = 1; i <= soHang; i++) {
                        let hangHienTai = ''
                        for (let j = 1; j <= soCot; j++) {
                            viTri = `[${i} - ${j}]`;
                            if (i === j) {
                                viTri += `ưu tiên`;
                            }
                            hangHienTai += viTri;
                        }
                        console.log(hangHienTai);
                        
                    }
                }
                
                break;
            case 3:
                alert("Bạn chọn: Dự toán phí bảo trì.");
                let soLuongSach = Number(prompt('Nhập số lượng sách hiện có:'));
                let phiBaoTri = Number(prompt('Nhập phí bảo trì cho 1 cuốn (VNĐ):'));
                let namDuDoan = Number(prompt('Nhập số năm dự toán:'));
                for (let i = 1; i <= namDuDoan; i++) {
                    let tongTien = soLuongSach * phiBaoTri;
                    console.log(`Năm ${i}: ${tongTien} VND (Đơn giá: ${phiBaoTri}/cuốn)`);
                    phiBaoTri *= 1.1;
                }
                break;
            case 4:
                alert("Bạn chọn: Tìm mã số sách may mắn.");
                let n = Number(prompt('Bạn muốn kiểm tra các mã sách từ 1 đến bao nhiêu? (Nhập N):'));
                if (isNaN(n) || n <= 0) {
                    alert('Vui lòng nhập số N dương!');
                }
                let count = 0;
                for (let i = 0; i <= n; i++) {
                    if (i % 3 === 0 && i % 5 !== 0) {
                        count++;
                    }
                }
                console.log(`=> Tổng cộng có ${count} mã may mắn.`);
                alert(`Tìm thấy ${count} mã may mắn. Xem chi tiết tại Console.`);
                
                break;
            case 5:
                alert("Đang thoát chương trình... Hẹn gặp lại!");
                break;
            default:
                alert("Lựa chọn không hợp lệ. Vui lòng nhập từ 1 đến 5.");
        }
    } while (choice !== 5);
    
}