let score = 0;
let currentBossIndex = 0;
let playerLives = 3;
let deathCount = 0;
let bossPvMax = 0;
const bossName = document.getElementById("boss-name");
const bossPv = document.getElementById("boss-pv");
const playerPv = document.getElementById("player-pv");
const bossPvFill = document.getElementById("boss-pv-fill");

function displayGameWin() {
    alert("!!!! VICTORY !!!!");
};

function updateHUD() {
    bossName.innerHTML = bosses[currentBossIndex].name;
    bossPv.innerHTML = bosses[currentBossIndex].pv + "/" + bossPvMax;
    bossPvFill.style.width = (bosses[currentBossIndex].pv / bossPvMax * 100) + "%";
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

function gameRun() {
    let level = selectQuestion(bosses[currentBossIndex].level);
    bossPvMax = bosses[currentBossIndex].pv;
    updateHUD();
    displayQuestion(level);
};

gameRun();