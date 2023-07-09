'use strict';

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // if there is no guess
  if (!guess) {
    displayMessage('⛔ No number!');
  }
  // if the guess is correct
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (highScore < score) highScore = score;

    document.querySelector('.highscore').textContent = highScore;

    document.querySelector('.number').textContent = secretNumber;
  }
  // if the guess is wrong
  else {
    if (score > 1) {
      displayMessage(guess < secretNumber ? '📉 Too low!' : '📈 Too high!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
});
