
function startGame() {
    const overlay = document.getElementById('transition-overlay');
    overlay.classList.add('active');
    setTimeout(() => {
        window.location.href = 'src/game.html';
    }, 600);
};

function gameOver() {
    const overlay = document.getElementById('transition-overlay');
    overlay.classList.add('active');
    setTimeout(() => {
        window.location.href = 'gameOver.html';
    }, 600);
};

function openLeaderboard() {
    const overlay = document.getElementById('transition-overlay');
    overlay.classList.add('active');
    setTimeout(() => {
        window.location.href = 'src/leaderboard.html'; // à créer
    }, 600);
};

function quitGame() {
    const overlay = document.getElementById('transition-overlay');
    const isInGame = window.location.pathname.includes('/src/');
    const isGameOver = window.location.pathname.includes('gameOver.html')

    const redirect = (destination) => {
        if (overlay) {
            overlay.classList.add('active');
            setTimeout(() => { window.location.href = destination; }, 600);
        } else {
            window.location.href = destination;
        }
    };

    if (isGameOver) {
        // Depuis gameOver.html → retour à l'accueil
        redirect('../index.html');
    } else if (isInGame) {
        // Depuis game.html → retour à l'accueil
        redirect('../index.html');
    } else {
        // Depuis index.html → on ne peut pas vraiment quitter
        showQuitScreen();
    }
};

function showQuitScreen() {
    document.body.innerHTML = `
        <div style="
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background: #000;
            font-family: 'Cinzel', serif;
            color: #c8a96e;
            text-align: center;
            gap: 24px;
        ">
            <h1 style="font-size: 2rem; letter-spacing: 0.2em;">QUERY</h1>
            <p style="letter-spacing: 0.15em; opacity: 0.6;">Merci d'avoir joué.</p>
        </div>
    `;
};


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