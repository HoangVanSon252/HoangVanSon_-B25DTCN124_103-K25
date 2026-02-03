let arr = [];
let soSach = parseInt(prompt('Hôm nay bạn có bao nhiêu cuốn sách bị trả muộn?'));
while (soSach < 0 || isNaN(soSach)) {
    soSach = parseInt(prompt('Hôm nay bạn có bao nhiêu cuốn sách bị trả muộn?'));
}
for (let i = 1; i <= soSach; i++) {
    let tenSach = prompt(`Nhập tên cuốn sách bị trả muộn thứ ${i}:`)
    arr.push(tenSach);
}
console.log(`Tổng số sách bị trả muộn: ${soSach}`);
console.log('Danh sách sách bị trả muộn:');

for (let i = 0; i < arr.length; i++) {
    console.log(`${i + 1}. ${arr[i]}`);
}
let count = 0;
for (const element of arr) {
    if (element.length > 20 ) {
        count++;
    }
}
console.log(`Số lượng sách có tên dài hơn 20 ký tự: ${count}`);