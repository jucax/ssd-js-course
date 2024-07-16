
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0,
    ties: 0
};

updateScoreElement();

let isAutoPlaying = false;
let intervalId;

// Here we could use arrow function, but this wont allow us to hoisting, and it is also less redable
// const autoPlay = () => { }

const autoPlayButtonElement = document.querySelector('.js-auto-play-button');
autoPlayButtonElement.addEventListener('click', () => {
    autoPlay();
})


function autoPlay() {
    if (!isAutoPlaying) {
        intervalId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
        autoPlayButtonElement.innerHTML = 'Stop playing';
        isAutoPlaying = true;

    } else {
        // To stop the interval we need the Id
        clearInterval(intervalId);
        autoPlayButtonElement.innerHTML = 'Auto Play';
        isAutoPlaying = false;
    }   
}

// Dont run the function by itself, we need arrow function and then the function
document.querySelector('.js-rock-button').addEventListener('click', () => {
    playGame('rock');
});
document.querySelector('.js-paper-button').addEventListener('click', () => {
    playGame('paper');
});
document.querySelector('.js-scissors-button').addEventListener('click', () => {
    playGame('rock');
});

// We can use it to play games with the keyboard
// Event listener save the event as a parameter of the arrow function
document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playGame('rock');
    } else if (event.key === 'p') {
        playGame('paper');
    } else if (event.key === 's') {
        playGame('scissors');
    } else if (event.key === 'a') {
        autoPlay();
    } else if (event.key === 'Backspace') {
        showResetConfirmation();
    }
});

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';
    
    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose.';
        } else if (computerMove === 'paper') {
            result = 'You win.';
        } else if (computerMove === 'scissors') {
            result = 'Tie';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win.';
        } else if (computerMove === 'paper') {
            result = 'Tie.';
        } else if (computerMove === 'scissors') {
            result = 'You lose.';
        }
    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';
        } else if (computerMove === 'paper') {
            result = 'You lose.';
        } else if (computerMove === 'scissors') {
            result = 'You win.';
        }
    }

    if (result === 'You win.') {
        score.wins += 1;
    } else if (result === 'You lose.') {
        score.loses += 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }

    // Save score in local storage as a string
    localStorage.setItem('score', JSON.stringify(score));

   updateScoreElement();

   document.querySelector('.js-result').innerHTML = result;

    // We can use variables inside the name of the img
   document.querySelector('.js-moves').innerHTML =
    `You <img src="images/${playerMove}-emoji.png" class="move-icon"> <img src="images/${computerMove}-emoji.png" class="move-icon">  Computer`

}

function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < (1/3)) {
        computerMove = 'rock';
    } else if (randomNumber >= (1/3) && randomNumber < (2/3)) {
        computerMove ='paper';
    } else if (randomNumber >= (2/3) && randomNumber < 1) {
        computerMove ='scissors';
    } 
    return computerMove;
}

function resetScore() {
    score.wins = 0;
    score.loses = 0;
    score.ties = 0;

    localStorage.removeItem('score');
    updateScoreElement();
}

const resetScoreButtonElement = document.querySelector('.js-reset-score-button');
resetScoreButtonElement.addEventListener('click', () => {
    showResetConfirmation();
});

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = 
    `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
}

function showResetConfirmation() {
    document.querySelector('.js-reset-confirmation').innerHTML = `Are you sure you want to reset the score? 
    <button class="js-reset-confirmation-yes">
    Yes
    </button> 
    <button class="js-reset-confirmation-no">
    No
    </button>`;

    // If the user click Yes
    document.querySelector('.js-reset-confirmation-yes').addEventListener('click', () => {
        resetScore();
        hideResetConfirmation();
    });

    // If the user click No
    document.querySelector('.js-reset-confirmation-no').addEventListener('click', () => {
        hideResetConfirmation();
    })
}

function hideResetConfirmation() {
    document.querySelector('.js-reset-confirmation').innerHTML = '';
}