const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playButton.addEventListener('click', () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    //Play match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".p-hand");
        const computerHand = document.querySelector(".c-hand");
        const hands = document.querySelectorAll(".hands img");
        hands.forEach(hand => {
            hand.addEventListener("animationend", function() {
              this.style.animation = "";
            });
        });     
        const computerOptions = ["rock", "paper", "scissors"];
        options.forEach(option => {
            option.addEventListener('click', function() {
                const randomNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[randomNumber];
                setTimeout(() => {
                    compare(this.textContent, computerChoice);
                    playerHand.src = `images/${this.textContent}.png`;
                    computerHand.src = `images/${computerChoice}.png`;
                }, 1500);
                playerHand.src = `images/rock.png`;
                computerHand.src = `images/rock.png`;
                playerHand.style.animation = "shakePlayer 1.5s ease";
                computerHand.style.animation = "shakeComputer 1.5s ease";
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compare = (player, computer) => {
        const winner = document.querySelector('.winner');
        if(player === computer) {
            winner.textContent = "It's a tie";
            return;
        }
        if(player === 'rock') {
            if(computer === 'scissors') {
                winner.textContent = "Player wins";
                pScore++;
            } else {
                winner.textContent = "Computer wins";
                cScore++;
            }
        } else if(player === 'paper') {
            if(computer === 'rock') {
                winner.textContent = "Player wins";
                pScore++;
            } else {
                winner.textContent = "Computer wins";
                cScore++;
            }
        } else {
            if(computer === 'paper') {
                winner.textContent = "Player wins";
                pScore++;
            } else {
                winner.textContent = "Computer wins";
                cScore++;
            }
        }
        updateScore();
        //return;
    };

    startGame();
    playMatch();
};

//Start game
game();