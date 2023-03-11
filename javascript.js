function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice == 1) {
        return "rock";
    }
    else if (computerChoice == 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "draw";
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        return "lose";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "win";
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        return "win";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "lose";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        return "lose";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "win";
    }
}


function printResult(userResult, playerSelection, computerSelection) {
    if (userResult == "draw") {
        console.log(`Draw! You both picked ${playerSelection}`)
    }
    else if (userResult == "win") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    }
    else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    }
}




function game(){
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose Rock, Paper or Scissors");
        let computerSelection = getComputerChoice();
        console.log(playerSelection);
        console.log(computerSelection);
        
        let userResult = playRound(playerSelection, computerSelection);
        printResult(userResult, playerSelection, computerSelection);
        //print user and computer choice
        //announce winner
        // add score to winner
    }

    // annouce winner with highest score

}


game();
