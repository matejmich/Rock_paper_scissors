window.onload = function(){ 
    // your code 

let playerScore = 0
let computerScore = 0
let playerChoice;
let playerSelection;
let computerSelection;





const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        playerChoice = button.id
      alert(playRound());
      console.log(playerScore, computerScore)
      const scoreContainer = document.querySelector("#score")
const score = document.createElement ("div")
score.textContent = "Your score: " + playerScore + " computer's score: " + computerScore
scoreContainer.append(score)
        
        
    });
  });

    function getComputerChoice(computerChoice) {
        var list = ["ROCK", "PAPER", "SCISSORS"];
        computerChoice = list[Math.floor(Math.random()*list.length)]; 
        return computerChoice

        }
    function playRound() {

        playerSelection = playerChoice;
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

// for (;playerScore < 5 && computerScore < 5; console.log(playRound())) {
    
// }
console.log("You have: " + playerScore + "points and computer has: " + computerScore + "points")


};