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
    question: "Where is the correct place to insert a JavaScript?",
    answers: {
        1: "The <head> section",
        2: "The <body> section",
        3: "Both the <head> and the <body> sections",
        4: "In the .css file"},
        correctAnswer: "2"
},
{
  question: "How do you create a function in JavaScript?",
  answers: {
      1: "function = myFunction()",
      2: "function:myFunction()",
      3: "function myFunction()",
      4: "function + myFunction()",
  },
  correctAnswer: "1"
},
{
  question: "How to write an IF statement in JavaScript?",
  answers: {
      1: "if i === 5 then",
      2: "if(i=== 5)",
      3: "if i = 5",
      4: "if - = 5 then"
  },
  correctAnswer: "2"
},
{
  question: "How do you declare a JavaScript variable?",
  answers: {
      1: "var + carName",
      2: "v carName",
      3: "variable carName",
      4: "Var carName"
  },
  correctAnswer: "4"
},
{
  question: "Which operator is used to assign a value to a variable?",
  answers: {
      1: "*",
      2: "-",
      3: "=",
      4: "x"
  },
  correctAnswer: "3"
}];

buildQuiz();


const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const slides = document.querySelectorAll(".slide");
const startTime = document.getElementById("startClock");
let currentSlide = 0;

showSlide(currentSlide);


submitButton.addEventListener('click', showResults);
previousButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);
startTime.addEventListener('click', setInterval);
    
  
    var count = 20;
    var interval = setInterval(function(){
      document.getElementById('count').innerHTML=count;
      count--;
        if (count === -2){
        clearInterval(interval);
        document.getElementById('count').innerHTML='Done';
}
    }, 1000);

    localStorage.setItem("answerContainers", JSON.stringify(answersContainers));
    renderMessage();


    function renderMessage() {
        var lastScore = JSON.parse(localStorage.getItem("answerContainers"))
        document.querySelector(".high").textContent = `${numCorrect} out of ${myQuestions.length}`;
    }