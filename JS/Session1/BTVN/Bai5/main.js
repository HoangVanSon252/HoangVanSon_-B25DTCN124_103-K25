let tenSach = prompt('Nhap ten sach');
let namXuatBan = Number(prompt('Nhap nam xuat ban!'))
let namHienTai = Number(new Date().getFullYear());
let tuoiSach = namHienTai - namXuatBan;
console.log(`Tuoi sach = ${tuoiSach}`);

