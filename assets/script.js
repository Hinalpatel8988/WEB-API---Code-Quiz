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
var startagainbtn = document.getElementById("startagainbtn")
var clearhighscoresbtn = document.getElementById("clearhighscoresbtn")
var question = document.querySelector("#question")
var results = document.querySelector("#results")
// var choices = document.getElementById("choices")
var intials = document.getElementById ("intials")
var answer = document.querySelector("#answer")
var choices1 = document.getElementById ("choices1")
var choices2 = document.getElementById ("choices2")
var choices3 = document.getElementById ("choices3")
var choices4 = document.getElementById ("choices4")
var finalScore = document.getElementById ("finalscore")
var initial = document.getElementById("resultbox")
var submit = document.getElementById("submit")
var viewscorebtn = document.getElementById("viewscore")
var listhighscores = document.querySelector("#listhighscores")
listhighscores.style.display = "none"
results.style.display = "none"
question.style.display = "none"
var score = 0;
var scoreList = [];
var sec = 100;
var penalty = 20;
var index = 0;
var timer;
var timeLeft = 100;
var timeInterval;

startquiz.addEventListener("click" , startgame);

function startgame() {
    timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = "TIMER :" + timeLeft;
    
        if (timeLeft === 0 || index >= allQuestions.length) {
          clearInterval(timeInterval);
            endQuiz ();
        }
}, 1000);
displayQuestionAnswer();

}

function displayQuestionAnswer() {
    question.style.display = "block"
    mainbody.style.display = "none"

      if (index === allQuestions.length) {
        endQuiz()

      } else {
        
        var question1 = document.querySelector("h3")
        question1.textContent = allQuestions[index].question
        console.log(allQuestions[index].choices)

        var choices1 = document.getElementById("choices1")
        choices1.textContent = allQuestions[index].choices[0]
        choices1.addEventListener("click", compareAnswer)

        var choices2 = document.getElementById("choices2")
        choices2.textContent = allQuestions[index].choices[1]
        choices2.addEventListener("click", compareAnswer)

        var choices3 = document.getElementById("choices3")
        choices3.textContent = allQuestions[index].choices[2]
        choices3.addEventListener("click", compareAnswer)

        var choices4 = document.getElementById("choices4")
        choices4.textContent = allQuestions[index].choices[3]
        choices4.addEventListener("click", compareAnswer)
    
    }
}

function compareAnswer(event) {
    if (index >= allQuestions.length) {
      endQuiz();
      clearInterval(timeInterval);
    } else {
      if (event === allQuestions[index].answer) {
        trueanswer.textContent = "You are correct!";
      } else {
        timeLeft -= 10;
        trueanswer.textContent = "You are Wrong!";
      }
      score = timeLeft;
      index++;
      displayQuestionAnswer();
    }
  }

function endQuiz() {
    question.style  .display = "none"
    results.style.display = "block"
    trueanswer.style.display = "none"
    finalScore.textContent = 'Congratulations! Your final score is: ' + score;
}

function displayhignscores() {
    removeScore();
    addScore();
    scoreList.sort((a, b) => {
      return b.score - a.score;
    });

    topTen = scoreList.slice(0, 10);
  
    for (var i = 0; i < topTen.length; i++) {
      var player = topTen[i].player;
      var score = topTen[i].score;
  
      var newDiv = document.createElement("div");
      displayScoreDiv.appendChild(newDiv);
  
      var newLabel = document.createElement("label");
      newLabel.textContent = player + " - " + score;
      newDiv.appendChild(newLabel);
    }
  }

  function addScore() {
    displayScoreDiv = document.createElement("div");
    displayScoreDiv.setAttribute("id", "playerInitials");
    document.getElementById("displayhignscores").appendChild(displayScoreDiv);
  }

  function removeScore() {
    var removeScores = document.getElementById("playerInitials");
    if (removeScores !== null) {
      removeScores.remove();
    } else {
    }
  }

function getScore() {
    var storedScore = JSON.parse(localStorage.getItem("highScore"));
    if (storedScore !== null) {
      scoreList = storedScore;
    }
  }

  function saveScore() {
    localStorage.setItem("highScore", JSON.stringify(scoreList));
  }

  function displayscores() {
    displayscores = document.createElement("div");
    displayscores.setAttribute("id", "playerInitials");
    document.getElementById("displayhignscores").appendChild(displayscores);
  }

  submit.addEventListener("click", function (event) {
    event.preventDefault();
    var playerInitials = resultbox.value;
    var newScore = {
      player: playerInitials,
      score: score,
    };
    
    scoreList.push(newScore);
    saveScore();
    displayhignscores();
  });
  
  viewscorebtn.addEventListener("click", function (event) {
    results.style.display = "none"
    mainbody.style.display = "none"
    listhighscores.style.display = "block"
    displayhignscores();
  });

  startagainbtn.addEventListener("click", function (event) {
    location.reload();
  });
  
  clearhighscoresbtn.addEventListener("click", function (event) {
    scoreList = [];
    localStorage.setItem("highScore", JSON.stringify(scoreList));
    displayhignscores();
    saveScore();
  });






