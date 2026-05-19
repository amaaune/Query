
function startGame() {
    saveSystem.fullReset();
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
        window.location.href = 'src/leaderboard.html';
    }, 600);
};

function backBtn() {
    const overlay = document.getElementById('transition-overlay');
    overlay.classList.add('active');
    setTimeout(() => {
        window.location.href = '/index.html';
    }, 600);
};

function saveGame() {
    if (typeof currentBossIndex === "undefined") return;
    saveSystem.save({
        currentBossIndex: currentBossIndex,
        playerLives: playerLives,
        score: score,
        deathCount: deathCount,
        bossPv: bosses[currentBossIndex].pv
    });
    const overlay = document.getElementById('transition-overlay');
    overlay.classList.add('active');
    setTimeout(() => {
        window.location.href = '../index.html';
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
};

function closeGame() {
    const overlay = document.getElementById('transition-overlay');
    if (overlay) {
        overlay.classList.add('active');
        setTimeout(() => {
            window.location.href = '/src/quit.html';
        }, 600);
    } else {
        window.location.href = '/src/quit.html';
    }
};

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


function initVolumeSlider() {
    const track = document.getElementById("slider-track");
    if (!track) return;

    const cursor = document.getElementById("slider-cursor");
    const valueLabel = document.getElementById("volume-value");
    let isDragging = false;

    function updateVolume(e) {
    const rect = track.getBoundingClientRect();

    // marge correspondant aux bordures décoratives
    const padding = 28;

    // largeur réellement utilisable
    const usableWidth = rect.width - (padding * 2);

    // position souris relative à la zone utile
    let x = e.clientX - rect.left - padding;

    // clamp
    x = Math.max(0, Math.min(usableWidth, x));

    // ratio réel
    const ratio = x / usableWidth;

    // position du curseur
    cursor.style.left = (padding + x) + "px";

    // texte
    valueLabel.innerHTML = Math.round(ratio * 100) + "%";

    // volume
    if (audioManager.sounds.ambient) {
        audioManager.sounds.ambient.volume = ratio;
    }
}

    track.addEventListener("mousedown", (e) => {
        isDragging = true;
        updateVolume(e);
    });

    document.addEventListener("mousemove", (e) => {
        if (isDragging) updateVolume(e);
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
    });
};

document.addEventListener("DOMContentLoaded", () => {
    handleContinueButton();
    animateMenuButtons();
    initVolumeSlider();
});
