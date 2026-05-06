
let deathCount = 0;
let score = 0;

const question = document.getElementById("question-text");
const answer = document.getElementById("answers-container");
const deathMess = document.getElementById("death-message");
const restart = document.getElementById("restart-btn");

// Set une fonction qui load les bonnes question en fonction du niveau -> let dbQ = *le tableau simple,inter ou avancee*

function checkAnswer(ans, verif) {
    if (ans == verif) {
        alert("Bonne reponse !")
    } else {
        alert("MAUVAIS !!!")
    }
    displayQuestion();
};

function displayQuestion() {
    let random = Math.floor(Math.random() * questionsSimples.length);
    let quSel = questionsSimples[random];

    question.innerHTML = quSel.question;
    answer.innerHTML = "";
    for (let i = 0; i < quSel.reponses.length; i++) {
        let element = document.createElement("button");
        element.innerHTML = quSel.reponses[i];
        element.classList.add("answer-btn");
        element.addEventListener("click", () => {checkAnswer(i, quSel.valid)});
        answer.appendChild(element);
    };
    questionsSimples.splice(random, 1);
};


displayQuestion();

// function qcm() {
    
// };