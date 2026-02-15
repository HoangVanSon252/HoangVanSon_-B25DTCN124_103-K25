let players = [
    'P001-Nguyễn Văn A-Thủ môn',
    'P002-Trần Thị B-Hậu vệ',
    'P003-Lê Văn C-Hậu vệ',
    'P004-Phạm Văn D-Tiền vệ',
    'P005-Hoàng Thị E-Tiền đạo',
    'P006-Vũ Minh F-Tiền đạo',
    'P007-Đặng Văn G-Thủ môn'
];
const getAllPositions = (players) =>{
    let newArrPosition = [];
    for (const element of players) {
        let cut = element.split('-');
        position = cut[2].trim();
        if (!newArrPosition.includes(position)) {
            newArrPosition.push(position);
        }
    }
    return console.log(newArrPosition);
}
getAllPositions(players);

const findPlayersWithLongestName = () =>{
    let maxName;
    let arrName = [];
    let name;
    for (const element of players) {
        let cut = element.split('-');
        name = cut[1].trim();
        arrName.push(name);
    }
    maxName = arrName[0];
    for (let i = 0; i < arrName.length; i++) {
       if (arrName[i].length > maxName.length) {
            maxName = arrName[i];
        }
    }
    return console.log(maxName);
}
findPlayersWithLongestName();

const countPlayersStartingWithLetter = (letter) => {
    let count = 0;
    let searchChar = letter.toLowerCase(); 

    for (const player of players) {
        let cut = player.split('-');
        let name = cut[1].trim();
        
        if (name.toLowerCase().startsWith(searchChar)) {
            count++;
        }
    }

    return count;
}
let inputChar = 'a';

console.log(countPlayersStartingWithLetter(inputChar));
