'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Hello World';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 3;

// document.querySelector('.score').textContent = 2;

// document.querySelector('.guess').value = 24;
// console.log(document.querySelector('.guess').value);

// const givenInput = () => {
//   console.log(document.querySelector('.guess').value);
// };
// document.querySelector('.btn').onclick(givenInput());

// generating a random number

// return a number between 1 t0 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// for developing purpose only
// document.querySelector('.number').textContent = secretNumber;

// console.log(number);
const givenInput = () => {
  console.log(document.querySelector('.guess').value);
};

let score = 20;
// function for check
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  if (!guess) {
    document.querySelector('.message').textContent = '🔴 Not a Number';
  } else if (guess == secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    const highScore = Number(document.querySelector('.highscore').textContent);
    // console.log('Curent High Score ', highScore);
    // console.log('Curent Score ', score);
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
    } else {
      document.querySelector('.message').textContent = 'You Loose!';
      document.querySelector('body').style.backgroundColor = '#ff0000';
    }
  } else {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
    } else {
      document.querySelector('.message').textContent = 'You Loose!';
      document.querySelector('body').style.backgroundColor = '#ff0000';
    }
  }
  document.querySelector('.score').textContent = score;
});

// function to reload page
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
