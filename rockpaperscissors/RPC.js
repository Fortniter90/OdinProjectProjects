let cScore = 0;
let pScore = 0;

function getComputerChoice() {
  return Math.floor(Math.random() * 3 + 1);
}

console.log(getComputerChoice());

function getHumanChoice() {
  return prompt("Rock, Paper, or Scissors").toLowerCase();
}

function playRound(getHumanChoice, getComputerChoice) {
  if ((getHumanChoice == "rock" && getComputerChoice == 1) ||
    (getHumanChoice == "scissors" && getComputerChoice == 2) ||
    (getHumanChoice == "paper" && getComputerChoice == 3)) {
    console.log("You Lost");
    cScore++;
  } else if (getComputerChoice == getHumanChoice) {
    console.log("draw");
  } else {
    console.log("You Won");
    pScore++;
  }
}

function scoreShower(pScore, cScore) {
  return "Your Score " + pScore + " Computer Score " + cScore;
}

function playGame(playRound, scoreLine) {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
    console.log(scoreLine(pScore, cScore));
  }
}

playGame(playRound, scoreShower);
