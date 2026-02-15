let playerIds = ['P001', 'P002', 'P003', 'P004', 'P005'];
let playerNames = [
    'Nguyễn Văn A',
    'Trần Thị B',
    'Lê Văn C',
    'Phạm Văn D',
    'Hoàng Thị E'
];
let playerJerseyNumbers = [10, 7, 8, 9, 11];
let kiemTraTonTai;
let inputId;
let newName;
let newShirtNumber;
do {
    kiemTraTonTai = false;
    inputId = prompt('Nhập mã cầu thủ muốn cập nhật (ví dụ: P001):');
    for (const element of playerIds) {
        if (inputId === element) {
            kiemTraTonTai = true;
        }
    }
} while (inputId.trim() == '');

if (kiemTraTonTai) {
    do {
        newName = prompt('Nhập tên mới cho cầu thủ');
    } while (newName.trim() == '' );
    do {
        newShirtNumber = prompt('Nhập số áo cho cầu thủ');
    } while (newShirtNumber.trim() === '' || Number(newShirtNumber) < 0 || isNaN(newShirtNumber));
    
    const printTeamRoster = () =>{
        for (let i = 0; i < playerIds.length; i++) {
            console.log(`${i+1}. ${playerIds[i]} - ${playerNames[i]} - ${playerJerseyNumbers[i]}`);
        }
    }
    printTeamRoster();
    console.log('Danh sách sau khi cập nhật mới');
    
    const updatePlayerNameAndJersey = (playerId, newName, newJerseyNumber) =>{
        for (let i = 0; i < playerIds.length; i++) {
            let index = playerIds.indexOf(playerId);
            if (index !== -1) {
                playerNames[index] = newName;
                playerJerseyNumbers[index] = newJerseyNumber;
            }else{
                console.log('Không tìm thấy mã cầu thủ');
                return false;
            }
        }
        printTeamRoster();
    }
    updatePlayerNameAndJersey(inputId, newName, newShirtNumber);
}else{
    alert('Không tìm thấy cầu thủ với mã này!');
}