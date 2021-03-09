// Very Easy Difficulty

function veryEasy() {

    /* class QuizDifficulty {
        constructor(text, choices) {
            this.text = text;
            this.choices = choices;
        }
    } */

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

    /* let quizDifficulty = [
        new QuizDifficulty("Quelle niveau de difficulté voulez-vous ?", 
        ["Facile", "Moyen", "Difficile", "Très difficile"])
    ]; */

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

    ////////////////////////////////////////////

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

    /* let quiz = new veryEasyQuiz(veryEasyQuestions);
    quizApp(); */



    /* let quiz = new veryEasyQuiz(veryEasyQuestions);
        quizApp(); */

    let quiz = new Quiz(questions);
    quizApp();
    console.log(quiz);

    ////////////////////////////////////////////

}

function startOver() {
    location.reload();
    /* this.currentQuestionIndex = 0;
    console.log(this.currentQuestionIndex);
    new Quiz (questions);
    quizApp(); */
}

///////////////////////////////////////////////////////////////////////////////////////////

// Easy Difficulty

function easy() {

    /* class QuizDifficulty {
        constructor(text, choices) {
            this.text = text;
            this.choices = choices;
        }
    } */

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

    /* let quizDifficulty = [
        new QuizDifficulty("Quelle niveau de difficulté voulez-vous ?", 
        ["Facile", "Moyen", "Difficile", "Très difficile"])
    ]; */

    let questions = [
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

    ////////////////////////////////////////////

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

    /* let quiz = new easyQuiz(easyQuestions);
    quizApp(); */



    /* let quiz = new easyQuiz(easyQuestions);
        quizApp(); */

    let quiz = new Quiz(questions);
    quizApp();
    console.log(quiz);

    ////////////////////////////////////////////

}

function startOver() {
    location.reload();
    /* this.currentQuestionIndex = 0;
    console.log(this.currentQuestionIndex);
    new Quiz (questions);
    quizApp(); */
}

////////////////////////////////////////////////////////////

// Hard Difficulty

function hard() {

    /* class QuizDifficulty {
        constructor(text, choices) {
            this.text = text;
            this.choices = choices;
        }
    } */

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

    /* let quizDifficulty = [
        new QuizDifficulty("Quelle niveau de difficulté voulez-vous ?", 
        ["Facile", "Moyen", "Difficile", "Très difficile"])
    ]; */

    let questions = [
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

    ////////////////////////////////////////////

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

    /* let quiz = new veryEasyQuiz(veryEasyQuestions);
    quizApp(); */



    /* let quiz = new veryEasyQuiz(veryEasyQuestions);
        quizApp(); */

    let quiz = new Quiz(questions);
    quizApp();
    console.log(quiz);

    ////////////////////////////////////////////

}

function startOver() {
    location.reload();
    /* this.currentQuestionIndex = 0;
    console.log(this.currentQuestionIndex);
    new Quiz (questions);
    quizApp(); */
}

////////////////////////////////////////////////////////////

// Very Hard Difficulty

function veryHard() {

    /* class QuizDifficulty {
        constructor(text, choices) {
            this.text = text;
            this.choices = choices;
        }
    } */

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

    /* let quizDifficulty = [
        new QuizDifficulty("Quelle niveau de difficulté voulez-vous ?", 
        ["Facile", "Moyen", "Difficile", "Très difficile"])
    ]; */

    let questions = [
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

    ////////////////////////////////////////////

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

    /* let quiz = new veryEasyQuiz(veryEasyQuestions);
    quizApp(); */



    /* let quiz = new veryEasyQuiz(veryEasyQuestions);
        quizApp(); */

    let quiz = new Quiz(questions);
    quizApp();
    console.log(quiz);

    ////////////////////////////////////////////

}

function startOver() {
    location.reload();
    /* this.currentQuestionIndex = 0;
    console.log(this.currentQuestionIndex);
    new Quiz (questions);
    quizApp(); */
}