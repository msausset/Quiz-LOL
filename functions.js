class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

let questions = [
    new Question("Lequel de ces champions est AD ?",
        ["Katarina", "Ryze", "Darius", "Veigar"],
        "Darius"),
    new Question("Lequel de ces champions est AP ?",
        ["Garen", "Annie", "Jax", "Yasuo"],
        "Annie"),
    new Question("Lequel de ces items donnent le plus d'AP ?",
        ["Bâton du vide", "Morellonomicon", "Echo de Luden", "Coiffe de Rabadon"],
        "Coiffe de Rabadon"),
    new Question("Lequel de ces items donnent le plus d'HP ?",
        ["Armure de Warmog", "Plaque du mort", "Gage de Sterak", "Visage spirituel"],
        "Armure de Warmog")
];

class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.currentQuestionIndex = 0;
    }
    getCurrentQuestionIndex() {
        return this.questions[this.currentQuestionIndex];
    }
    guess(answer) {
        if (this.getCurrentQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.currentQuestionIndex++;
    }
    hasEnded() {
        return this.currentQuestionIndex >= this.questions.length;
    }
}

// regroup all functions relative to the app display 

const display = {
    elementShown: function (id, text) {
        let element = document.getElementById(id);
        element.innerHTML = text;
    },
    endQuiz: function () {
        let endQuizHTML = `<h1>Quiz terminé </h1>
        <h3> Votre score est de : ${quiz.score} / ${quiz.questions.length}`;
        this.elementShown("question", endQuizHTML);
    },
    question: function () {
        this.elementShown("question", quiz.getCurrentQuestionIndex().text);
    },
    choices: function () {
        let choices = quiz.getCurrentQuestionIndex().choices;

        guessHandler = (id, guess) => {
            document.getElementById(id).onclick = function () {
                quiz.guess(guess);
                quizApp();
            }
        }
        for (let i = 0; i < choices.length; i++) {
            this.elementShown("choice" + i, choices[i]);
            guessHandler("guess" + i, choices[i]);
        }
    },
    progress: function () {
        let currentQuestionNumber = quiz.currentQuestionIndex + 1;
        this.elementShown("progress", "Question " + currentQuestionNumber + " sur " + quiz.questions.length);
    }

}

// game logic

quizApp = () => {
    if (quiz.hasEnded()) {
        display.endQuiz();
    } else {
        display.question();
        display.choices();
        display.progress();
    }
}



//create quiz 

let quiz = new Quiz(questions);
quizApp();

console.log(quiz);
