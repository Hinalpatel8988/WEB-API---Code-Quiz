<<<<<<< HEAD
var allQuestions = [
=======
const questions = [
>>>>>>> 342e5cfff7de22da7e6d74bfdd39c772ab3cef86
    {
        question: "Questions 1 : Javascript is an _______ language?",
        answer: ["a. Object-Oriented", "b. Object-Based", "c. Procedural", "d. None of the above"],
        correct: "a"
    },
    {
        question: "Questions 2 : Which of the following methods is used to access HTML elements using Javascript?",
        answer: ["a. getElementbyid()", "b. getElementByClassName()", "c. Both A and B", "d. None of the above"],
        correct: "c"
    },
    {
        question: "Questions 3 : How do you create a function in JavaScript",
        answer: ["a. function = myFunction()", "b. function myFunction()", "c. function:myFunction()", "d. createMyFunction()"],
        correct: "b"
    },
    {
        question: "Questions 4 : How can a datatype be declared to be a constant type?",
        answer: ["a. const", "b. var", "c. let", "d. constant"],
        correct: "a"
    },
    {
        question: "Questions 5 : What keyword is used to check whether a given property is valid or not?",
        answer: ["a. in", "b. as in", "c. exists", "d. lies"],
        correct: "a"
    },
    {
        question: "Questions 6 : The first index of an array is ____.",
        answer: ["a. 0", "b. 1", "c. 8", "d. any"],
        correct: "a"
    },
    {
        question: "Questions 7 : Which of the following keywords is used to define a variable in Javascript?",
<<<<<<< HEAD
        choices: ["a. var", "b. let", "c. Both A and B", "d. None of the above"],
        answer: "c"
    }
];

var startquiz = document.getElementById("startquiz")
var timer = document.getElementById("timer")
var question = document.querySelector("#question")
var results = document.querySelector("#results")
var listhighscores = document.querySelector("#listhighscores")
listhighscores.style.display = "none"
results.style.display = "none"
question.style.display = "none"
var score = 0;
var sec = 100;
var index = 0;
var timer;
var timeLeft = 100;

startquiz.addEventListener("click" , startgame);

function startgame() {
    timeInterval = setInterval(() => {
        if (timeLeft > 1) {
            timer.textContent = "Time: " + timeLeft + " seconds left";
            timeLeft--;
        } else if (timeLeft === 1) {
            timer.textContent = "Time: " + timeLeft + " seconds left";
            timeLeft--;
        }  else {
            timer.textContent = "";
            clearInterval(timeInterval);
            finishGame();
        }
}, 1000);
displayQuestionAnswer(index);

}
=======
        answer: ["a. var", "b. let", "c. Both A and B", "d. None of the above"],
        correct: "c"
    }
];

var timer = document.getElementById("timer")
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");
var startQuizBtn = document.getElementById("start-quiz-button");
var startDiv = document.getElementById("start");
var Questions = document.getElementById("questions");
var questionTitle = document.getElementById("questionTitle");
var answerA = document.getElementById("btn1");
var answerB = document.getElementById("btn2");
var answerC = document.getElementById("btn3");
var answerD = document.getElementById("btn4");
var lineBreak = document.getElementById("lineBreak");
var answerCheck = document.getElementById("answerCheck");
var choices = document.getElementById("choices")
var summary = document.getElementById("summary");
var start = document.getElementById("start");
var viewhighscore = document.getElementById("viewhighscore");
var listHighScores = document.getElementById("listHighScores");


>>>>>>> 342e5cfff7de22da7e6d74bfdd39c772ab3cef86

