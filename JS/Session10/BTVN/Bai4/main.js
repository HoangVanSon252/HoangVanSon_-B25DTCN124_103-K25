const playersInfo = [
  { name: "Messi", years: 18, salary: 100 },
  { name: "Ronaldo", years: 20, salary: 95 },
  { name: "Neymar", years: 12, salary: 90 },
  { name: "Mbappe", years: 7, salary: 85 },
  { name: "Haaland", years: 5, salary: 80 },
  { name: "Modric", years: 22, salary: 70 },
  { name: "Benzema", years: 19, salary: 75 },
];
const analyzeSalary = (minYears, teamPlayers) => {
  const filteredPlayers = teamPlayers.filter(
    (player) => player.years >= minYears,
  );
  if (filteredPlayers.length === 0) {
    const renderedInfo = `
{
    totalSalary: 0,
    highestPaid: null,
    lowestPaid: null
}`;
    console.log(renderedInfo);
    return renderedInfo;
  }
  const totalSalary = filteredPlayers.reduce(
    (total, player) => total + player.salary,
    0,
  );
  const highestPaid = filteredPlayers.reduce((highest, player) => {
    return player.salary > highest.salary ? player : highest;
  });
  const lowestPaid = filteredPlayers.reduce((lowest, player) => {
    return player.salary < lowest.salary ? player : lowest;
  });
  const result = {
    totalSalary: totalSalary,
    highestPaid: highestPaid,
    lowestPaid: lowestPaid,
  };
  console.log(result);
};
analyzeSalary(30, playersInfo);
