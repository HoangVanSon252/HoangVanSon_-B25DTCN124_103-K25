const playerNames  = [
    'Messi',
    'Ronaldo',
    'Neymar',
    'De Bruyne',
    'Kante',
    'Van Dijk',
    'Alisson',
];
const getUpperNames  = (arr) =>{
    return console.log(arr.map(name => name.toUpperCase()));
}

getUpperNames(playerNames)