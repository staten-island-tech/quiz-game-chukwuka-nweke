function buildQuiz(){
    const output = [];
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];
            for(letter in currentQuestion.answers){
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                            ${letter} :
                            ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );
    quizContainer.innerHTML = output.join('');
}
function showResults(){}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
    {
        question: "How many players on one team are on the field at a time?",
        answers: {
            a: "13",
            b: "11",
            c: "22"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the name of the position whose main purpose is to run the ball from the backfield?",
        answers: {
            a: "runningback",
            b: "quarterback",
            c: "wide reiver"
        },
        correctAnswer: "a"
    }
];

buildQuiz();
submitButtton.addEventListener('click', showResults);
