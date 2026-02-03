// 1. Khai báo 4 mảng rỗng
let booksId = [];
let booksName = [];
let booksCategory = [];
let inventoryQuantity = [];
let n = Number(prompt("Có bao nhiêu loại sách cần nhập thông tin hôm nay?"));
while (isNaN(n) || n <= 0) {
    n = Number(prompt("Số lượng phải là số nguyên dương. Vui lòng nhập lại:"));
}
for (let i = 0; i < n; i++) {
    console.log(`--- Nhập thông tin sách thứ ${i + 1} ---`);
    let ma = "";
    let isValid = false;
    while (!isValid) {
        ma = prompt(`Nhập mã sách thứ ${i + 1}:`);
        if (ma === null || ma.trim() === "") {
            alert("Mã sách không được để trống!");
        }
        else if (booksId.includes(ma)) {
            alert(`Mã sách "${ma}" đã tồn tại! Vui lòng nhập mã khác.`);
        }
        else {
            isValid = true;
        }
    }
    let ten = prompt(`Nhập tên sách thứ ${i + 1}:`);
    while (ten === null || ten.trim() === "") {
        ten = prompt("Tên sách không được để trống. Nhập lại:");
    }
    let theLoai = prompt(`Nhập các thể loại của sách thứ ${i + 1} (cách nhau bởi dấu phẩy):`);
    while (theLoai === null || theLoai.trim() === "") {
        theLoai = prompt("Thể loại không được để trống. Nhập lại:");
    }
    let soLuong = Number(prompt(`Nhập số lượng tồn kho của sách thứ ${i + 1}:`));
    while (isNaN(soLuong) || soLuong < 0) {
        soLuong = Number(prompt("Số lượng phải là số nguyên >= 0. Nhập lại:"));
    }
    booksId.push(ma);
    booksName.push(ten);
    booksCategory.push(theLoai);
    inventoryQuantity.push(soLuong);
}
let countLapTrinh = 0;
for (let i = 0; i < n; i++) {
    if (booksCategory[i].toLowerCase().includes("lập trình")) {
        countLapTrinh++;
    }
}
console.log(`Tổng số sách thuộc thể loại 'Lập trình': ${countLapTrinh}`);
console.log("Danh sách mã sách thuộc cả hai thể loại 'JavaScript' và 'Web':");
for (let i = 0; i < n; i++) {
    let categoryLowerCase = booksCategory[i].toLowerCase();
    if (categoryLowerCase.includes("javascript") && categoryLowerCase.includes("web")) {
        console.log(booksId[i]);
    }
}
let minQuantity = inventoryQuantity[0];
let minIndex = 0;

for (let i = 1; i < n; i++) {
    if (inventoryQuantity[i] < minQuantity) {
        minQuantity = inventoryQuantity[i];
        minIndex = i;
    }
}

console.log("Loại sách có số lượng tồn kho thấp nhất:");
console.log(`Mã sách: ${booksId[minIndex]}, Tên sách: ${booksName[minIndex]}, Tồn kho: ${inventoryQuantity[minIndex]}`);