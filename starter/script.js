'use strict';
let current = 0;
let score = 0;
let activePlayer = 0; // we used the no 0 to match with html class we put 0,1 for name,scor,current
var diceImg = document.querySelector('.dice'); //dice image
diceImg.classList.add('hidden'); //at th beging of game the img shoud disappear
var rollBtn = document.querySelector('.btn--roll'); // roll the dice button
function activatePlayer() {
  //this function will be called once the player 1or 2 activate
  document.querySelector(`#current--${activePlayer}`).textContent = current;
}
rollBtn.addEventListener('click', function () {
  //when the roll button click it will do the code below
  //when the button clicked
  diceImg.classList.remove('hidden'); //first remove the hidden class to show dice img
  let randomNum = Math.floor(Math.random() * 6) + 1; //create randoum num
  let diceRandomImg = `dice-${randomNum}.png`; //implement the random num to fit with dice iamg src
  diceImg.setAttribute('src', diceRandomImg); //change the attribute to the new img src that came from random
  //here will add the random +current(which is now 0 and will change every time we roll the dice)
  //1- if the random number not 1 will on each click the current will add to the random
  if (randomNum !== 1) {
    current += randomNum;

    activatePlayer(); //show the current value in the current div
  } else {
    //if the random num =1
    //first empty the current and put its value in score section
    document.querySelector(`#score--${activePlayer}`).textContent = current;
    current = 0; // and set the current to 0 so,will change in the very top and when the second player plays will start from 0
    activatePlayer(); //show the current which is 0 now in the current div

    document
      .querySelector(`.player--${activePlayer}`) //check the current player background if it has the player active class or not
      .classList.toggle('player--active');
    if (activePlayer === 0) {
      //here after the random one will switch the player from 0-1
      activePlayer = 1;
    } else {
      activePlayer = 0;
    }

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.toggle('player--active');

    current += randomNum;
    activatePlayer();
  }
});
document.querySelector('.btn--hold').addEventListener('click', function () {
  var holdValue = document.querySelector(`#score--${activePlayer}`);
  holdValue.textContent = current;
  if (current >= 20) {
    document
      .querySelector(`.winner-msg-${activePlayer}`)
      .classList.remove('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('black-icon');

    document
      .getElementById(`name--${activePlayer}`)
      .classList.add('name-white');
    document.querySelector('.btn--roll').disabled = true;
  }
});
function newGame() {
  current = 0;
  score = 0;
  diceImg.classList.add('hidden');
  document.querySelector('#current--0').textContent = current;
  document.querySelector('#current--1').textContent = current;
  document.querySelector('#score--0').textContent = score;
  document.querySelector('#score--1').textContent = score;
  document;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('black-icon');
  document
    .getElementById(`name--${activePlayer}`)
    .classList.remove('name-white');

  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector(`.winner-msg-${activePlayer}`).classList.add('hidden');
  document.querySelector('.winner-msg-1').classList.add('hidden');
  document.querySelector('.btn--roll').disabled = false;
}
document.querySelector('.btn--new').addEventListener('click', function () {
  newGame();
});
