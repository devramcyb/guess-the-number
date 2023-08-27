'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🥳 Correct Numbers!';

document.querySelector('.number').textContent = '13';
*/

let rightNumber = Math.floor(Math.random() * 21);
// document.querySelector('.number').textContent = rightNumber;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayQuery = function (query, message) {
  document.querySelector(query).textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('🙅 please enter a number');
  } else if (guess === rightNumber) {
    const gradients = [
      'linear-gradient(to right, #a8e063, #56ab2f)',
      'linear-gradient(to right, #00b09b, #96c93d)',
      'linear-gradient(to right, #1fab89, #62d2a2)',
      'linear-gradient(to right, #77ac98, #8bdea8)',
      'linear-gradient(to right, #00a863, #99e265)',
      // Add more gradient combinations with green shades here
    ];

    // Function to change the background color to a random gradient
    const randomIndex = Math.floor(Math.random() * gradients.length);
    const selectedGradient = gradients[randomIndex];
    document.body.style.background = selectedGradient;

    displayQuery('.message', '🥳 You guessed it right');
    displayQuery('.number', guess);
    if (score >= highScore) {
      highScore = score;
    }
    displayQuery('.highscore', highScore);
    document.querySelector('.check').disabled = true;
  } else if (guess != rightNumber) {
    guess > rightNumber
      ? displayMessage('⏬ try lower')
      : displayMessage('try higher📈');
    if (score <= 1) {
      displayMessage('☠️ You Lost The Game');
      displayQuery('.score', 0);
    } else {
      score--;
      displayQuery('.score', score);
    }

    document.body.style.background = '#ff0000';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.body.style.background = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';

  rightNumber = Math.floor(Math.random() * 21);
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.check').disabled = false;
  // console.log(rightNumber);
});
