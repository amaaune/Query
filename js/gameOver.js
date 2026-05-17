const savedState = saveSystem.load();
const deathCount = savedState.deathCount;
const finalScore = savedState.score;

// Affiche le message de mort selon le nombre de morts
const msgIndex = Math.min(deathCount, death.length - 1);
document.getElementById("death-msg").innerHTML = death[msgIndex];
document.getElementById("score").innerHTML = "Score : " + finalScore;

// Boutons
document.getElementById("replay-btn").addEventListener("click", () => {
    const overlay = document.getElementById("transition-overlay");
    overlay.classList.add("active");
    setTimeout(() => {
        window.location.href = "game.html";
    }, 600);
});

document.getElementById("quit-btn").addEventListener("click", () => {
    localStorage.removeItem("deathCount");
    localStorage.removeItem("score");
    const overlay = document.getElementById("transition-overlay");
    overlay.classList.add("active");
    setTimeout(() => {
        window.location.href = "../index.html";
    }, 600);
});
document.getElementById("submit-score").addEventListener("click", () => {
    const pseudo = document.getElementById("pseudo-input").value.trim();
    if (pseudo.length >= 2) {
        saveToLeaderboard(pseudo, finalScore);
        document.getElementById("leaderboard-submit").style.display = "none";
        // confirmation visuelle
        document.getElementById("score").innerHTML += " — Score sauvegardé ! ✅";
    }
});

function saveToLeaderboard(name, score) {
    const scores = JSON.parse(localStorage.getItem("leaderboard") || "[]");
    scores.push({ name, score });
    localStorage.setItem("leaderboard", JSON.stringify(scores));
};
