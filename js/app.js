
let scores, roundScore, activePlayer, gamePlaying;

init()

document.querySelector('.btn-roll').addEventListener('click',function () {
    if (gamePlaying) {
        let dice = Math.floor(Math.random() * 6)+ 1;
        let diceDom = document.querySelector('.dice-img');
        diceDom.src = `images/die-${dice}.svg`;
        if(dice > 1){
            roundScore += dice;
            document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
        }else {
           looseRound();
        }
    }
});

function looseRound() {
    roundScore = 0;
    document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
    document.getElementById(`player-${activePlayer}`).classList.remove('border-primary');
    document.getElementById(`player-${activePlayer}`).classList.add('border-secondary');
    switchPlayer();
    document.getElementById(`player-${activePlayer}`).classList.remove('border-secondary');
    document.getElementById(`player-${activePlayer}`).classList.add('border-primary');
}

function switchPlayer() {
    (activePlayer === 0) ? activePlayer = 1 : activePlayer = 0;
}

document.querySelector('.btn-hold').addEventListener('click',function () {
    if (gamePlaying) {
        scores[activePlayer] += roundScore;
        document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];
        if(scores[activePlayer] >= 20){
            document.getElementById(`name-${activePlayer}`).textContent = 'Winner'
            gamePlaying = false;
        }else {
            looseRound();
        }
    }
})

document.getElementById('btn-new').addEventListener('click',init)

function init() {
    scores = [0,0]; // scores for P1 and P2
    roundScore = 0; // current score, we only need one per round
    gamePlaying = true;
    /**
     * 0 is player1 and 1 is player2
     * we are doing it this way so later we can read from the score array
    */
    activePlayer = 0;

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById(`name-0`).textContent = 'Player 1';
    document.getElementById(`name-1`).textContent = 'Player 2';
    document.getElementById(`player-0`).classList.add('border-primary');
    document.getElementById(`player-0`).classList.remove('border-secondary');
    document.getElementById(`player-1`).classList.remove('border-primary');
    document.getElementById(`player-1`).classList.add('border-secondary');
}