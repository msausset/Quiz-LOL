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

const display = {

    elementShown: function (id, text) {
        let element = document.getElementById(id);
        element.innerHTML = text;
    },

    endQuiz: function () {
        let endQuizHTML = `<h1>Quiz terminé </h1>
    <h3> Votre score est de : ${quiz.score} / ${quiz.questions.length}`;
        this.elementShown("question", endQuizHTML);
        document.getElementById("startOver").style.display = "inline-block";
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
    },
}

quizApp = () => {
    if (quiz.hasEnded()) {
        display.endQuiz();
    } else {
        display.question();
        display.choices();
        display.progress();
    }
}

function startOver() {
    location.reload();
    /* this.currentQuestionIndex = 0;
    console.log(this.currentQuestionIndex);
    new Quiz (questions);
    quizApp(); */
}

function veryEasy() {
    
    document.getElementById("difficultyQuestion").style.display = "none";
    document.getElementById("difficulty0").style.display = "none";
    document.getElementById("difficulty1").style.display = "none";
    document.getElementById("difficulty2").style.display = "none";
    document.getElementById("difficulty3").style.display = "none";
    document.getElementById("question").style.display = "inline-block";
    document.getElementById("guess0").style.display = "inline-block";
    document.getElementById("guess1").style.display = "inline-block";
    document.getElementById("guess2").style.display = "inline-block";
    document.getElementById("guess3").style.display = "inline-block";

    questions = [
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

    quiz = new Quiz(questions);
    quizApp();
    console.log(quiz);
}

function easy() {

    document.getElementById("difficultyQuestion").style.display = "none";
    document.getElementById("difficulty0").style.display = "none";
    document.getElementById("difficulty1").style.display = "none";
    document.getElementById("difficulty2").style.display = "none";
    document.getElementById("difficulty3").style.display = "none";
    document.getElementById("question").style.display = "inline-block";
    document.getElementById("guess0").style.display = "inline-block";
    document.getElementById("guess1").style.display = "inline-block";
    document.getElementById("guess2").style.display = "inline-block";
    document.getElementById("guess3").style.display = "inline-block";

    questions = [
        new Question("Lequel de ces ultimates est en AoE ?",
            ["Caitlyn", "Malphite", "Maître Yi", "Skarner"],
            "Malphite"),
        new Question("Lequel de ces champions a le meilleur scaling ?",
            ["Renekton", "Viktor", "Hecarim", "Kassadin"],
            "Kassadin"),
        new Question("Quelle est la touche du charme d'Ahri ?",
            ["A", "Z", "E", "R"],
            "E"),
        new Question("Lequel de ces champions a le plus long root ?",
            ["Morgana", "Veigar", "Lux", "Jhin"],
            "Morgana")
    ];

    quiz = new Quiz(questions);
    quizApp();
    console.log(quiz);
}

function hard() {

    document.getElementById("difficultyQuestion").style.display = "none";
    document.getElementById("difficulty0").style.display = "none";
    document.getElementById("difficulty1").style.display = "none";
    document.getElementById("difficulty2").style.display = "none";
    document.getElementById("difficulty3").style.display = "none";
    document.getElementById("question").style.display = "inline-block";
    document.getElementById("guess0").style.display = "inline-block";
    document.getElementById("guess1").style.display = "inline-block";
    document.getElementById("guess2").style.display = "inline-block";
    document.getElementById("guess3").style.display = "inline-block";

    questions = [
        new Question("De quelle région vient Garen ?",
            ["Noxus", "Shurima", "Demacia", "Runeterra"],
            "Demacia"),
        new Question("De quelle région vient Pyke ?",
            ["Targon", "Bilgewater", "Le Néant", "Freljord"],
            "Bilgewater"),
        new Question("Quel champion a bénéficié du tout premier skin sorti sur le jeu ?",
            ["Ashe", "Kayle", "Warwick", "Alistar"],
            "Alistar"),
        new Question("Combien y a-t-il de skin sur League of Legends ?",
            ["187", "235", "302", "96"],
            "235")
    ];

    quiz = new Quiz(questions);
    quizApp();
    console.log(quiz);
}

function veryHard() {

    document.getElementById("difficultyQuestion").style.display = "none";
    document.getElementById("difficulty0").style.display = "none";
    document.getElementById("difficulty1").style.display = "none";
    document.getElementById("difficulty2").style.display = "none";
    document.getElementById("difficulty3").style.display = "none";
    document.getElementById("question").style.display = "inline-block";
    document.getElementById("guess0").style.display = "inline-block";
    document.getElementById("guess1").style.display = "inline-block";
    document.getElementById("guess2").style.display = "inline-block";
    document.getElementById("guess3").style.display = "inline-block";

    questions = [
        new Question("Quelle est la citation de Taric ?",
            ["Les meilleures armes sont magnifiques.", "Ionia a changé et moi aussi je dois changer.",
                "Mon potentiel est sans limite. Nul ne pourra le confiner.",
                "Vous ne nous avez pas tous détruits. Vous paierez cher cette erreur."],
            "Les meilleures armes sont magnifiques."),
        new Question("Ornn est le frère de quel champion ?",
            ["Maokai", "Galio", "Trundle", "Volibear"],
            "Volibear"),
        new Question("Lux est la petite soeur de quel champion ?",
            ["Quinn", "Sona", "Garen", "Jarvan IV"],
            "Garen"),
        new Question("Qui a été le 100ème champion à rejoindre la Faille de l'Invocateur ?",
            ["Kindred", "Jayce", "Vladimir", "Yorick"],
            "Jayce")
    ];

    quiz = new Quiz(questions);
    quizApp();
    console.log(quiz);
}