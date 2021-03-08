class Question {
    constructor(text, choice, answer) {
        this.text = text;
        this.choice = choice;
        this.answer = answer;
    }
    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

let questions = [
    new Question("")
]
