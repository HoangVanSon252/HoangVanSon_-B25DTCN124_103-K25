let players = [];
let viTri = ['', 'Thủ môn', 'Hậu vệ', 'Tiền vệ', 'Tiền Đạo'];
let number;
do {
    number = Number(prompt('Có bao nhiêu cầu thủ cần nhập vào đội bóng?'));
} while (isNaN(number) || number <= 0);
const kiemTra = (checkId) => {
    for (const element of players) {
        let parts = element.split('-'); 
        let existingId = parts[0].trim();
        
        if (existingId === checkId) {
            alert(`Mã cầu thủ ${checkId} đã tồn tại vui lòng nhập lại!`);
            return true;
        }
    }
    return false;
}
const input = () =>{
    for (let i = 0; i < number; i++) {
        let id, name, posIndex;
        alert(`Nhập cầu thủ thứ ${i + 1}`);
        let isDuplicate = false;
        do {
            id = prompt(`Cầu thủ thứ ${i + 1} - Nhập Mã (VD: P01):`);
            if (id === null || id.trim() === "") {
                alert("Mã không được để trống!");
                id = ""; 
                isDuplicate = false;
            } else {
                isDuplicate = kiemTra(id.trim());
            }
        } while (id === "" || isDuplicate);
        do {
            name = prompt(`Cầu thủ thứ ${i + 1} - Nhập tên cầu thủ:`);
            if (name === null || name.trim() === "") {
                alert("Tên không được để trống!");
                name = "";
            }
        } while (name === "");
        do {
            posIndex = prompt(`Cầu thủ thứ ${i + 1} - Nhập vị trí cầu thủ(1:Thủ môn, 2:Hậu vệ, 3:Tiền vệ, 4:Tiền Đạo):`);
            if (posIndex === null || posIndex.trim() === "" || posIndex > 4) {
                alert("Vị trí không được để trống!");
                posIndex = "";
            }
        } while (posIndex === "" );
        players.push(`${id} - ${name} - ${viTri[posIndex]}`);
    }
}
input();

const show = () =>{
    let count = 1;
    for (const element of players) {
        console.log(`${count++}. ${element}`);  
    }
}
show();
console.log('Danh sách sau khi thêm');

const add = (id, name,position) =>{
    do {
        id = prompt(`Nhập mã cầu thủ thêm - Nhập Mã (VD: P01):`);
        if (id === null || id.trim() === "") {
            alert("Mã không được để trống!");
            id = ""; 
            isDuplicate = false;
        } else {
            isDuplicate = kiemTra(id.trim());
        }
    } while (id === "" || isDuplicate);
    do {
        name = prompt(`Nhập tên cầu thủ thêm:`);
        if (name === null || name.trim() === "") {
            alert("Tên không được để trống!");
            name = "";
        }
    } while (name === "");
    do {
        position = prompt(`Nhập vị trí cầu thủ thêm(1:Thủ môn, 2:Hậu vệ, 3:Tiền vệ, 4:Tiền Đạo):`);
        if (position === null || position.trim() === "" || position > 4) {
            alert("Vị trí không được để trống!");
            position = "";
        }
    } while (position === "" );
    players.push(`${id} - ${name} - ${viTri[position]}`);
    show();
}
add();
