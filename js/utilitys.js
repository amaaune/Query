

const scores = [
  { name: "Alice", score: 9800 },
  { name: "Bernarde2e", score: 8450 },
  { name: "Bernarde3e", score: 840 },
  { name: "Bernard4e", score: 860 },
  { name: "Bernard5e", score: 760 },
  { name: "Bernard6e", score: 660 },
  { name: "Bernard7e", score: 760 },
  { name: "Bernard8e", score: 320 },
  { name: "Bernard9e", score: 230 },
  { name: "Bernard10e", score: 856 },
  { name: "Bernard11e", score: 130 }
];

const list = document.getElementById("leaderboard-list");

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

  function backBtn() {
    const overlay = document.getElementById('transition-overlay');
    overlay.classList.add('active');
    setTimeout(() => {
        window.location.href = '../index.html';
    }, 600);
};