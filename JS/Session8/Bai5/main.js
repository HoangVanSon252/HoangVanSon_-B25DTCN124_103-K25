const players = [
    'Messi - Forward - 25 - 15',
    'Ronaldo - Forward - 30 - 10',
    'Neymar - Forward - 18 - 20',
    'De Bruyne - Midfielder - 8 - 25',
    'Kante - Midfielder - 2 - 5',
    'Van Dijk - Defender - 5 - 3',
    'Alisson - Goalkeeper - 0 - 1',
];

const reportTopPerformers  = (minPerformance, players ) =>{
    let tongHieuSuat = 0;
    players
    .filter(player =>{
        const el = player.split(' - ');
        const hieuSuat = Number(el[2]) + Number(el[3]);
        if (hieuSuat >= minPerformance) {
            tongHieuSuat += hieuSuat; 
            return true;
        }
        return false;
    })
    .map(player => {
        let el = player.split(' - ')
        hieuSuat = Number(el[2]) + Number(el[3]);
        return `${el[0]}: ${hieuSuat}`
    })
    .forEach(report => {
        console.log(report);
    })
    console.log(`Tổng hiệu suất: ${tongHieuSuat}`);
    
}
reportTopPerformers(30, players);