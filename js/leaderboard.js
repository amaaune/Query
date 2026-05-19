const defaultScores = [
  { name: "Ima", score: 4444 }
];

const savedScores = JSON.parse(localStorage.getItem("leaderboard") || "[]");
const scores = [...defaultScores, ...savedScores];

const list = document.getElementById("leaderboard-list");

if (list) {
  scores
    .sort((a, b) => b.score - a.score)
    .slice(0, 10)
    .forEach((entry, i) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="lb-rank">${i + 1}</span>
        <span class="lb-name">${entry.name}</span>
        <span class="lb-filler"></span>
        <span class="lb-score">${entry.score.toLocaleString('fr-FR')} pts</span>
      `;
      list.appendChild(li);
    });
};
