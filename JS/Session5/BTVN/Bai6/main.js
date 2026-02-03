let readerCardIds = [];
let readerNames = [];
let borrowedBookCodes = [];
let overdueDays = [];
let n = Number(prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn?"));
while (isNaN(n) || n <= 0) {
    n = Number(prompt("Số lượng phải là số nguyên dương. Nhập lại:"));
}
for (let i = 0; i < n; i++) {
    console.log(`--- Nhập thông tin bạn đọc thứ ${i + 1} ---`);
    let maThe = "";
    let isValid = false;
    while (!isValid) {
        maThe = prompt(`Nhập mã thẻ bạn đọc thứ ${i + 1}:`);
        
        if (maThe === null || maThe.trim() === "") {
            alert("Mã thẻ không được để trống!");
        } 
        else if (readerCardIds.includes(maThe)) {
            alert(`Mã thẻ "${maThe}" bị trùng! Vui lòng nhập mã khác.`);
        } 
        else {
            isValid = true;
        }
    }
    let ten = prompt(`Nhập tên bạn đọc thứ ${i + 1}:`);
    while (ten === null || ten.trim() === "") {
        ten = prompt("Tên bạn đọc không được để trống. Nhập lại:");
    }
    let maSach = prompt(`Nhập các mã sách đang mượn (cách nhau bởi dấu phẩy):`);
    while (maSach === null || maSach.trim() === "") {
        maSach = prompt("Danh sách mã sách không được để trống. Nhập lại:");
    }
    let ngay = Number(prompt(`Nhập số ngày quá hạn của bạn ${ten}:`));
    while (isNaN(ngay) || ngay < 0) {
        ngay = Number(prompt("Số ngày quá hạn phải là số nguyên >= 0. Nhập lại:"));
    }
    readerCardIds.push(maThe);
    readerNames.push(ten);
    borrowedBookCodes.push(maSach);
    overdueDays.push(ngay);
}
console.log("\n================ KẾT QUẢ BÁO CÁO ================");
let countOver10 = 0;
for (let i = 0; i < n; i++) {
    if (overdueDays[i] >= 10) {
        countOver10++;
    }
}
console.log(`a. Tổng số bạn đọc quá hạn lâu (>= 10 ngày): ${countOver10} người`);
console.log("b. Các mã thẻ đang mượn cả sách 'JS' và 'PYT':");
let foundB = false;
for (let i = 0; i < n; i++) {
    let books = borrowedBookCodes[i].toUpperCase();
    if (books.includes("JS") && books.includes("PYT")) {
        console.log(`- Mã thẻ: ${readerCardIds[i]} (Tên: ${readerNames[i]})`);
        foundB = true;
    }
}
if (!foundB) console.log("  (Không tìm thấy ai)");
let maxDays = overdueDays[0];
let maxIndex = 0;

for (let i = 1; i < n; i++) {
    if (overdueDays[i] > maxDays) {
        maxDays = overdueDays[i];
        maxIndex = i;
    }
}
console.log("c. Bạn đọc có số ngày quá hạn cao nhất:");
console.log(`  Tên: ${readerNames[maxIndex]} - Quá hạn: ${overdueDays[maxIndex]} ngày`);
let countOver7 = 0;
for (let i = 0; i < n; i++) {
    if (overdueDays[i] >= 7) {
        countOver7++;
    }
}

console.log(`d. Cảnh báo hệ thống (Có ${countOver7} người quá hạn >= 7 ngày):`);
if (countOver7 === 0) {
    console.log("-> Tình hình trả sách hôm nay khá tốt!");
} else if (countOver7 >= 1 && countOver7 <= 4) {
    console.log("-> Cần gửi nhắc nhở cho một số bạn đọc!");
} else {
    console.log("-> Tình trạng quá hạn nghiêm trọng! Cần liên hệ ngay!");
}