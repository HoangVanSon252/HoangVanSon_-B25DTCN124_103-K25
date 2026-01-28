let tenSach = prompt("Nhap ten sach");
tenSach.trim().toUpperCase();
let tenTacGia = prompt("Nhap ten tac gia");
tenTacGia.toUpperCase();
let namXuatBan = Number(prompt("Nhap nam xuat ban"));
let giaTienSach = Number(prompt("Nhap gia tien sach"));
let soLuongNhap = Number(prompt("So luong nhap kho"));
let soNgauNhien = parseInt(Math.random()*1000);
let namHienTai = Number(new Date().getFullYear());
let maSach = `${tenTacGia.slice(0,4)}${namXuatBan} - ${soNgauNhien}`
console.log(`
        -----PHIẾU NHẬP KHO-----
        Mã sách : ${maSach}
        Tên sách: ${tenSach}
        Tác giả: ${tenTacGia}
        Năm xuất bản: ${namXuatBan}
        Tuổi sách: ${namHienTai - namXuatBan} năm
        Tổng giá trị: ${giaTienSach * soLuongNhap}
        Ngăn kệ gợi ý: kệ số ${parseInt(Math.random() * 10)}
    `);
