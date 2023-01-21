var allQuestions = [
    {
        question: "Questions 1 : Javascript is an _______ language?",
        choices: ["a. Object-Oriented", "b. Object-Based", "c. Procedural", "d. None of the above"],
        answer: "a"
    },
    {
        question: "Questions 2 : Which of the following methods is used to access HTML elements using Javascript?",
        choices: ["a. getElementbyid()", "b. getElementByClassName()", "c. Both A and B", "d. None of the above"],
        answer: "c"
    },
    {
        question: "Questions 3 : How do you create a function in JavaScript",
        choices: ["a. function = myFunction()", "b. function myFunction()", "c. function:myFunction()", "d. createMyFunction()"],
        answer: "b"
    },
    {
        question: "Questions 4 : How can a datatype be declared to be a constant type?",
        choices: ["a. const", "b. var", "c. let", "d. constant"],
        answer: "a"
    },
    {
        question: "Questions 5 : What keyword is used to check whether a given property is valid or not?",
        choices: ["a. in", "b. as in", "c. exists", "d. lies"],
        answer: "a"
    },
    {
        question: "Questions 6 : The first index of an array is ____.",
        choices: ["a. 0", "b. 1", "c. 8", "d. any"],
        answer: "a"
    },
    {
        question: "Questions 7 : Which of the following keywords is used to define a variable in Javascript?",
        choices: ["a. var", "b. let", "c. Both A and B", "d. None of the above"],
        answer: "c"
    }
];

var startquiz = document.getElementById("startquiz")
var timer = document.getElementById("timer")
var question = document.querySelector("#question")
var results = document.querySelector("#results")
// var choices = document.getElementById("choices")
var choices1 = document.getElementById ("choices1")
var choices2 = document.getElementById ("choices2")
var choices3 = document.getElementById ("choices3")
var choices4 = document.getElementById ("choices4")
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

function displayQuestionAnswer(index) {
    question.style.display = "block"
    mainbody.style.display = "none"

    // if(index < question.length) {
    //     var currentQuestion = question[index]
    //     question1.textContent = currentQuestion.question;
    //     choices1.textContent = allQuestions[index].choices[0];
    //     choices2.textContent = allQuestions[index].choices[1];
    //     choices3.textContent = allQuestions[index].choices[2];
    //     choices4.textContent = allQuestions[index].choices[3];

    // }
    // question.textContent ="";
    // choices1.textContent ="";
    // choices2.textContent ="";
    // choices3.textContent ="";
    // choices4.textContent ="";

    // for (var i = 0; i <allQuestions.length; i++) {
    //     var userQuestion = allQuestions[index].question;
    //     var userChoices = allQuestions[index].choices;
    //     question.textContent = userQuestion;
    // }
      console.log(index)
      console.log(allQuestions.length)

      if (index === allQuestions.length) {
        
        stopTimer()
        endQuiz()

      } else {
        
        var question1 = document.querySelector("h3")
        question1.textContent = allQuestions[index].question
        console.log(allQuestions[index].choices[0])

        var choices1 = document.getElementById("choices1")
        choices1.textContent = allQuestions[index].choices[0]
        choices1.addEventListener("click", choiceSelect)

        var choices2 = document.getElementById("choices2")
        choices2.textContent = allQuestions[index].choices[1]
        choices2.addEventListener("click", choiceSelect)

        var choices3 = document.getElementById("choices3")
        choices3.textContent = allQuestions[index].choices[2]
        choices3.addEventListener("click", choiceSelect)

        var choices4 = document.getElementById("choices4")
        choices4.textContent = allQuestions[index].choices[3]
        choices4.addEventListener("click", choiceSelect)
    
    }
}

function choiceSelect(event) {
    console.log(event.target.textContent, "clicked choice");
    console.log(allQuestions[index].answer, "Answer");
    console.log(allQuestions[index].choices, "choices");

    if (event.target.textContent === allQuestions[index].answer) {
        console.log(allQuestions[index].trueanswer, "correct");
        trueanswer.textContent = "Correct!";
        score++
        index++
        displayQuestionAnswer()

    } else {
        console.log(allQuestions[index].trueanswer, "incorrect");
        sec -= 15;
        trueanswer.textContent = "Incorrect!";
        index++
        displayQuestionAnswer()
    }
}


