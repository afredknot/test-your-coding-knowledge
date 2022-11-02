// global variables
var startButton = document.querySelector('#start');
var selector = document.querySelector('#input-group');
var timerEl = document.querySelector('.timer-count');
var hidden = document.querySelector('#questions-card');
var submit = document.querySelector('.submit-name')
var enterText = document.getElementById('questions');
var button1 = document.getElementById('1');
var button2 = document.getElementById('2');
var button3 = document.getElementById('3');
var button4 = document.getElementById('4');
var currentQuestion = 0;
var nameInput = document.querySelector('#name')
var winCount = 0;
var loseCount = 0;
var isWin = false;
var timerCount;
var timer;

const question = document.getElementById('questions');



// quiz questions
var questions = [
  {
    question: 'Commonly used data types do not include _____.',
    answers: ['strings', 'booleans', 'alerts', 'numbers'],
    correctAnswer: 'alerts',
  },

  {
    question: 'The condition in an if/ else statement is enclosed with____',
    answers: ['quotes', 'curly brackets', 'parenthesis', 'square bracket'],
    correctAnswer: 'curly brackets',
  },
  {
    question: 'Arrays in Javascript can be used to store _______',
    answers: ['numbers/strings', 'boolean', 'other arrays', 'all of the above'],
    correctAnswer: 'all of the above',
  },
  {
    question:
      'Strings values must be enclosed within_____ when being assigned to variables?',
    answers: ['commas', 'curly brackes', 'quotes', 'parenthesis'],
    correctAnswer: 'quotes',
  },

  {
    question:
      ' A very useful tool used in development and debugging for printing content to the debugger is?',
    answers: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
    correctAnswer: 'console.log',
  },
];
console.log(questions);
hidden.setAttribute('style', 'visibility:hidden');
// starting the timer
var startTimer = function () {
  timer = setInterval(function () {
    timerEl.textContent = timerCount;
    if (timerCount >= 1) {
      timerCount--;
      if (isWin && timerCount > 0) {
        clearInterval(timerEl);
      }
    } else if (timerCount === 0) {
      clearInterval(timerEl);
    }
  }, 1000);
  return;
};
// starting the quiz
var startQuiz = function () {
  isWin = false;
  timerCount = 50;
  startButton.disabled = true;
  // renderAnswers();
  startTimer();
  console.log(timerCount);
  hidden.setAttribute('style', 'visibility:visible');
  showQuestion();
};

// function countDown(num) {
//   for (var i = num; i > 0; i--) {
//     console.log(i);
//   }
// }

// for (var questions = [i] +)
// const quest = JSON.parse(question);

// questions and answers to be printed to the
function showQuestion() {
  var thisQuestion = questions[currentQuestion];
  enterText.textContent = thisQuestion.question;
  button1.textContent = thisQuestion.answers[0];
  button2.textContent = thisQuestion.answers[1];
  button3.textContent = thisQuestion.answers[2];
  button4.textContent = thisQuestion.answers[3];
}
console.log(showQuestion);

function displayMessage(message) {
  alert(message);
}

function deciding(answer, correctAnswer) {
  console.log(answer);
  console.log(correctAnswer);
  if (answer === correctAnswer) {
    displayMessage('Correct, good job!');
    isWin = true;
    winCount += 1;
  }
  if (answer != correctAnswer) {
    displayMessage('Incorrect, try again next time.');
    isWin = false;
    timerCount = timerCount - 7;
  }
  if (currentQuestion === questions.length - 1) {
    timerCount = 0;
    quizEnd();
  } else {
    currentQuestion++;
    showQuestion();
  }
}

function showScores(event) {
  event.preventDefault();
  console.log(event);
  localStorage.setItem('win', JSON.stringify);
  localStorage.setItem('lose', JSON.stringify);
  answer.textcontent();
};


 
  var userNameSubmit = function(){     
   submit.addEventListener("click", function(event) {      
    event.preventDefault();    
    var newScore = {            
    userName: nameInput.value.trim(),          
     userScore: winCount        
     };     
     highScores.push(newScore);
     highScores.sort((a, b) => b.userScore - a.userScore);
     highScores.splice(numHighScores);
    localStorage.setItem('highScores', JSON.stringify(highScores));
    // window.location.href = '/highscore.html'; 
     });
  };     

var numHighScores = 5;
var highScores = JSON.parse(localStorage.getItem('highscores')) ??[];
function quizEnd(){
  userNameSubmit();

}

var renderHighScore

function resetQuiz() {
  if (timerCount == 0)
  
  winCount = 0;
  loseCount = 0;
  setWins();
  setLoss();
}

function answer1click() {
  var thisQuestion = questions[currentQuestion];
  var correctAnswer = thisQuestion.correctAnswer;
  deciding(thisQuestion.answers[0], correctAnswer);
  // console.log(answer)
}
function answer2click() {
  var thisQuestion = questions[currentQuestion];
  var correctAnswer = thisQuestion.correctAnswer;
  deciding(thisQuestion.answers[1], correctAnswer);
  // console.log(answer)
}
function answer3click() {
  var thisQuestion = questions[currentQuestion];
  var correctAnswer = thisQuestion.correctAnswer;
  deciding(thisQuestion.answers[2], correctAnswer);
  // console.log(answer)
}
function answer4click() {
  var thisQuestion = questions[currentQuestion];
  var correctAnswer = thisQuestion.correctAnswer;
  deciding(thisQuestion.answers[3], correctAnswer);
  // console.log(answer)
}

startButton.addEventListener('click', startQuiz);
// selector.addEventListener("click", answers)
highscore.addEventListener('click', highscore);
button1.addEventListener('click', answer1click);
button2.addEventListener('click', answer2click);
button3.addEventListener('click', answer3click);
button4.addEventListener('click', answer4click);
