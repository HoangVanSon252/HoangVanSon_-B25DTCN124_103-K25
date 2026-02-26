const players = [
  {
    name: "Messi",
    position: "Forward",
    age: 36,
    goals: 25,
    assists: 15,
    matches: 34,
    yellowCards: 2,
  },
  {
    name: "Ronaldo",
    position: "Forward",
    age: 39,
    goals: 30,
    assists: 10,
    matches: 38,
    yellowCards: 4,
  },
  {
    name: "Neymar",
    position: "Forward",
    age: 32,
    goals: 18,
    assists: 20,
    matches: 32,
    yellowCards: 3,
  },
  {
    name: "De Bruyne",
    position: "Midfielder",
    age: 33,
    goals: 8,
    assists: 25,
    matches: 35,
    yellowCards: 1,
  },
  {
    name: "Kante",
    position: "Midfielder",
    age: 33,
    goals: 2,
    assists: 5,
    matches: 36,
    yellowCards: 0,
  },
  {
    name: "Van Dijk",
    position: "Defender",
    age: 33,
    goals: 5,
    assists: 3,
    matches: 33,
    yellowCards: 2,
  },
  {
    name: "Alisson",
    position: "Goalkeeper",
    age: 31,
    goals: 0,
    assists: 1,
    matches: 37,
    yellowCards: 0,
  },
];

function generateRankingReport(minMatches, players) {
  const qualifiedPlayers = players.filter((p) => p.matches >= minMatches);
  const playersWithScores = qualifiedPlayers.map((p) => {
    const performanceScore =
      Math.round(((p.goals + p.assists) / p.matches) * 100) / 100;
    const efficiencyScore =
      Math.round((performanceScore - (p.yellowCards / p.matches) * 10) * 100) /
      100;

    return { ...p, performanceScore, efficiencyScore };
  });
  playersWithScores.sort((a, b) => {
    if (b.efficiencyScore !== a.efficiencyScore) {
      return b.efficiencyScore - a.efficiencyScore;
    }
    if (b.performanceScore !== a.performanceScore) {
      return b.performanceScore - a.performanceScore;
    }
    if (b.goals !== a.goals) {
      return b.goals - a.goals;
    }
    return 0;
  });
  console.log(`XẾP HẠNG ĐỘI BÓNG (từ ${minMatches} trận trở lên)`);

  playersWithScores.forEach((p, index) => {
    const namePad = p.name.padEnd(10, " ");
    const eff = p.efficiencyScore.toFixed(2);
    const perf = p.performanceScore.toFixed(2);

    console.log(
      `${index + 1}. ${namePad} - Efficiency: ${eff} | Performance: ${perf} | Goals: ${p.goals}`,
    );
  });

  const totalRanked = playersWithScores.length;
  console.log(`Tổng số cầu thủ xếp hạng: ${totalRanked}`);

  if (totalRanked > 0) {
    console.log(`Cầu thủ xuất sắc nhất: ${playersWithScores[0].name}`);
    const topN = Math.min(3, totalRanked);
    const topPlayers = playersWithScores.slice(0, topN);
    const sumEfficiency = topPlayers.reduce(
      (sum, p) => sum + p.efficiencyScore,
      0,
    );
    const avgTopEfficiency = (sumEfficiency / topN).toFixed(2);

    console.log(`Trung bình efficiency top ${topN}: ${avgTopEfficiency}`);
  }
}

generateRankingReport(30, players);
