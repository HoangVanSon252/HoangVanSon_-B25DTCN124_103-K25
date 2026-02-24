let names = ['iPhone15', 'Samsung S23', 'Oppo Reno', 'Xiaomi 13', 'Nokia C20'];
let prices = [20000000, 15000000, 0, 10000000, 5000000];
let stocks = [10, 5, 0, 8, 15];

const locSanPham = (names, prices) =>{
    let arrName = [];
    const result = prices.filter((price, index) =>{
        if (price > 500000) {
            arrName.push(names[index]);
            return true;   
       }
       return false;
    });
    if (result.length > 0) {
        alert(`DANH SÁCH SẢN PHẨM CAO CẤP (>500k):
        ${arrName.join(', ')}`);
    } else {
        alert("Không tìm thấy sản phẩm nào.");
    }
    return result;
}

const kiemTraTrangThai = (stock) =>{
    const isSome = stock.some(value =>{
        return value === 0;
    });
    const isEvery = stock.every(value =>{
        return value > 100;
    })
    if (isSome || !isEvery) {
        alert(`Kết quả kiểm định:
            -Có sản phẩm hết hàng: Có
            -Tất cả sản phẩm trên 100: Sai
            `);
    }
    else{
        alert(`Kết quả kiểm định:
            -Có sản phẩm hết hàng: Không
            -Tất cả sản phẩm trên 100: đúng;
            `);
    }
}

const giaTriVonHoa = (price, stock) => {
    const tyGia = 26000;
    const totalVND = price.reduce((total, curentPrice, curentIndex) => {
        let curentStock = stock[curentIndex];
        return total + (curentPrice * curentStock);
    }, 0);
    const totalUSD = (totalVND / tyGia).toFixed(3);
    alert(`Tổng giá trị hiện có trong kho: ${Number(totalUSD).toLocaleString()} USD`);
}

const chietKhau = (price) => {
    price.forEach((elPrice, indexPrice) => {
        price[indexPrice] = elPrice * 0.9;
    });
    return alert('Đã cập nhật giảm giá 10% cho toàn bộ sản phẩm!');
}

const timKiem = (name, price, stock) =>{
    let input = prompt('Nhập tên sản phẩm cần tìm:').toLowerCase();
    const arrName = name.map((el, index) => index)
    .filter(index => names[index].toLowerCase().includes(input));
    if (arrName.length > 0) {
        let output = "Kết quả tìm kiếm:\n";
        arrName.forEach(index => {
            output += `${names[index]} - Giá: ${prices[index].toLocaleString()} - Kho: ${stocks[index]}\n`;
        });
        alert(output);
    } else {
        alert("Không tìm thấy sản phẩm nào!");
    }
}

const baoCaoTonKho = (arrName, arrStrock) =>{
    const reportList = names.map((name, index) => {
        let status = (arrStrock[index] > 0) ? "Còn hàng" : "Hết hàng";
        return `${name}: ${status} (${arrStrock[index]})`;
    });
    alert(`Báo cáo tồn kho:
        ${reportList.join("\n")}`);
}
let choice;
do {
    choice = Number(prompt(`----HỆ THỐNG QUẢN LÝ KHO HÀNG----
        1. Lọc sản phẩm cao cấp (>500)
        2. Kiểm định trạng thái dữ liệu(Hết hàng/Giá sàn)
        3. Phân tích giá trị vốn hóa (Tổng tài sản)
        4. Triển khai chiến dịch chiết khấu
        5. Truy vấn sản phẩm theo từ khóa
        6. Báo cáo tình trạng
        7. Thoát chương trình
        
        Vui lòng nhập lựa chọn của bạn(1-7):`));

    switch (choice) {
        case 1:
            locSanPham(names, prices);
            break;
        case 2:
            kiemTraTrangThai(stocks);
            break;
        case 3:
            giaTriVonHoa(prices, stocks);
            break;
        case 4:
            chietKhau(prices);
            break;
        case 5:
            timKiem(names, prices);
            break;
        case 6:
            baoCaoTonKho(names, stocks);
            break;
        case 7:
            break;
        default:
            break;
    }
} while (choice != 7);