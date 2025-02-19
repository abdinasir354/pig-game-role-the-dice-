'use strict';
// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const dicEl = document.querySelector('.dice');
const btnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
dicEl.classList.add('hidden');

const scors = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
const switchPlayer = function () {
  // currentScore += dice;

  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle(activePlayer);
  player1El.classList.toggle(activePlayer);
};

// rolling dice functinalty
btnroll.addEventListener('click', function () {
  // 1. generating rendom dice roll

  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2. display  the dice
    dicEl.classList.remove('hidden');
    dicEl.src = `dice-${dice}.png`;

    // 3. check for rolled 1
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch player2
      switchPlayer();
    }
  }
});
// holding
btnhold.addEventListener('click', function () {
  if (playing) {
    // 1. add current score to active player
    scors[activePlayer] += currentScore;

    // scors[1]=scors[1]+currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scors[activePlayer];

    // 2. check score is already at least 100 score>=100 finish the game
    if (scors[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
  // 3. else swicth to the next playe
  // switchPlayer();
});

// resting the game or new game
btnew.addEventListener('click', function () {
  document.getElementById(`score--${activePlayer}`).textContent = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  dicEl.classList.add('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('active--player');
  document;
});
