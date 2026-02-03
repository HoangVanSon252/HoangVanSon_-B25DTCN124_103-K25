let maSach = [];
let tenSach = [];
let trangThaiSach = []; 

let n = Number(prompt('Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay?'));
while (n < 0 || isNaN(n)) {
    n = Number(prompt('Số cuốn sách cần kiểm tra không đc để trống'));
}
for (let i = 0; i < n; i++) {
    let ma = prompt('Nhập mã sách');
    while (ma === '') {
        ma = prompt('Nhập mã sách (không để trống)');
    }
    let ten = prompt('Nhập tên sách');
    while (ten === '') {
        ten = prompt('Nhập tên sách (không để trống)');
    }
    let tinhTrang = Number(prompt('Nhập tình trạng ban đầu(chọn số 1-3)'));
    while (isNaN(tinhTrang) || tinhTrang === 0) {
        tinhTrang = Number(prompt('Nhập tình trạng sách (phải là số, không để trống)'));
    }
    maSach.push(ma);
    tenSach.push(ten);
    trangThaiSach.push(tinhTrang);
}

console.log(`Danh sách hiện tại(${n} cuốn:)`);
for (let i = 0; i < maSach.length; i++) {
    let status = "";
    if (trangThaiSach[i] == 1) status = "Hỏng nhẹ";
    else if (trangThaiSach[i] == 2) status = "Hỏng nặng";
    else if (trangThaiSach[i] == 3) status = "Cần sửa gấp";
    else if (trangThaiSach[i] == 4) status = "Đã sửa xong";
    else if (trangThaiSach[i] == 5) status = "Loại bỏ";
    
    console.log(`${i+1}. [${maSach[i]}] ${tenSach[i]} - Trạng thái: ${trangThaiSach[i]} (${status})`);
}

let luaChon = Number(prompt(
    "MỜI CHỌN:\n" +
    "1. Sửa tình trạng sách (Nhập mã sách)\n" +
    "2. Xóa sách (Nhập mã sách)\n" +
    "0. Thoát và Xem báo cáo"
));

switch (luaChon) {
    case 1:
        let maCanSua = prompt("Nhập mã sách cần sửa:");
        let viTri = -1; 
        for (let i = 0; i < maSach.length; i++) {
            if (maSach[i] === maCanSua) {
                viTri = i;
                break; 
            }
        }

        if (viTri !== -1) {
            let trangThaiMoi = Number(prompt(
                `Sách tìm thấy: ${tenSach[viTri]} 
                Chọn tình trạng mới (1-5):  
                1: Hỏng nhẹ 
                2: Hỏng nặng 
                3: Cần sửa gấp 
                4: Đã sửa xong 
                5: Loại bỏ`
            ));
            if (trangThaiMoi >= 1 && trangThaiMoi <= 5) {
                trangThaiSach[viTri] = trangThaiMoi;
                alert("Đã cập nhật tình trạng thành công!");
            } else {
                alert("Lựa chọn trạng thái không hợp lệ!");
            }
        } else {
            alert("Không tìm thấy mã sách này!");
        }
        break;
    case 2:
        let maCanXoa = prompt("Nhập mã sách cần xóa:");
        let viTriXoa = -1;
        for (let i = 0; i < maSach.length; i++) {
            if (maSach[i] === maCanXoa) {
                viTriXoa = i;
                break;
            }
        }

        if (viTriXoa !== -1) {
            maSach.splice(viTriXoa, 1);
            tenSach.splice(viTriXoa, 1);
            trangThaiSach.splice(viTriXoa, 1);
            alert("Đã xóa sách khỏi danh sách!");
        } else {
            alert("Không tìm thấy mã sách để xóa!");
        }
        break;
    case 0:
        break;
    default:
        alert("Vui lòng nhập 0, 1 hoặc 2.");
        break;
}

console.log(`Tổng số sách còn lại: ${maSach.length}`);
let demDaSua = 0;
let demLoaiBo = 0;

for (let i = 0; i < trangThaiSach.length; i++) {
    if (trangThaiSach[i] === 4) {
        demDaSua++;
    }
    if (trangThaiSach[i] === 5) {
        demLoaiBo++;
    }
}

console.log(`Số sách "Đã sửa xong" (Trạng thái 4): ${demDaSua}`);
console.log(`Số sách "Loại bỏ" (Trạng thái 5): ${demLoaiBo}`);
console.log("\n--- SÁCH CÒN LẠI ---");
if (maSach.length > 0) {
    for (let i = 0; i < maSach.length; i++) {
        console.log(`${i + 1}. Mã: ${maSach[i]} | Tên: ${tenSach[i]} | Trạng thái: ${trangThaiSach[i]}`);
    }
} else {
    console.log("Không còn sách nào trong kho.");
}