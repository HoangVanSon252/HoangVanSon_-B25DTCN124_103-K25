let playerIds  = [];
let playerPositions = [];
let soLuongCauThu;
let viTri = ['', 'Thủ môn', 'Hậu vệ', 'Tiền vệ', 'Tiền Đạo'];
do {
    soLuongCauThu = Number(prompt('Có bao nhiêu cầu thủ cần nhập vào đội bóng?s'));    
} while (isNaN(soLuongCauThu) || soLuongCauThu <= 0);

for (let i = 0; i < soLuongCauThu; i++) {
    alert(`Nhập cầu thủ thứ 1`);
    let maCauThu;
    let kiemTra;
    do {
        kiemTra = false;
        maCauThu = prompt(`Nhập mã cầu thủ ${i + 1}:`);
        for (let j = 0; j < playerIds.length; j++) {
            if (playerIds[j] === maCauThu) {
                kiemTra = true;
                break;
            }
        }
        if (kiemTra) {
            alert("Mã cầu thủ này đã tồn tại! Vui lòng nhập lại.");
        }
    } while (kiemTra);
    playerIds.push(maCauThu);
    let viTriCauThu;
    do {
        viTriCauThu = parseInt(prompt(`Vị trí của ${maCauThu} (1: Thủ môn, 2: Hậu vệ, 3: Tiền vệ, 4: Tiền đạo):`));
    } while (viTriCauThu < 1 || viTriCauThu > 4 || isNaN(viTriCauThu));

    playerPositions.push(viTri[viTriCauThu]);
}
const show = () =>{
    console.log(`\nĐội bóng hiện tại (${playerIds.length} cầu thủ):`);
    for (let i = 0; i < playerIds.length; i++) {
        console.log(`${i + 1}. ${playerIds[i]} - ${playerPositions[i]}`);
    }
}

const timCauThu = (position) =>{
    let arrViTri = [];
    for (let i = 0; i < playerPositions.length; i++) {
        if (playerPositions[i] === position) {
            arrViTri.push(i);
        }
    }
    return arrViTri;
}
let searchNum = prompt("Nhập vị trí cầu thủ muốn đếm số lượng (1: Thủ môn, 2: Hậu vệ, 3: Tiền vệ, 4: Tiền đạo):");
let searchPosName = viTri[parseInt(searchNum)];

show();

if (searchPosName) {
    let indices = timCauThu(searchPosName);
    console.log(`\nSố cầu thủ ở vị trí ${searchPosName}: ${indices.length}`);
    console.log(`Các chỉ số cầu thủ ở vị trí ${searchPosName}: ${indices.join(", ")}`);
}
