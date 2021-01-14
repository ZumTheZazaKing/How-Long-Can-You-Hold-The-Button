let bestScore = document.getElementById('best');

let timer = document.getElementById('timer');

let playerScore = document.getElementById('results');

let playeScoreContainer = document.getElementById('score');

let playAgainButton = document.getElementById('playAgain')

localStorage.setItem('best', 0);

bestScore.innerHTML = localStorage.getItem('best');

let counter = 0;

function setTimer(){


    counter++;

    timer.innerHTML = counter;

}

function hold(){

    setInterval(setTimer,1000);

}

function offHold(){

    button.style.display = 'none';

    playerScore.innerHTML = timer.innerHTML;

    playeScoreContainer.classList.remove('hide');

    playAgainButton.classList.remove('hide');

    if (parseInt(playerScore.innerHTML) > parseInt(bestScore.innerHTML)){

        localStorage.setItem('best',playerScore.innerHTML);

        bestScore.innerHTML = localStorage.getItem('best');

    }


}

function reload(){

    window.location.reload();

}
