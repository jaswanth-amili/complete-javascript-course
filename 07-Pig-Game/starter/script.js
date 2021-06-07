'use strict';
//Selecting elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const player0El = document.getElementById('score--0');
const player1El = document.getElementById('score--1');

const player0CurrentScore = document.getElementById('current--0');
const player1CurrentScore = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
let currentScore, activePlayer, isGameOver,score;

//Initial values 
const init = function () {    
    currentScore = 0, activePlayer = 0, isGameOver = false;
    score = [0, 0];
    
    player0El.textContent = 0;
    player1El.textContent = 0;
    player0CurrentScore.textContent = 0;
    player1CurrentScore.textContent = 0;
    
    diceEl.classList.add('hidden');
    player0.classList.add('player--active');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--active');
    player1.classList.remove('player--winner');
}
init();
//switch player logic
let switchPlayer = function () {
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0;
}

//Add click eventListener to roll dice button
document.querySelector('.btn--roll').addEventListener('click', function () {
    if (!isGameOver) {
        //1. Generate random number
        let dice = Number(Math.trunc(Math.random() * 6) + 1);

        //2. Display dice
        diceEl.src = `dice-${dice}.png`;    //showing dice image
        diceEl.classList.remove('hidden');

        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        //3. check if dice =1: make currentScore=0 for current player, switch player 
        if (dice === 1) {
            //1. Make currentScore = 0 and Reset values for current player
            currentScore = 0;
            document.getElementById(`current--${activePlayer}`).textContent = 0;

            //2. switch player
            switchPlayer();
        }
    }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
    if (!isGameOver) {
        //1. Add currentScore to current player
        score[activePlayer] += currentScore;

        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = 0;

        //2. Check if score is 99+: Game ends
        if (score[activePlayer] >= 100) {
            isGameOver = true;
            diceEl.classList.add('hidden'); //Hide dice element
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        }

        //3. Switch Player
        switchPlayer();
    }
});

document.querySelector('.btn--new').addEventListener('click', init);