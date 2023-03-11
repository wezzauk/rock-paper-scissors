function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice == 1) {
        console.log("rock");
        return "rock";
    }
    else if (computerChoice == 2) {
        console.log("paper");
        return "paper";
    }
    else {
        console.log("scissors");
        return "scissors";
    }
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return `Draw! You both picked ${computerSelection}`;
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        return "You lose! Paper beats Rock";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats Scissors"
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        return "You win! Paper beats Rock";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beats Paper"
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        return "You lose! Rock beats Scissors";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats Paper"
    }
}


const playerSelection = "rock";
const computerSelection = getComputerChoice().toLowerCase();
console.log(playRound(playerSelection, computerSelection));