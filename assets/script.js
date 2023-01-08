var questions = [
    {
        question: "Questions 1 : Javascript is an _______ language?",
        choices: ["a. Object-Oriented", "b. Object-Based", "c. Procedural", "d. None of the above"],
        correct: "a"
    },
    {
        question: "Questions 2 : Which of the following methods is used to access HTML elements using Javascript?",
        choices: ["a. getElementbyid()", "b. getElementByClassName()", "c. Both A and B", "d. None of the above"],
        correct: "c"
    },
    {
        question: "Questions 3 : How do you create a function in JavaScript",
        choices: ["a. function = myFunction()", "b. function myFunction()", "c. function:myFunction()", "d. createMyFunction()"],
        correct: "b"
    },
    {
        question: "Questions 4 : How can a datatype be declared to be a constant type?",
        choices: ["a. const", "b. var", "c. let", "d. constant"],
        correct: "a"
    },
    {
        question: "Questions 5 : What keyword is used to check whether a given property is valid or not?",
        choices: ["a. in", "b. as in", "c. exists", "d. lies"],
        correct: "a"
    },
    {
        question: "Questions 6 : The first index of an array is ____.",
        choices: ["a. 0", "b. 1", "c. 8", "d. any"],
        correct: "a"
    },
    {
        question: "Questions 7 : Which of the following keywords is used to define a variable in Javascript?",
        choices: ["a. var", "b. let", "c. Both A and B", "d. None of the above"],
        correct: "c"
    }
];

var timeLimit = 60;
var timeLeft = timeLimit;
var currentQuestion = 0;
var score = 0;

displayQuestion();

var timerInterval = setInterval(function() {
  timeLeft--;
  document.getElementById("time-Left").innerHTML = timeLeft;
  if (timeLeft == 0) {
    clearInterval(timerInterval);
    endQuiz();
  }
}, 1000);
