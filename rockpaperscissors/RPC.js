let cScore = 0;
let pScore = 0;
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result");
const score = document.querySelector("#score");

function getComputerChoice() {
  return Math.floor(Math.random() * 3 + 1);
}

function playRound(getHumanChoice, getComputerChoice) {
  if ((getHumanChoice == "rock" && getComputerChoice == 1) ||
    (getHumanChoice == "scissors" && getComputerChoice == 2) ||
    (getHumanChoice == "paper" && getComputerChoice == 3)) {
    result.textContent = "You Lost";
    cScore++;
  } else if ((getHumanChoice == "rock" && getComputerChoice == 2) ||
    (getHumanChoice == "scissors" && getComputerChoice == 3) ||
    (getHumanChoice == "paper" && getComputerChoice == 1)) {
    result.textContent = "You Win";
    pScore++;
  } else {
    result.textContent = "Draw";
  }
}

function scoreShower(pScore, cScore) {
  return "Your Score: " + pScore + " Computer Score: " + cScore;
}

function playGame(getHumanChoice) {
  const computerChoice = getComputerChoice();
  playRound(getHumanChoice, computerChoice);
  score.textContent = scoreShower(pScore, cScore);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playGame(button.id);
  });
});

