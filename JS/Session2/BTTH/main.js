let fullName = prompt("Nhập tên người dùng");
let vaiTro = prompt("Lựa chọn vai trò (admin, student, guest)");
let soDu = Number(prompt('Nhập số dư tài khoản'));
let trangThaiThe = prompt('Nhập true nếu thẻ hoạt động').toLowerCase();
let soNgayDaGiuSach = Number(prompt('Bạn đã giữ sách bao nhiêu ngày rồi?'));
switch (vaiTro) {
    case 'admin':
        console.log('Chào Admin, bạn có toàn quyền hệ thống');
        break;
    case 'student':
        console.log('Chào sinh viên, bạn có thể mượn sách');
        break;
    case 'guest':
        console.log('Chào khách, bạn chỉ có thể đọc tại chỗ');
        break;
    default:
        console.log('Lỗi: Vai trò không hợp lệ!');
}
let isTenHopLe = !!fullName;
let isVaiTroHopLe = (vaiTro === 'admin' || vaiTro === 'student');
let isSoDuDu = (soDu > 0);
let isTheHoatDong = (trangThaiThe === 'true');
if (isTenHopLe && isVaiTroHopLe && isSoDuDu && isTheHoatDong) {
    console.log('ĐƯỢC PHÉP MƯỢN SÁCH');
    const NGAY_CHO_PHEP = 15;
    let soNgayQuaHan = soNgayDaGiuSach - NGAY_CHO_PHEP;
    let tongPhat = 0;

    if (soNgayQuaHan <= 0) {
        console.log('Cảm ơn bạn đã trả đúng hạn');
    } else {
        console.log(`Bạn đã quá hạn ${soNgayQuaHan} ngày!`);
        if (soNgayQuaHan >= 1 && soNgayQuaHan <= 5) {
            tongPhat = soNgayQuaHan * 5000;
        } else if (soNgayQuaHan >= 6 && soNgayQuaHan <= 10) {
            tongPhat = (5 * 5000) + ((soNgayQuaHan - 5) * 10000);
        } else {
            tongPhat = 200000;
            console.log('TÀI KHOẢN BỊ KHÓA do quá hạn quá lâu');
        }
        console.log(`Tổng tiền phạt phải đóng: ${tongPhat} VNĐ`);
    }

} else {
    console.log('YÊU CẦU BỊ TỪ CHỐI');
    if (!isTenHopLe) console.log("- Lý do: Tên không được để trống");
    if (!isVaiTroHopLe) console.log("- Lý do: Vai trò (Guest) không được mượn về");
    if (!isSoDuDu) console.log("- Lý do: Số dư tài khoản không đủ (>0)");
    if (!isTheHoatDong) console.log("- Lý do: Thẻ đang bị khóa");
}