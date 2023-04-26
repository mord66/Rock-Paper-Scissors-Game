let items = ["rock", "paper", "scissors"];
function getComputerChoice() {
    let choice = items[Math.floor(Math.random()*items.length)];
    return choice;
}
let compScore;
let playerScore;

function playRound (compChoice, playerChoice){

    playerChoice = (prompt("Rock, paper or scissors?")).toLowerCase();
    while (items.includes(playerChoice) == false){
        playerChoice = (prompt("Invalid choice!\nRock, paper or scissors?")).toLowerCase();
    }
    compChoice = getComputerChoice();
    console.log("Player chose: " + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1));
    console.log("Computer chose: " + compChoice.charAt(0).toUpperCase() + compChoice.slice(1));
    
    if (playerChoice == "paper") {
        if (compChoice == "scissors") {
            console.log("Computer won the round!");
            compScore = compScore +1;
        }
        else if (compChoice == "rock"){
            console.log("Player won the round!");
            playerScore = playerScore + 1;
        }
        else {
            console.log("It's a tie!");
        }
        }
    else if (playerChoice == "rock") {
        if (compChoice == "scissors"){
            console.log("Player won the round!");
            playerScore = playerScore +1;
        }
        else if (compChoice == "paper"){
            console.log("Computer won the round!");
            compScore = compScore +1;
        }
        else {
            console.log("It's a tie!");
        }
        }
    else if (playerChoice == "scissors"){
        if (compChoice == "rock"){
            console.log("Computer won the round!");
            compScore = compScore +1;
        }
        else if (compChoice == "paper"){
            console.log("Player won the round!");
            playerScore = playerScore +1;
        }
        else {
            console.log("It's a tie!");
        }
    }
    }

playRound();
