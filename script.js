function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// code will go here
        var output = [];
        var answers;

        for(var i=0; i<questions.length; 1++){
            answers = [];

            for(letter in question[i].answers){
                answers.push(
                        `<label>
                          <input type="radio" name="question${questionNumber}" value="${letter}">
                          ${letter} :
                          ${questions.answers[letter]}
                        </label>`);
            }
            output.push(
                `<div class="question"> ${questions.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
              );



        }
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
  var myQuestions = [
      {
      question: "Commonly used data types DO NOT include:",
      answers: {
          1: "Strings",
          2: "Booleans",
          3: "Alerts",
          4: "Numbers"},
          correctAnswer: "Alerts"
  },
  {
    question: "The condition in an if / else statment is enclosed within ______.",
    answers: {
        1: "Quotes",
        2: "Curly Brackets",
        3: "Parenthisis",
        4: "Square Brackets",
    },
    correctAnswer: "Curly Brackets"
},
{
    question: "Arrays in JavaScript can be used to store _____.",
    answers: {
        1: "Numbers and Strings",
        2: "Other Arrays",
        3: "Booleans",
        4: "All of the Above"
    },
    correctAnswer: "All of the Above"
},
{
    question: "String values must be enclosed within ______ when being assigned to variables.",
    answers: {
        1: "Commas",
        2: "Curly Brackets",
        3: "Quotas",
        4: "Parenthisis"
    },
    correctAnswer: "Quotas"
},
{
    question: "A very useful tool used during development an debugging for printing content to the debugger is?",
    answers: {
        1: "JavaScript",
        2: "Terminal/bash",
        3: "for Loops",
        4: "Console Log"
    },
    correctAnswer: "Console Log"
}];

}