//Bai 1
let orders = [
    'Đơn hàng A',
    'Đơn hàng B',
    'Đơn hàng C',
    'Đơn hàng D',
    'Đơn hàng E'
];
let revenues = [1500, 2800, 1200, -500, 3200];

const kiemDinh = (revenue) =>{
    let kiemTraAm = revenue.some(el => el < 0);
    let kiemTraDuong = revenue.every(el => el > 500);
    console.log(`Có đơn hàng âm: ${kiemTraAm}
Tất cả trên 500: ${kiemTraDuong}
                `);
}
kiemDinh(revenues);
//Bai 2
//Cach 1
let netProfits = [];
const tinhToan = (revenue) =>{
    console.log('Lợi nhuận ròng:');
    let loiNhuanRong = revenue.forEach(el => {
        el = el * 0.9;
        netProfits.push(el);
    });
    console.log(netProfits);
}
tinhToan(revenues);

//Cách 2
console.log('Lợi nhuận ròng:');

let netProfit = revenues.map(el => el * 0.9);
console.log(netProfit);


