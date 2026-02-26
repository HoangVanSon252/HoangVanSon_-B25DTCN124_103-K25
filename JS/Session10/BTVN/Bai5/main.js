const teamHistory = [
  {
    name: "Messi",
    position: "Forward",
    nationality: "Argentina",
    seasons: {
      "2022-2023": { matches: 34, goals: 21, assists: 14, yellowCards: 3 },
      "2023-2024": { matches: 32, goals: 25, assists: 15, yellowCards: 2 },
      "2024-2025": { matches: 28, goals: 18, assists: 12, yellowCards: 1 },
    },
  },
  {
    name: "Ronaldo",
    position: "Forward",
    nationality: "Portugal",
    seasons: {
      "2022-2023": { matches: 38, goals: 28, assists: 8, yellowCards: 5 },
      "2023-2024": { matches: 35, goals: 30, assists: 10, yellowCards: 4 },
      "2024-2025": { matches: 30, goals: 22, assists: 9, yellowCards: 3 },
    },
  },
];
const generatePlayerSeasonReport = (playerName, teamHistory) => {
  const player = teamHistory.find((p) => p.name === playerName);
  if (!player) {
    console.log(`Không tìm thấy cầu thủ ${playerName}`);
    return;
  } else {
    totalMatches = Object.values(player.seasons).reduce(
      (total, season) => total + season.matches,
      0,
    );
    const totalGoals = Object.values(player.seasons).reduce(
      (total, season) => total + season.goals,
      0,
    );
    const totalAssists = Object.values(player.seasons).reduce(
      (total, season) => total + season.assists,
      0,
    );
    const totalYellowCards = Object.values(player.seasons).reduce(
      (total, season) => total + season.yellowCards,
      0,
    );
    const averageGoalsPerMatch =
      totalMatches > 0 ? (totalGoals / totalMatches).toFixed(2) : 0;
    const averageAssistsPerMatch =
      totalMatches > 0 ? (totalAssists / totalMatches).toFixed(2) : 0;
    let bestSeason = null;
    let maxGoals = -1;
    for (const [seasonName, stats] of Object.entries(player.seasons)) {
      if (stats.goals > maxGoals) {
        maxGoals = stats.goals;
        bestSeason = {
          season: seasonName,
          goals: stats.goals,
          assists: stats.assists,
        };
      }
    }
    newObject = {
      name: player.name,

      position: player.position,

      nationality: player.nationality,

      careerStats: {
        totalMatches: totalMatches,

        totalGoals: totalGoals,

        totalAssists: totalAssists,

        totalYellowCards: totalYellowCards,

        averageGoalsPerMatch: averageGoalsPerMatch,

        averageAssistsPerMatch: averageAssistsPerMatch,

        bestSeason: {
          season: bestSeason.season,

          goals: bestSeason.goals,

          assists: bestSeason.assists,
        },
      },
    };
  }
  return console.log(newObject);
};
generatePlayerSeasonReport("Messi", teamHistory);
