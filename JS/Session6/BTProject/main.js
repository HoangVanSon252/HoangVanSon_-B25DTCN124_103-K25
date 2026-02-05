let taiKhoan = prompt('Tên đăng nhập:');
let matKhau = Number(prompt('Mật khẩu:'));
isLog = false;
for (let i = 3; i > 1; i--) {
    if(taiKhoan !== 'admin' && matKhau !== 12345){
        alert(`Sai tài khoản! Còn ${i - 1} lần thử.`);
        let taiKhoan = prompt('Tên đăng nhập:');
        let matKhau = Number(prompt('Mật khẩu:'));
    }else{
        alert('Đăng nhập thành công!');
        isLog = true;
        break;
    }
}
let library = [];
if (isLog) {
    let choice;
    do {
        choice = Number(prompt(`---HỆ THỐNG QUẢN TRỊ VIÊN THƯ VIỆN 4.0---
            1. Nhập thêm lô sách mới.
            2. Hiển thị danh sách sách.
            3. Tìm kiếm sách.
            4. Cập nhật tên sách.
            5. Đảo ngược thứ tự kệ sách.
            6. Nhập kho từ nguồn khác.
            7. Thoát chương trình.
        `))
        switch (choice) {
            case 1:
                let inputString = prompt("Nhập danh sách tên sách (cách nhau bởi dấu phẩy):");
                let newBooks = inputString.split(",");
                for (let i = 0; i < newBooks.length; i++) {
                    library.push(newBooks[i].trim());
                }
                alert(`Đã thêm thành công ${newBooks.length} cuốn sách mới.`);
                break;
            case 2:
                alert('Danh sách đã được in ra console (F12).');
                console.log('---danh sach hien thi la---');
                
                for (let i = 0; i < library.length; i++) {
                    console.log(`${i + 1}. ${library[i]}`);
                }
                break;
            case 3:
                let searchName = prompt("Nhập tên sách cần tìm:");
                let foundIndex = library.indexOf(searchName.trim());
                if (foundIndex !== -1) {
                    alert(`Sách ${searchName} được tìm thấy tại vị trí số ${foundIndex} trong mảng`);
                } else {
                    alert('Không tìm thấy sách "" trong kho.');
                }
                break;
            case 4:
                let oldName = prompt("Nhập tên sách cần sửa:");
                let editIndex = library.indexOf(oldName.trim());
                if (editIndex !== -1) {
                    let newName = prompt(`Tìm thấy sách "${oldName}". Nhập tên mới:`);
                    library[editIndex] = newName.trim();
                    alert("Cập nhật thành công!");
                } else {
                    alert('Không tìm thấy sách "" trong kho.');
                }
                break;
            case 5:
                library.reverse();
                alert('Thứ tự trên kệ đã thay đổi. Kiểm tra console.')
                console.log("--- danh sach dao nguoc ---");
                for (let i = 0; i < library.length; i++) {
                    console.log(`Index ${i}: ${library[i]}`);
                }
                break;
            case 6:
                let branchBooks = ["Sách Kỹ Năng", "Truyện Tranh"];
                library = library.concat(branchBooks);
                alert("Đã gộp kho sách từ chi nhánh khác thành công.");
                break;
            case 7:
                alert('Hẹn gặp lại!')
                break;
            default:
                alert('Lựa chọn không hợp lệ!');
        }
    } while (choice !== 7);
}