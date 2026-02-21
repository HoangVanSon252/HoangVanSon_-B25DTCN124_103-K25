const squad = [
    ["Nguyen Van A", 10, "FW"],
    ["Tran Van B", 5, "MF"],
    ["Le Van C", 2, "DF"],
    ["Pham Van D", 12, "FW"],
    ["Hoang Van E", 0, "GK"],
    ["Dang Van F", 7, "MF"]
];
const xemDanhSach = (arr) =>{
    arr.forEach(el => {
        console.log(`${el[0]} (${el[2]}): ${el[1]} bàn thắng`);
    });
}
const timKiemCauThu = (arr) =>{
    let tenCauThu = prompt('Nhập tên cầu thủ cần tìm.');
    const player = arr.find(el =>{
        return el[0] === tenCauThu;
    });
    if (player) {
        console.log(`${player[0]} (${player[2]}): ${player[1]}`);
    } else {
        console.log("Không tìm thấy cầu thủ này!");
    }
}

const locViTri = (arr) =>{
    let namePos = prompt('Nhập vị trí cần lọc (Ví dụ: FW, MF, DF, GK).');
    let pos = arr.filter(el =>{
        return el[2] === namePos;
    });
    if(pos.length > 0){
        console.log(`---Danh sách cầu thủ vị trí ${namePos}`);
        pos.forEach(p => console.log(`${p[0]} - ${p[1]} bàn thắng`));
    }
    
}
const tongSoBanThang = (arr) =>{
    let totalGoals = arr.reduce((sum, p) => sum + p[1], 0);
    console.log("Tổng số bàn thắng hiện tại là:", totalGoals);
}
const kiemTraHieuXuat = (arr) =>{
    let isSome = arr.some(el =>{
        return el[1] === 0;
    });
    if (isSome) {
        console.log("Có cầu thủ chưa ghi bàn");
    } else {
        console.log("Tất cả cầu thủ trong danh sách đều đã có bàn thắng");
    }
    let isEvery = arr.every(el =>{
        return el[1] > 0;
    });
    if (isEvery) {
        console.log("Tất cả cầu thủ đều đã ghi bàn");
    } else {
        console.log("Vẫn còn cầu thủ chưa ghi được bàn thắng nào");
    }
}
let choice;
do {
    // Chuyển prompt về kiểu số bằng dấu + hoặc Number()
    choice = +prompt(`--- QUẢN LÝ ĐỘI BÓNG ---
1. Xem danh sách
2. Tìm kiếm (Find)
3. Lọc vị trí (Filter)
4. Tổng bàn thắng (Reduce)
5. Kiểm tra hiệu suất (Some/Every)
0. Thoát`);

    switch (choice) {
        case 1:
            console.log('Danh sách cầu thủ:');
            xemDanhSach(squad);
            break;
        case 2:
            console.log('Cau thủ tìm thấy là:');
            timKiemCauThu(squad);
            break;
        case 3:
            locViTri(squad);
            break;
        case 4:
            tongSoBanThang(squad);
            break;
        case 5:
            kiemTraHieuXuat(squad);
            break;
        case 0:
            console.log("Tạm biệt!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
    }
} while (choice !== 0);