function getComputerChoice(computerChoice) {
    var list = ["ROCK", "PAPER", "SCISSORS"];
    computerChoice = list[Math.floor(Math.random()*list.length)]; 
    return computerChoice
    
    }
function playRound(playerSelection, computerSelection) {
    
    playerSelection = "SCISSORS";
    playerSelection = playerSelection.toUpperCase();
    computerSelection = getComputerChoice();
    if (computerSelection == playerSelection) {
        return "Tie"
    }
    else if(computerSelection == "ROCK" && playerSelection == "PAPER") {
        return "Congratulations! Paper beats Rock :)"
    }
    else if(computerSelection == "ROCK" && playerSelection == "SCISSORS") {
        return "Sorry mate. Rock beats Scissors."
    }
    else if(computerSelection == "PAPER" && playerSelection == "SCISSORS") {
        return "Congratulations! Scissors beat Paper :)"
    }
    else if(computerSelection == "PAPER" && playerSelection == "ROCK") {
        return "Sorry mate, Paper beats Rock :("
    }
    else if(computerSelection == "SCISSORS" && playerSelection == "ROCK") {
        return "Congratulations! Rock beats Paper ;)"
    }
    else if(computerSelection == "SCISSORS" && playerSelection == "PAPER") {
        return "Sorry mate. Scissors beat Paper :/"
    }
    else {
        return "Error? hádám"
    }
}
console.log(playRound())

