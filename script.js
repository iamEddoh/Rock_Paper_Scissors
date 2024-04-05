let choice = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let playerScore = 0;

function getComputerChoice(){
    return choice[Math.floor(Math.random() * choice.length)];
}
   
function playRound (playerSelection, computerSelection){
console.log(playerSelection, computerSelection);
    if (playerSelection == computerSelection){
        return "It's a tie! You both picked the same choice.";
    }
    else if (playerSelection=='rock' && computerSelection=='paper'){
        return "You lose! Paper beats rock."
    }
    else if (playerSelection=='rock' && computerSelection=='scissors'){
        return "You win! Rock beats scissors."
    }
    else if (playerSelection=='paper' && computerSelection=='rock'){
        return "You win! Paper beats rock."
    }
    else if (playerSelection=='paper' && computerSelection=='scissors'){
        return "You lose! Scissors beats paper."
    }
    else if (playerSelection=='scissors' && computerSelection=='rock'){
        return "You lose! Rock beats scissors."
    }
    else if (playerSelection=='scissors' && computerSelection=='paper'){
        return "You win! Scissors beats paper."
    }
    else {
        return "Invalid value"
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, Scissor - SHOOT! (Type Rock, Paper, Scissor)");
        let computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes("You win!")){
            playerScore++;
        }
        else if (result.includes("You lose!")) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log(`You win the game! Final score - Player: ${playerScore}, Computer: ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You lose the game! Final score - Player: ${playerScore}, Computer: ${computerScore}`);
    } else {
        console.log(`The game is a tie! Final score - Player: ${playerScore}, Computer: ${computerScore}`);
    }
}

console.log(playGame());