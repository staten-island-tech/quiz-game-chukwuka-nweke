const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){}
function showResults(){}

buildQuiz();
submitButtton.addEventListener('click', showResults);

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
    },
    {
        question: ""
    }

]