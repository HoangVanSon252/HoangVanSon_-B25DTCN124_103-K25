let players = [
    'P001-Nguyễn Văn A-Thủ môn',
    'P002-Trần Thị B-Hậu vệ',
    'P003-Lê Văn C-Hậu vệ',
    'P004-Phạm Văn D-Tiền vệ',
    'P005-Hoàng Thị E-Tiền đạo',
    'P006-Vũ Minh F-Tiền đạo',
    'P007-Đặng Văn G-Thủ môn'
];
const printTeamRoster = ()=>{
    let count = 1;
    console.log('STT    | Ma | Ten | Vi Tri');
    for (const element of players) {
        let cut = element.split('-');
        let id = cut[0];
        let name = cut[1];
        let position = cut[2];
        console.log(`${count++}   | ${id} | ${name}   | ${position}`);
    }
}
printTeamRoster();

let tienDao = 0, hauVe = 0, thuMon = 0;
const countPlayerByPostion = (players) =>{

    tienDao = 0; 
    hauVe = 0;
    thuMon = 0;
    for (const element of players) {
        let cut = element.split('-');
        if (cut[2].trim() ==='Thủ môn') {
            thuMon++;
        }else if(cut[2].trim() === 'Hậu vệ'){
            hauVe++;
        }else if(cut[2].trim() === 'Tiền đạo'){
            tienDao++;
        }
    }
    console.log(`“Tiền Đạo” : ${tienDao} , “Hậu Vệ” : ${hauVe} , “Thủ Môn” : ${thuMon}`);
    
}
countPlayerByPostion(players);

const hasGoalkeeper = (players)=>{
    let hasGoalkeeper = true;
    console.log('danh sach day:');
    
    countPlayerByPostion(players);
    if (thuMon < 1) {
        hasGoalkeeper = false;
        console.log(hasGoalkeeper);
    }
    console.log(hasGoalkeeper);   
}
hasGoalkeeper(players);