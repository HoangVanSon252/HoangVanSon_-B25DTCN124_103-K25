let arr = [];
let soSach = Number(prompt('Bạn muốn trả bao nhiêu cuốn sách?'));
for (let i = 1; i <= soSach; i++) {
    let tenSach = prompt(`Nhập tên cuốn sách thứ ${i}`);
    arr.push(tenSach);
}
console.log(`Tổng số sách đã đc trả: ${soSach}`);
console.log('Danh sách sách đã trả:');
for (let i = 0; i < arr.length; i++) {
    console.log(`${i + 1}. ${arr[i]}`);
}