'use strict';

// Making the secret number a random value
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

let highscore = 0; //initialising highscore

document.querySelector('.check').addEventListener('click', checkEventHandler);

document.querySelector('.again').addEventListener('click', againEventHandler);



const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Handling when check button is pressed.
function checkEventHandler() {
  const guess = Number(document.querySelector('.guess').value);

  //When no input
  if (!guess) {
    displayMessage('⛔️ No Number');
  }
  //When Player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number.');
    document.querySelector('.number').textContent = secretNumber;
    //Changing background color if correct answer
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Setting highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //Checking if user has not lost the game
  if (score > 1) {
    //Guess too High
    if (guess > secretNumber) {
      displayMessage('Too High 📈');
      score--;
      document.querySelector('.score').textContent = score;
    }
    //Guess too low
    else if (guess < secretNumber) {
      displayMessage('Too Low 📉');
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.score').textContent = 0;
    displayMessage('💥 You lost the game!!');
  }
}

// Handling if user wants to replay the game (highscore maintained from previous game)
function againEventHandler() {
  let score = 20;
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
}

// For debugging console.log secret number
console.log(`The secret number is ${secretNumber}`);

