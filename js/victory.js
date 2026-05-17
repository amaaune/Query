const stats = JSON.parse(localStorage.getItem("queryStats") || "{}");
const finalScore = stats.score || 0;

document.getElementById("score").innerHTML = "Score final : " + finalScore + " pts";

document.getElementById("menu-btn").addEventListener("click", () => {
    const overlay = document.getElementById("transition-overlay");
    overlay.classList.add("active");
    setTimeout(() => {
        window.location.href = "../index.html";
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
        const scores = JSON.parse(localStorage.getItem("leaderboard") || "[]");
        scores.push({ name: pseudo, score: finalScore });
        localStorage.setItem("leaderboard", JSON.stringify(scores));
        document.getElementById("leaderboard-submit").style.display = "none";
        document.getElementById("score").innerHTML += " — Score sauvegardé ! ✅";
    }
});