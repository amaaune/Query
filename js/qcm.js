
let deathCount = 0;
let score = 0;
let level = 0;

const question = document.getElementById("question-text");
const answer = document.getElementById("answers-container");
const deathMess = document.getElementById("death-message");
const restart = document.getElementById("restart-btn");

function leveSelect() {
    
};

function selectQuestion(level) {
    if (level == 0) {
        return questionsSimples;
    } else if (level == 1) {
        return questionsIntermediaires;
    } else if (level == 2) {
        return questionsAvancees;
    }
};

let dbQ = selectQuestion(level);

function checkAnswer(ans, verif, db) {
    if (ans == verif) {
        alert("Bonne reponse !")
    } else {
        alert("MAUVAIS !!!")
    }
    displayQuestion(db);
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

displayQuestion(dbQ);
