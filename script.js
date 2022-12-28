'use strict';

/**
 * 1. When button has clicked, we need to generate a number from 1 to 6
 * 2.
 */

const playerSections = document.querySelector('.player');
const playerOne = document.querySelector('.player--0 ');
const playerTwo = document.querySelector('.player--1 ');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let player1 = 0,
  player2 = 0,
  currentScore1 = 0,
  currentScore2 = 0,
  gamer = true;

btnNew.addEventListener('click', newGameHandler);
btnRoll.addEventListener('click', rollDiceHandler);
btnHold.addEventListener('click', holdHandler);

function ranGen() {
  return Math.floor(Math.random() * 6) + 1;
}

function newGameHandler() {
  player1 = 0;
  player2 = 0;
  currentScore1 = 0;
  currentScore2 = 0;
  gamer = true;
}

function rollDiceHandler(gamer) {
  let dice = ranGen();
  if (dice > 1) {
    switch (gamer) {
      case true:
        currentScore1 = currentScore1 + dice;
        console.log(currentScore1);
        break;
      default:
        currentScore2 = currentScore2 + dice;
        console.log(currentScore2);
        break;
    }
  } else {
    switch (gamer) {
      case true:
        currentScore1 = 0;
        gamer = !gamer;
        playerOne.classList.remove('player--active');
        playerTwo.classList.add('player--active');
        break;
      default:
        currentScore2 = 0;
        gamer = !gamer;
        playerTwo.classList.remove('player--active');
        playerOne.classList.add('player--active');
        break;
    }
  }
}

function holdHandler() {
  gamer = !gamer;
}
