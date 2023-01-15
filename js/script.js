'use strict';
//Selectors
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0Element = document.getElementById('score--0');
const currentScore0Element = document.getElementById('current--0');
const score1Element = document.getElementById('score--1');
const currentScore1Element = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Initial states
let score = 0,
  totalScore = [0, 0],
  activePlayer = 0,
  playState = true;

initGame();

//Functions
function initGame() {
  diceElement.classList.add('hidden');
  playState = true;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  activePlayer = 0;
  score = 0;
  currentScore0Element.textContent = 0;
  score0Element.textContent = 0;
  currentScore1Element.textContent = 0;
  score1Element.textContent = 0;
  player0.classList.remove('player--active');
  player1.classList.remove('player--active');
  player0.classList.add('player--active');
  totalScore = [0, 0];
}

//Random number generator function

function rGen() {
  return Math.floor(Math.random() * 6) + 1;
}

//Player toggler function
function togglePlayer() {
  score = 0;
  document.getElementById(`current--${activePlayer}`).textContent = score;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}

//Roll function
function rollHandler() {
  if (playState) {
    const rNum = rGen();
    diceElement.src = `../images/dice${rNum}.png`;
    diceElement.classList.remove('hidden');
    if (rNum !== 1) {
      score += rNum;
      document.getElementById(`current--${activePlayer}`).textContent = score;
    } else {
      togglePlayer();
    }
  }
}

//Hold function
function holdHandler() {
  if (playState) {
    totalScore[activePlayer] += score;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];
    if (totalScore[activePlayer] >= 100) {
      playState = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .getElementById(`current--${activePlayer}`)
        .classList.remove('player--active');
      diceElement.classList.add('hidden');
      return;
    }
    togglePlayer();
  }
}

//New game function
function newHandler() {
  initGame();
}

//Events
btnRoll.addEventListener('click', rollHandler);
btnHold.addEventListener('click', holdHandler);
btnNew.addEventListener('click', newHandler);
