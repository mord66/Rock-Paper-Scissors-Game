let items = ["rock", "paper", "scissors"];
function getComputerChoice() {
    let choice = items[Math.floor(Math.random()*items.length)];
    return choice;
}

var playerScore = 0;
var compScore = 0;
var roundNumber = 0;
var playerChoice="";

const monkeButtons = document.querySelectorAll(".monkeBtn")
const announceBar = document.querySelector(".announce-bar");
const allButtons = document.getElementsByTagName("button");
const playerScoreBoard = document.querySelector(".player-score");
const compScoreBoard = document.querySelector(".computer-score");
const roundBar = document.querySelector(".round-count");
const midBottom = document.querySelector(".mid-bottom");
const playAgainButton = document.querySelector(".playAgainButton");


function playRound (compChoice, playerChoice){
    compChoice = getComputerChoice();
    roundNumber += 1;
    roundBar.textContent = roundNumber
    if (
        (playerChoice == "rock" && compChoice == "scissors") ||
        (playerChoice == "paper" && compChoice == "rock")||
        (playerChoice == "scissors" && compChoice == "paper")
    ) {
        playerScore += 1
        playerScoreBoard.textContent = playerScore;
        playerChoice = firstCharUpper(playerChoice);
        announceBar.textContent = "You win!" + " " + " " + (playerChoice) + " " + "beats" + " " + (compChoice);
        if (playerScore == 5){
            endGame("You")
        };
    
    }
    else if (playerChoice == compChoice){
        announceBar.textContent = ` It's a tie! You both chose ${playerChoice}`;
    }
    else {
        compScore += 1
        compScoreBoard.textContent = compScore;
        compChoice = firstCharUpper(compChoice);
        announceBar.textContent = "You lose!" + " " + " " + (compChoice) + " " + "beats" + " " + (playerChoice);
        if (compScore == 5){
            endGame("Computer");
        }
    }
}

function firstCharUpper(string){
    let firstLetter = string.charAt(0);
    firstLetter = firstLetter.toUpperCase();
    capitalizedString = firstLetter + string.slice(1);
    return capitalizedString;
}

function endGame(winner){
    for (button of monkeButtons){
        button.disabled = true;
        button.classList.remove("monkeBtn");
    }
    playAgainButton.style.display="block";
    announceBar.textContent = ` Game Over! ${winner} won the game`

}

function playAgain(){
    playerScore = 0;
    compScore = 0;
    roundNumber = 1;
    compScoreBoard.textContent = compScore;
    playerScoreBoard.textContent = playerScore;
    roundBar.textContent = roundNumber;
    announceBar.textContent = " ";

    for (button of monkeButtons){
        button.disabled = false;
        button.classList.add("monkeBtn");
    
}
    playAgainButton.style.display = "none";
}

for (button of monkeButtons) {
    button.addEventListener("click", function(e) {
        playerChoice = e.target.id
        playRound(getComputerChoice, playerChoice)
    })
}

playAgainButton.addEventListener("click", function(){
    playAgain();
});