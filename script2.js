//Create functions
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
            `<div class="slide">
                <div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>
            </div>`
            );
        }
    );

    quizContainer.innerHTML = output.join('');
}

function showResults(){
    const answersContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    myQuestions.forEach( (currentQuestion, questionNumber) => {

        const answersContainer = answersContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answersContainer.querySelector(selector) || {}).value;

        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;

            answersContainers[questionNumber].style.color = 'lightgreen';
        }

        else{
            answersContainers[questionNumber].style.color = 'red';
        }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;

    if(currentSlide === 0) {
        previousButton.style.display = 'none';
    }
    else{
        previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    }
    else {
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }

}




function showNextSlide() {
    showSlide(currentSlide + 1);
}

function showPreviousSlide() {
    showSlide(currentSlide - 1)
}

//store references in HTML (Variables)
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

// Questions
const myQuestions = [
    {
    question: "Commonly used data types DO NOT include:",
    answers: {
        1: "Strings",
        2: "Booleans",
        3: "Alerts",
        4: "Numbers"},
        correctAnswer: "3"
},
{
  question: "The condition in an if / else statment is enclosed within ______.",
  answers: {
      1: "Quotes",
      2: "Curly Brackets",
      3: "Parenthisis",
      4: "Square Brackets",
  },
  correctAnswer: "2"
},
{
  question: "Arrays in JavaScript can be used to store _____.",
  answers: {
      1: "Numbers and Strings",
      2: "Other Arrays",
      3: "Booleans",
      4: "All of the Above"
  },
  correctAnswer: "4"
},
{
  question: "String values must be enclosed within ______ when being assigned to variables.",
  answers: {
      1: "Commas",
      2: "Curly Brackets",
      3: "Quotas",
      4: "Parenthisis"
  },
  correctAnswer: "3"
},
{
  question: "A very useful tool used during development an debugging for printing content to the debugger is?",
  answers: {
      1: "JavaScript",
      2: "Terminal/bash",
      3: "for Loops",
      4: "Console Log"
  },
  correctAnswer: "4"
}];

buildQuiz();


const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(currentSlide);


submitButton.addEventListener('click', showResults);
previousButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);