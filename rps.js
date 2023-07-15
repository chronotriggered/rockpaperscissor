var wins = 0;
var losses = 0;
var ties = 0;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * choices.length);
    let computer = choices[random];
    console.log(computer);
    return computer;
}

function getPlayerChoice() {
    let player = prompt("Rock, paper or scissors?: ").toLowerCase();
    console.log(player);
    return player;
}

playFiveRounds();

function playOneRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        console.log("It's a tie!");
        return ties++;
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        console.log("You won! Scissors beats paper!")
        return wins++;
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        console.log("You lose! Paper beats rock!")
        return losses++;
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        console.log("You won! Paper beats rock!")
        return wins++;
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        console.log("You lost! Rock beats scissors!")
        return losses++;
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        console.log("You lost! Scissors beats paper!")
        return losses++;
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        console.log("You won! Rock beats scissors!")
        return wins++;
    }
    console.log("Player selection: " , playerSelection , " Computer Selection: " , computerSelection);
}

function playFiveRounds() {
    for (let round = 0; round < 5; round++) {
        playOneRound(getPlayerChoice(), getComputerChoice());
    }
    console.log(wins , " - " , ties , " - " , losses);
    if (wins == losses) {
        console.log("Best of five: Tie!")
        while (wins == losses) {
        playOneRound(getPlayerChoice(), getComputerChoice());
        }
        if (wins > losses) {
        console.log("Best of one: You win!")
         } else {
        console.log("Best of one: You lose!")
         }
    } else if (wins > losses) {
        console.log("Best of five: You won!")
    } else {
        console.log("Best of five: You lost!")
    }
}

console.log("Total wins: ", wins, " Total ties: ", ties, " Total losses: ", losses);