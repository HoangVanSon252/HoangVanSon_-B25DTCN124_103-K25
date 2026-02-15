let players = [
    'P001-Nguyễn Văn A-Thủ môn',
    'P002-Trần Thị B-Hậu vệ',
    'P003-Lê Văn C-Hậu vệ',
    'P004-Phạm Văn D-Tiền vệ',
    'P005-Hoàng Thị E-Tiền đạo',
    'P006-Vũ Minh F-Tiền đạo',
    'P007-Đặng Văn G-Thủ môn'
];
const getShortestPlayerName = () => {
    if (players.length === 0) return "";

    let shortestName = players[0].split('-')[1].trim();

    for (const player of players) {
        let currentName = player.split('-')[1].trim();
        if (currentName.length < shortestName.length) {
            shortestName = currentName;
        }
    }
    return shortestName;
}

const countPlayersWithPositionLengthGreaterThan = (length) => {
    let count = 0;
    for (const player of players) {
        let position = player.split('-')[2].trim();
        if (position.length > length) {
            count++;
        }
    }
    return count;
}
let tenNganNhat = getShortestPlayerName();
console.log(`Cầu thủ có tên ngắn nhất là: "${tenNganNhat}" (Độ dài: ${tenNganNhat.length})`);
let soLuong = countPlayersWithPositionLengthGreaterThan(6);
console.log(`Số cầu thủ có tên vị trí dài hơn 6 ký tự: ${soLuong}`);