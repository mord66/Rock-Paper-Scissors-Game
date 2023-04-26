let items = ["rock", "paper", "scissors"];
function getComputerChoice() {
    let choice = items[Math.floor(Math.random()*items.length)];
    return choice;
}
let compScore = 0;
let playerScore = 0;

function playRound (compChoice, playerChoice){

    playerChoice = (prompt("Rock, paper or scissors?")).toLowerCase();
    while (items.includes(playerChoice) == false){
        playerChoice = (prompt("Invalid choice!\nRock, paper or scissors?")).toLowerCase();
    }
    compChoice = getComputerChoice();
    console.log("Player chose: " + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1));
    console.log("Computer chose: " + compChoice.charAt(0).toUpperCase() + compChoice.slice(1));

    if (playerChoice == compChoice){
        console.log("It's a tie!")
    }
    else if (
    (compChoice == "paper" && playerChoice == "rock")||
    (compChoice == "rock" && playerChoice == "scissors")||
    (compChoice == "scissors" && playerChoice == "paper")
    ) {
        console.log("Computer won the round!");
        compScore = compScore +1;
    }
    else {
        console.log("Player won the round!");
        playerScore = playerScore + 1;

    }
    }

function game() {
    while (playerScore < 5 && compScore < 5) {
        playRound();
        console.log(playerScore);
        console.log(compScore);
    }
    if (compScore == 5) {
        console.log("Computer won the game!");
    }
    else if (playerScore == 5){
        console.log("Player won the game!");
    }
}


game();