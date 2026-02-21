const players = [
    'Messi - Forward - 25 - 15 - 34',
    'Ronaldo - Forward - 30 - 10 - 38',
    'Neymar - Forward - 18 - 20 - 32',
    'De Bruyne - Midfielder - 8 - 25 - 35',
    'Kante - Midfielder - 2 - 5 - 35',
    'Van Dijk - Defender - 5 - 3 - 33',
    'Alisson - Goalkeeper - 0 - 1 - 37',
];

const reportByPosition = (players) => {
    const minGoals = 5; // Ví dụ ngưỡng bàn thắng là 5
    const positions = ["Forward", "Midfielder", "Defender", "Goalkeeper"];
    let tongBanThangToanDoi = 0;

    console.log("BÁO CÁO HIỆU SUẤT THEO VỊ TRÍ");
    positions.forEach(pos => {
        let soCauThu = 0;
        let tongGoals = 0;
        let tongAssists = 0;
        let tongMatches = 0;

        players
            .map(p => {
                const el = p.split(' - ');
                return [el[0], el[1], Number(el[2]), Number(el[3]), Number(el[4])];
            })
            .filter(p => p[1] === pos && p[2] >= minGoals)
            .forEach(p => {
                soCauThu++;
                tongGoals += p[2];
                tongAssists += p[3];
                tongMatches += p[4];
                tongBanThangToanDoi += p[2];
            });
        if (soCauThu > 0) {
            const hieuSuatTrungBinh = ((tongGoals + tongAssists) / tongMatches).toFixed(2);
            
            console.log(`\n${pos}:`);
            console.log(`- Số cầu thủ: ${soCauThu}`);
            console.log(`- Tổng bàn thắng: ${tongGoals}`);
            console.log(`- Tổng kiến tạo: ${tongAssists}`);
            console.log(`- Tổng số trận: ${tongMatches}`);
            console.log(`- Trung bình hiệu suất/trận: ${hieuSuatTrungBinh}`);
        }
    });

    console.log("\n------------------------");
    console.log(`Tổng bàn thắng toàn đội : ${tongBanThangToanDoi}`);
};

reportByPosition(players);