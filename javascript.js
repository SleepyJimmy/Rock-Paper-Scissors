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


const container = document.querySelector("#container");

const new_div = document.createElement("div");
new_div.style.marginTop = "50px";
new_div.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`
container.appendChild(new_div);


const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        humanChoice = button.textContent;
        playRound(humanChoice, getComputerChoice());
        new_div.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`
       
        if (humanScore == 5) {
            new_div.textContent = "HUMAN WINS!";
            disableButton();
        } else if (computerScore == 5) {
            new_div.textContent = "COMPUTER WINS :(";
            disableButton();
        }
    });
});


const disableButton = () => {
    buttons.forEach((button) => {
        button.disabled = true;
    });
};