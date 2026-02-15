let players  = [];
let goals = [];

let choice;


const addPlayer = (name, goal) =>{
    do {
        soLuongCauThu = Number(prompt('Có bao nhiêu cầu thủ cần nhập vào đội bóng?s'));    
    } while (isNaN(soLuongCauThu) || soLuongCauThu <= 0);
    
    let tenCauThu;
    for (let i = 0; i < soLuongCauThu; i++) {
        let kiemTra;
        alert(`Nhập cầu thủ thứ ${i+1}`);
        do {
            kiemTra = false;
            tenCauThu= prompt(`Nhập tên cầu thủ ${i + 1}:`);
            for (let j = 0; j < name.length; j++) {
                if (name[j] === tenCauThu) {
                    kiemTra = true;
                    break;
                }
            }
            if (kiemTra) {
                alert("Tên cầu thủ này đã tồn tại! Vui lòng nhập lại.");
            }
        } while (kiemTra);
        name.push(tenCauThu);
        let soBanThang;
        do {
            soBanThang = parseInt(prompt(`Nhập số bàn thắng của cầu thủ ${tenCauThu}: `));
        } while (soBanThang < 0 || isNaN(soBanThang));

        goal.push(soBanThang);
    }
}
const showSquad = () =>{
    for (let i = 0; i < players.length; i++) {
        console.log(`${i+1}. ${players[i]} - ${goals[i]}`);
    }
}
const getTotalGoals = function() {
        let sum = 0;
    for (const element of goals) {
        sum += element;
    }
    return console.log(`Tổng số bàn thắng của cả đội là: ${sum}`);
};
const findMostGoals = (goalsArray) =>{
    let goalMax = goalsArray[0];
    for (let i = 0; i <= goalsArray.length; i++) {
        if (goalsArray[i] > goalMax) {
            goalMax = goalsArray[i];
        }
    }
    return console.log(`Số bàn thắng nhiều nhất trong đội với số bàn thắng là: ${goalMax}`);
}
const main = () =>{
    do {
        choice = Number(prompt(`---QUẢN LÝ ĐỘI BÓNG---
            1. Nhập cầu thủ mới
            2. Xem danh sách đội hình
            3. Xem thành tích toàn đội bóng
            4. Tìm Vua phá lưới
            0. Thoát`));
        switch (choice) {
            case 1:
                addPlayer(players, goals);
                break;
            case 2:
                showSquad();
                break;
            case 3:
                getTotalGoals();
                break;
            case 4:
                findMostGoals(goals);
                break;
            case 0:
                break;
            default:
        }
    } while (choice !== 0);
}
main();