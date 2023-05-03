let items = ["rock", "paper", "scissors"];
function getComputerChoice() {
    let choice = items[Math.floor(Math.random()*items.length)];
    return choice;
}

let compScore = 0;
let playerScore = 0;

function playRound (compChoice, playerChoice){

    /*playerChoice = (prompt("Rock, paper or scissors?")).toLowerCase();
    while (items.includes(playerChoice) == false){
        playerChoice = (prompt("Invalid choice!\nRock, paper or scissors?")).toLowerCase(); 
    }*/
    compChoice = getComputerChoice();
    console.log("Player chose: " + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1));
    console.log("Computer chose: " + compChoice.charAt(0).toUpperCase() + compChoice.slice(1));

    if (playerChoice == compChoice){
        announceBar.textContent="It's a tie!";
    }
    else if (
    (compChoice == "paper" && playerChoice == "rock")||
    (compChoice == "rock" && playerChoice == "scissors")||
    (compChoice == "scissors" && playerChoice == "paper")
    ) {
        announceBar.textContent="Computer won the round!";
        compScore = compScore +1;
    }
    else {
        announceBar.textContent="Player won the round!";
        playerScore = playerScore + 1;

    }
    }

function game() {
        playRound();
        console.log(playerScore);
        console.log(compScore);
}

const announceBar = document.querySelector(".announceBar");
announceBar.textContent=""


const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const choiceButtons = document.getElementById("choice-buttons");

choiceButtons.addEventListener("click", function(e){
    playRound(getComputerChoice(), (e.target.id));
});