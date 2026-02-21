const players = [
    'Messi - Forward - 25',
    'Ronaldo - Forward - 30',
    'Neymar - Forward - 18',
    'De Bruyne - Midfielder - 8',
    'Kante - Midfielder - 2',
    'Van Dijk - Defender - 5',
    'Alisson - Goalkeeper - 0',
];


const getReversedNames = (arr) =>{
    return arr.map(namePlayer =>{
        const newArr = namePlayer.split(' - ')[0];
        return newArr
    }).reverse();
}
console.log(getReversedNames(players));
