let danhSachSach = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"];

let dangChay = true;

while (dangChay) {
    let luaChon = Number(prompt(
        `--- THƯ VIỆN KHOA HỌC ---
        1. Xem danh sách
        2. Nhập sách mới
        3. Mượn sách (Xóa)
        4. Sửa tên sách
        5. Sắp xếp kệ
        0. Thoát
        Mời bạn nhập số (0-5):`
    ));
    switch (luaChon) {
        case 1: 
            console.log(`=> Danh sách hiện tại (${danhSachSach.length} cuốn):`);
            if (danhSachSach.length === 0) {
                console.log("(Kho sách trống)");
            } else {
                for (let i = 0; i < danhSachSach.length; i++) {
                    console.log(`${i + 1}. ${danhSachSach[i]}`);
                }
            }
            break;

        case 2: 
            let tenSachMoi = prompt("Nhập tên cuốn sách mới:");
            if (tenSachMoi && tenSachMoi.trim() !== "") {
                danhSachSach.push(tenSachMoi); 
                console.log("=> Đã thêm thành công!");
                console.log(`(Danh sách mới: ${danhSachSach.join(", ")})`);
            } else {
                console.log("=> Lỗi: Tên sách không được để trống.");
            }
            break;

        case 3: 
            let tenSachMuon = prompt("Nhập tên sách muốn mượn:");
            let viTriMuon = danhSachSach.indexOf(tenSachMuon);

            if (viTriMuon !== -1) {
                danhSachSach.splice(viTriMuon, 1);
                console.log(`=> Đã cho mượn cuốn '${tenSachMuon}'.`);
            } else {
                console.log(`=> Lỗi: Không tìm thấy sách '${tenSachMuon}'!`);
            }
            break;

        case 4:
            let tenSachCu = prompt("Nhập tên sách cũ cần sửa:");
            let viTriSua = danhSachSach.indexOf(tenSachCu);

            if (viTriSua !== -1) {
                let tenMoiCapNhat = prompt(`Nhập tên mới cho cuốn '${tenSachCu}':`);
                if (tenMoiCapNhat && tenMoiCapNhat.trim() !== "") {
                    danhSachSach[viTriSua] = tenMoiCapNhat;
                    console.log("=> Cập nhật thành công!");
                    console.log(`(Vị trí ${viTriSua + 1} đổi thành: ${tenMoiCapNhat})`);
                } else {
                    console.log("=> Lỗi: Tên mới không hợp lệ.");
                }
            } else {
                console.log(`=> Lỗi: Không tìm thấy sách '${tenSachCu}' để sửa.`);
            }
            break;

        case 5: 
            danhSachSach.sort();
            console.log("=> Đã sắp xếp lại kệ sách theo A-Z.");
            for (let i = 0; i < danhSachSach.length; i++) {
                console.log(`${i + 1}. ${danhSachSach[i]}`);
            }
            break;

        case 0: 
            console.log("=> Cảm ơn bạn đã sử dụng hệ thống. Hẹn gặp lại!");
            dangChay = false; 
            break;

        default:
            console.log("=> Lựa chọn không hợp lệ. Vui lòng chọn từ 0 đến 5.");
            break;
    }
}