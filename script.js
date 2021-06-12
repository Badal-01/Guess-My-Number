'use strict';

const again = document.querySelector('.again');
let secretNumber = Math.trunc(Math.random() * 20 + 1);

const input = document.querySelector('.guess');

const check = document.querySelector('.check');

const message = document.querySelector('.message');

const score = document.querySelector('.score');
score.textContent = 20;

const highscore = document.querySelector('.highscore');

check.addEventListener('click', function () {
  const a = input.value;
  if (!a) {
    message.textContent = 'Select Any Number.';
  } else if (a == secretNumber) {
    const guess = document.querySelector('.number');
    guess.textContent = secretNumber;
    message.textContent = 'Correct Answer!';
    document.body.style.backgroundColor = 'green';
    if (parseInt(highscore.textContent) < parseInt(score.textContent)) {
      highscore.textContent = score.textContent;
    }
  } else if (a > secretNumber) {
    let realScore = parseInt(score.textContent);
    if (realScore > 0) {
      realScore--;
      score.textContent = realScore;
      message.textContent = 'Too High!';
    }
  } else if (a < secretNumber) {
    let realScore = parseInt(score.textContent);
    if (realScore > 0) {
      realScore--;
      score.textContent = realScore;
      message.textContent = 'Too Low!';
    }
  }
});

again.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  message.textContent = 'Start guessing...';
  score.textContent = 20;
  input.value = '';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
});
