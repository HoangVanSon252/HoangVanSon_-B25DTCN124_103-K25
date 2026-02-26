const player = {
    name: "Messi",
    position: "Forward",
    age: 36,
    goals: 25,
    assists: 15
}
const showPlayerInfo = (player) => {
    for (const key in player) {
        console.log(`
            Tên: ${player.name}
            Vi tri: ${player.position}
            Tuoi: ${player.age}
            Bàn thắng mùa nay: ${player.goals}
            Kiến tạo mùa nay: ${player.assists}
            
            Tổng đóng góp : ${player.goals + player.assists}`);
            break;
    }
}
showPlayerInfo(player);