const player = {
  name: "De Bruyne",
  position: "Midfielder",
  goals: 8,
  assists: 25,
  matchesPlayed: 35,
};
const addPerformanceScore = (player) => {
  isKeyPlayer = false;
  performancePerMatch = (player.goals + player.assists) / player.matchesPlayed;
  if (performancePerMatch >= 1) {
    isKeyPlayer = true;
  }
  console.log(`
    name: ${player.name},
    position: ${player.position},
    goals: ${player.goals},
    assists: ${player.assists},
    matchesPlayed: ${player.matchesPlayed},
    performancePerMatch: ${performancePerMatch.toFixed(2)},
    isKeyPlayer: ${isKeyPlayer}
    `);
};
addPerformanceScore(player);
