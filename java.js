var playerScore = 0
var computerScore = 0

    function getComputerChoice(computerChoice) {
        var list = ["ROCK", "PAPER", "SCISSORS"];
        computerChoice = list[Math.floor(Math.random()*list.length)]; 
        return computerChoice

        }
    function playRound(playerSelection, computerSelection) {

        playerSelection = prompt("Type rock, paper or scissors")
        playerSelection = playerSelection.toUpperCase();
        computerSelection = getComputerChoice();
        if (computerSelection == playerSelection) {
            return "Tie"
        }
        else if(computerSelection == "ROCK" && playerSelection == "PAPER") {
            playerScore++
            return "Congratulations! Paper beats Rock :)" 
            
        }
        else if(computerSelection == "ROCK" && playerSelection == "SCISSORS") {
            computerScore++
            return "Sorry mate. Rock beats Scissors.";
            
        }
        else if(computerSelection == "PAPER" && playerSelection == "SCISSORS") {
            playerScore++
            return "Congratulations! Scissors beat Paper :)";
             
        }
        else if(computerSelection == "PAPER" && playerSelection == "ROCK") {
            computerScore++
            return "Sorry mate, Paper beats Rock :("
            
        }
        else if(computerSelection == "SCISSORS" && playerSelection == "ROCK") {
            playerScore++
            return "Congratulations! Rock beats Paper ;)"
            
        }
        else if(computerSelection == "SCISSORS" && playerSelection == "PAPER") {
            computerScore++
            return "Sorry mate. Scissors beat Paper :/" 
        }
        else {
            return "You have put unknown value, reload and try again :)"
        }
    }

for (;playerScore < 5 && computerScore < 5; console.log(playRound())) {
    
}
console.log("You have: " + playerScore + "points and computer has: " + computerScore + "points")
