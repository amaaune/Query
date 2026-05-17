
const question = document.getElementById("question-text");
const answer = document.getElementById("answers-container");
const deathMess = document.getElementById("death-message");
const restart = document.getElementById("restart-btn");
const cacheForm = document.getElementById("cache-ans");

document.getElementById("X4-ans").addEventListener("click", () => showAnswers(4));
document.getElementById("X2-ans").addEventListener("click", () => showAnswers(2));

let currentQuestion = null;
let currentDb = null;


cacheForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("cache-input");
    const userAnswer = input.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const validAnswer = currentQuestion.reponses[currentQuestion.valid].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    checkAnswer(userAnswer, validAnswer, currentDb, "cache");
    input.value = "";
});

function selectQuestion(level) {
    if (level == 0) {
        return questionsSimples;
    } else if (level == 1) {
        return questionsIntermediaires;
    } else if (level == 2) {
        return questionsAvancees;
    } else if (level == 3) {
        if (Math.random() > 0.2) {
            return questionsAvancees;
        } else {
            if (Math.random() >= 0.5) {
            return questionsIntermediaires;
            } else {
                return questionsSimples;
            }
        }
    }
};

function checkAnswer(ans, verif, db, mode) {
    let dmg;
    let correct;

    if (mode == "cache") {
        const isNumber = !isNaN(ans.trim());
        if (isNumber) {
            correct = ans.trim().length >= 1 && verif.includes(ans.trim());
        } else {
            correct = ans.length >= 2 && verif.includes(ans);
        }
    } else {
        correct = ans == verif;
    }
    if (correct) {
        if (mode == "cache") {
            dmg = 15;
            score+= 5;
        } else if (mode == "X4") {
            dmg = 10;
            score += 3
        } else if (mode == "X2") {
            dmg = 5;
            score += 1;
        }
        bosses[currentBossIndex].pv = Math.max(0, bosses[currentBossIndex].pv - dmg);
        bossImg.classList.add("hit");
        setTimeout(() => {
            bossImg.classList.remove("hit");
        }, 400);
        updateHUD();
    } else {
        if (mode == "cache") {
            dmg = 1;
        } else if (mode == "X4") {
            dmg = 2;
        } else if (mode == "X2"){
            dmg = 3;
        }
        playerLives -= dmg;
        updateHUD();
    }
    if (bosses[currentBossIndex].pv <= 0) {
        nextBoss();
    } else if (playerLives <= 0) {
        triggerGameOver();
    } else {
        displayQuestion(db);
    }
};

function showAnswers(count) {
    cacheForm.style.display = "none";
    answer.style.display = "flex";
    answer.innerHTML = "";
    let reponses = [];
    let mode = count == 4 ? "X4" : "X2";
    if (mode == "X2") {
    let wrongIndex;
    do {
        wrongIndex = Math.floor(Math.random() * currentQuestion.reponses.length);
    } while (wrongIndex == currentQuestion.valid);

    reponses = [currentQuestion.reponses[currentQuestion.valid], currentQuestion.reponses[wrongIndex]];
    reponses.sort(() => Math.random() - 0.5);
} else {
    reponses = currentQuestion.reponses;
}
    for (let i = 0; i < count; i++) {
        let element = document.createElement("button");
        element.innerHTML = reponses[i];
        element.classList.add("answer-btn");
        element.classList.add(count == 4 ? "x4" : "x2");
        const bonneReponse = currentQuestion.reponses[currentQuestion.valid];
        element.addEventListener("click", () => {
            const estCorrect = reponses[i] == bonneReponse;
            checkAnswer(estCorrect ? currentQuestion.valid : -1, currentQuestion.valid, currentDb, mode);
        });
        answer.appendChild(element);
    }
};

function displayQuestion(dbQ, count = 0) {
    let random = Math.floor(Math.random() * dbQ.length);
    currentQuestion = dbQ[random];
    currentDb = dbQ;

    question.innerHTML = currentQuestion.question;
    answer.innerHTML = "";
    document.getElementById("cache-input").value = "";
    document.getElementById("mode-btns").style.display = "flex";

    if (count == 0) {
        cacheForm.style.display = "flex";
        answer.style.display = "none";
    }
    dbQ.splice(random, 1);
};
