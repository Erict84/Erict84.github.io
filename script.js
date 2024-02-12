let myNumber = getRandomInt(20) + 1;
let score = 20;
let highS = 0;
let guess;
let level = 20;

const bodyStyle = document.body.style;
const guessInput = document.querySelector(".guess");
const numberText = document.querySelector(".number");
const checkButton = document.querySelector(".check");
const scoreText = document.querySelector(".score");
const messageText = document.querySelector(".message");
const highscoreText = document.querySelector(".highscore");
const levelInput = document.querySelector(".level");
const levelText = document.querySelector(".lvl");

function check() {
  guess = Number(guessInput.value);
  if (checkInp(guessInput.value)) {
    messageText.innerHTML = "Enter a number";
    return;
  }
  if (guess < myNumber) {
    feedback("⬇️ Too low");
    scoreDown();
  } else if (guess > myNumber) {
    feedback("⬆️ Too high");
    scoreDown();
  } else {
    feedback("🎖️ You win!");
    bodyStyle.backgroundColor = "#60b347";
    numberText.innerHTML = myNumber;
    highScore();
    checkButton.style.display = "none";
  }
}
function again() {
  bodyStyle.backgroundColor = "#222";
  numberText.innerHTML = "?";
  scoreText.innerHTML = level;
  guessInput.value = "";
  messageText.innerHTML = "Start guessing...";
  score = level;
  myNumber = getRandomInt(level) + 1;
  checkButton.style.display = "block";
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function feedback(message) {
  messageText.innerHTML = message;
}

function scoreDown() {
  score -= 1;
  scoreText.innerHTML = score;
}

function highScore() {
  if (score > highS) {
    highscoreText.innerHTML = score;
    highS = score;
  }
}

function change() {
  level = Number(levelInput.value);
  levelText.innerHTML = level;
  scoreText.innerHTML = level;
  again();
}

function checkInp(value) {
  var regex = /^[0-9]+$/;
  if (value.match(regex)) {
    return false;
  } else {
    return true;
  }
}
