const savedState = saveSystem.load();
let score = savedState.score;
let currentBossIndex = savedState.currentBossIndex;
let playerLives = savedState.playerLives;
let deathCount = savedState.deathCount;
const bossName = document.getElementById("boss-name");
const bossPv = document.getElementById("boss-pv");
const playerPv = document.getElementById("player-pv");
const bossPvFill = document.getElementById("boss-pv-fill");
const bossImg = document.getElementById("boss-img");

function displayGameWin() {
    localStorage.setItem("queryStats", JSON.stringify({ score: score, deathCount: deathCount }));
    saveSystem.fullReset();
    const overlay = document.getElementById("transition-overlay");
    overlay.classList.add("active");
    setTimeout(() => {
        window.location.href = "victory.html";
    }, 600);
};

function updateHUD() {
    bossName.innerHTML = bosses[currentBossIndex].name;
    bossPv.innerHTML = bosses[currentBossIndex].pv + "/" + bossPvMax;
    bossPvFill.style.width = (bosses[currentBossIndex].pv / bossPvMax * 100) + "%";
    bossImg.src = bosses[currentBossIndex].img;
    playerPv.innerHTML = "";
    for (let i = 0; i < playerLives; i++) {
    playerPv.innerHTML += "❤️";
    }
};

function nextBoss() {
    currentBossIndex++  
    if (currentBossIndex < bosses.length) {
        gameRun();
    } else  {
        displayGameWin();
    }
};

function triggerGameOver() {
    deathCount++;
    saveSystem.fullReset();
    localStorage.setItem("queryStats", JSON.stringify({ deathCount, score }));
    gameOver();
};

function gameRun() {
    let level = [...selectQuestion(bosses[currentBossIndex].level)];
    bossPvMax = bosses[currentBossIndex].pv;
    if (savedState.bossPv !== null) {
        bosses[currentBossIndex].pv = savedState.bossPv;
        savedState.bossPv = null;
    }
    currentDb = level;
    updateHUD();
    displayQuestion(level);
};

gameRun();