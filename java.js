function getComputerChoice() {
var list;
list = ["Rock", "Paper", "Scissors"];
var computerChoice;
computerChoice = list[Math.floor(Math.random()*list.length)]; 
return computerChoice + " was computer's choice!"
}
console.log(getComputerChoice())
