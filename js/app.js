
let scores, roundScore, activePlayer;

scores = [0,0]; // scores for P1 and P2
roundScore = 0; // current score, we only need one per round

/** 
 * 0 is player1 and 1 is player2
 * we are doing it this way so later we can read from the score array
*/
activePlayer = 0; 

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click',function () {  
    let dice = Math.floor(Math.random() * 6)+ 1;
    let diceDom = document.querySelector('.dice-img');
    diceDom.src = `images/die-${dice}.svg`;
    if(dice > 1){
        roundScore += dice;
        document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
    }else {
        roundScore = 0;
        document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
        document.getElementById(`player-${activePlayer}`).classList.remove('border-primary');
        document.getElementById(`player-${activePlayer}`).classList.add('border-secondary');

        (activePlayer === 0) ? activePlayer = 1 : activePlayer = 0;
        document.getElementById(`player-${activePlayer}`).classList.remove('border-secondary');
        document.getElementById(`player-${activePlayer}`).classList.add('border-primary')
    }
});