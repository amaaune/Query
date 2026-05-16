
const question = document.getElementById("question-text");
const answer = document.getElementById("answers-container");
const deathMess = document.getElementById("death-message");
const restart = document.getElementById("restart-btn");

function selectQuestion(level) {
    if (level == 0) {
        return questionsSimples;
    } else if (level == 1) {
        return questionsIntermediaires;
    } else if (level == 2) {
        return questionsAvancees;
    }
};

function checkAnswer(ans, verif, db, mode) {
    let dmg;
    if (ans == verif) {
        alert("Bonne reponse !");
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
        bosses[currentBossIndex].pv -= dmg;
    } else {
        if (mode == "cache") {
            dmg = 1;
        } else if (mode == "X4") {
            dmg = 2;
        } else if (mode == "X2"){
            dmg = 3;
        }
        playerLives -= dmg;
        alert("MAUVAIS !!!")
    }
    if (bosses[currentBossIndex].pv <= 0) {
        nextBoss();
    } else if (playerLives <= 0) {
        // lancer sur la page de game over avec le message basé sur deathCount
        gameOver();
    } else {
        displayQuestion(db);
    }
};

function displayQuestion(dbQ) {
    let random = Math.floor(Math.random() * dbQ.length);
    let quSel = dbQ[random];

    question.innerHTML = quSel.question;
    answer.innerHTML = "";
    for (let i = 0; i < quSel.reponses.length; i++) {
        let element = document.createElement("button");
        element.innerHTML = quSel.reponses[i];
        element.classList.add("answer-btn");
        element.addEventListener("click", () => {checkAnswer(i, quSel.valid, dbQ)});
        answer.appendChild(element);
    };
    dbQ.splice(random, 1);
};
