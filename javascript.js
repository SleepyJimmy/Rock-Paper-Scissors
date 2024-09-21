let choices = ["scissors", "rock", "paper"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    val = Math.random()
    if (val <= 0.3) {
        return "scissors";
    } else if (val <= 0.6) {
        return "rock";
    } else {
        return "paper";
    }
}


function getHumanChoice() {
    choice = null;

    while (!choices.includes(choice)) {
        choice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    }
    return choice;
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            humanScore += 1
            alert("Human wins!")
        }else if (computerChoice === "rock") {
            computerScore += 1
            alert("Computer wins!")
        }else {
            alert("DRAW!")
        }
    }else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            humanScore += 1
            alert("Human wins!")
        }else if (computerChoice === "paper") {
            computerScore += 1
            alert("Computer wins!")
        }else {
            alert("DRAW!")
        }
    }else {
        if (computerChoice === "rock") {
            humanScore += 1
            alert("Human wins!")
        }else if (computerChoice === "scissors") {
            computerScore += 1
            alert("Computer wins!")
        }else {
            alert("DRAW!")
        }
    }
}


function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice()
        const computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
    }
}

playGame()
console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`)