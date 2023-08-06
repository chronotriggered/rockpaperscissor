var wins = 0;
var losses = 0;
var ties = 0;
var rounds = 0;
var clearWins = 0;
var clearLosses = 0;
var clearTies = 0;
var clearRounds = 0;



function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * choices.length);
    let computer = choices[random];
    return computer;
}

document.getElementById("rockbtn").addEventListener("click", function() {

        updateOpponentChoiceUI();
        playOneRound("rock", getComputerChoice())
        document.getElementById("resultsdiv").textContent = (`Wins ${wins} - Ties ${ties} - Losses ${losses} (ROUND ${rounds})`);
        checkGameEnd();

});

document.getElementById("paperbtn").addEventListener("click", function() {

        updateOpponentChoiceUI();
        playOneRound("paper", getComputerChoice())
        document.getElementById("resultsdiv").textContent = (`Wins ${wins} - Ties ${ties} - Losses ${losses} (ROUND ${rounds})`);
        checkGameEnd();

});

document.getElementById("scissorsbtn").addEventListener("click", function() {

        updateOpponentChoiceUI();
        playOneRound("scissors", getComputerChoice())
        document.getElementById("resultsdiv").textContent = (`Wins ${wins} - Ties ${ties} - Losses ${losses} (ROUND ${rounds})`);
        checkGameEnd();

});


function playOneRound(playerSelection, computerSelection) {


    if (computerSelection == playerSelection) {
        document.getElementById("roundWinner").textContent = "It's a tie!";
        updateOpponentChoiceUI(computerSelection);
        return ties++, rounds++;
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        document.getElementById("roundWinner").textContent = "You won! Scissors beats paper!";
        updateOpponentChoiceUI(computerSelection);
        return wins++, rounds++;
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        document.getElementById("roundWinner").textContent = "You lost! Paper beats rock!";
        updateOpponentChoiceUI(computerSelection);
        return losses++, rounds++;
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        document.getElementById("roundWinner").textContent = "You won! Paper beats rock!";
        updateOpponentChoiceUI(computerSelection);
        return wins++, rounds++;
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        document.getElementById("roundWinner").textContent = "You lost! Rock beats scissors!";
        updateOpponentChoiceUI(computerSelection);
        return losses++, rounds++;
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        document.getElementById("roundWinner").textContent = "You lost! Scissors beats paper!";
        updateOpponentChoiceUI(computerSelection);
        return losses++, rounds++;
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        document.getElementById("roundWinner").textContent = "You won! Rock beats scissors!";
        updateOpponentChoiceUI(computerSelection);
        return wins++, rounds++;
    }
}

document.getElementById("reset").addEventListener("click", function () {
    wins = clearWins;
    losses = clearLosses;
    ties = clearTies;
    rounds =clearRounds;
    document.getElementById("roundWinner").textContent = "";
    document.getElementById("resultsdiv").textContent = "";
    document.getElementById("winner").textContent = "";
    updateOpponentChoiceUI("");
    document.getElementById("rockbtn").disabled = false;
    document.getElementById("scissorsbtn").disabled = false;
    document.getElementById("paperbtn").disabled = false;
});

function updateOpponentChoiceUI(choice) {
    const rockIcon = document.querySelector(".rockimg")
    const paperIcon = document.querySelector(".paperimg")
    const scissorsIcon = document.querySelector(".scissorsimg")
    
    if (choice == "rock") {
        paperIcon.classList.remove('paper-border');
        scissorsIcon.classList.remove('scissors-border');
        rockIcon.classList.add('rock-border');
    } else if (choice == "paper") {
        rockIcon.classList.remove('rock-border');
        scissorsIcon.classList.remove('scissors-border');
        paperIcon.classList.add('paper-border')
    } else if (choice == "scissors") {
        paperIcon.classList.remove('paper-border');
        rockIcon.classList.remove('rock-border');
        scissorsIcon.classList.add('scissors-border');
    } else {
        rockIcon.classList.remove('rock-border');
        scissorsIcon.classList.remove('scissors-border');
        paperIcon.classList.remove('paper-border');
    }
    
    }

function checkGameEnd() {
    if (wins == 5) {

        document.getElementById("winner").textContent = "You won the GAME! Player Wins!"
        document.getElementById("rockbtn").disabled = true;
        document.getElementById("scissorsbtn").disabled = true;
        document.getElementById("paperbtn").disabled = true;

    } else if (losses == 5) {

        document.getElementById("winner").textContent = "You lost the GAME! CPU Wins!"
        document.getElementById("rockbtn").disabled = true;
        document.getElementById("scissorsbtn").disabled = true;
        document.getElementById("paperbtn").disabled = true;
    }
}