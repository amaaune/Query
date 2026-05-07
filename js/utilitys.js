
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
