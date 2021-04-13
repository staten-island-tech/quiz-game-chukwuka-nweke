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
function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    myQuestions.forEach( (currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
        answerContainers[questionNumber].style.color = 'green';
}
    else{
    answerContainers[questionNumber].style.color = 'red';
  }
});
resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

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
            c: "wide receiver"
        },
        correctAnswer: "a"
    },
    {
       question: "What is the length of a standard NFL football from tip to tip?",
        answers: {
            a: "9 inches",
            b: "10 inches",
            c: "11 inches"
        },
        correctAnswer: "c"
    },
    {
        question: "What are the dimensions of a standard NFL football field in feet (including endzones)?",
        answers: {
            a: "360 x 160",
            b: "120 x 53 1/3",
            c: "360 x 100"
        },
        correctAnswer: "a"
    },
    {
        question: "What position's main job is to catch the ball thrown from behind the line of scrimmage?",
        answers: {
            a: "halfback",
            b: "wide receiver",
            c: "left tackle"
        },
        correctAnswer: "b"
    },
    {
        question: "At the NFL combine, how many pounds do the players have to bench press until failure?",
        answers: {
            a: "275",
            b: "185",
            c: "225"
        },
        correctAnswer: "c"
    },
    {
        question: "Who's job is it to play defense on the wide receiver?",
        answers: {
            a: "nose guard",
            b: "cornerback",
            c: "defensive end"
        },
        correctAnswer: "b"
    },
    {
        question: "At the NFL combine, all participants must do the x yard-dash.",
        answers: {
            a: "x= 40",
            b: "x= 60",
            c: "x= 50"
        },
        correctAnswer: "a"
    }
];

buildQuiz();
submitButton.addEventListener('click', showResults);
