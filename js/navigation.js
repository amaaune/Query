
function startGame() {
    const overlay = document.getElementById('transition-overlay');
    overlay.classList.add('active');
    setTimeout(() => {
        window.location.href = 'src/game.html';
    }, 600);
};

function continueGame() {
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
    const isGameOver = window.location.pathname.includes('gameOver.html');

    const redirect = (destination) => {
        if (overlay) {
            overlay.classList.add('active');
            setTimeout(() => {
                window.location.href = destination;
            }, 600);
        } else {
            window.location.href = destination;
        }
    };

    if (isGameOver || isInGame) {
        redirect('../index.html');
    } else {
        closeGame();
    }
}

function closeGame() {
    // Tentative de fermeture
    window.close();

    // Fallback si le navigateur refuse
    setTimeout(() => {
        document.body.innerHTML = `
            <div style="
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:center;
                height:100vh;
                background:#000;
                color:#c8a96e;
                font-family:'Cinzel', serif;
                text-align:center;
                gap:24px;
            ">
                <h1 style="font-size:2rem; letter-spacing:0.2em;">
                    QUERY
                </h1>

                <p style="opacity:0.7; letter-spacing:0.1em;">
                    Vous pouvez maintenant fermer cet onglet.
                </p>

                <button onclick="window.close()" style="
                    padding:12px 24px;
                    background:#c8a96e;
                    border:none;
                    cursor:pointer;
                    font-family:'Cinzel', serif;
                ">
                    Fermer
                </button>
            </div>
        `;
    }, 100);
}

function handleContinueButton() {
    const continueBtn = document.getElementById("continue-btn");

    if (!continueBtn) return;

    if (localStorage.getItem("querySave")) {
        continueBtn.classList.remove("hidden-btn");
    } else {
        continueBtn.classList.add("hidden-btn");
    }
};

function animateMenuButtons() {
    const buttons = document.querySelectorAll("#buttons .menu-btn");

    let delay = 0.9;

    buttons.forEach(btn => {
        if (btn.classList.contains("hidden-btn")) return;

        btn.style.animationDelay = delay + "s";
        delay += 0.2;
    });
};

document.addEventListener("DOMContentLoaded", () => {
    handleContinueButton();
    animateMenuButtons();
});
