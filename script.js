let fscore;
let isOn = false;
let c = 0;
let p = 0;
let moves = 5;
const startButton = document.getElementById("playagain");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
Yourname = prompt("Enter your name:");

const autoStart = () => {
  startButton.click();
};
function computerSelection() {
  const moves = ["rock", "paper", "scissor"];
  let mlen = moves.length;
  return moves[Math.floor(Math.random() * mlen)];
}

let playerSelectionHandler;
rock.addEventListener("click", () => {
  if (isOn) {
    playerSelectionHandler = "rock";
    autoStart();
  } else {
    playerSelectionHandler = "rock";
  }
});

paper.addEventListener("click", () => {
  if (isOn) {
    playerSelectionHandler = "paper";
    autoStart();
  } else {
    playerSelectionHandler = "paper";
  }
});

scissor.addEventListener("click", () => {
  if (isOn) {
    playerSelectionHandler = "scissor";
    autoStart();
  } else {
    playerSelectionHandler = "scissor";
  }
});

const startGame = function () {
  const computerChoice = computerSelection();
  const playerChoice = playerSelectionHandler;

  console.log(computerChoice);

  document.getElementById("playerselection").innerHTML =
    playerChoice.toUpperCase();
  document.getElementById("computerselection").innerHTML =
    computerChoice.toUpperCase();

  if (
    (computerChoice == "rock" && playerChoice == "paper") ||
    (computerChoice == "paper" && playerChoice == "scissor") ||
    (computerChoice == "scissor" && playerChoice == "rock")
  ) {
    result = "Oh! You? won?";
    p = p + 1;
  } else if (computerChoice == playerChoice) {
    result = "Haha!You got lucky.";
    p = p + 0.5;
    c = c + 0.5;
  } else {
    result = "I won!";
    c = c + 1;
  }

  document.getElementById("computerscore").innerHTML = c;
  document.getElementById("playerscore").innerHTML = p;
  document.getElementById("playername").innerHTML = Yourname.toUpperCase();
  document.getElementById("computer").innerHTML = "COMPUTER";
  console.log("Computer:" + c);
  console.log("Player:" + p);

  isOn = true;
  moves--;

  if (moves === 0) {
    gameOver(p, c);
  }
};

function gameOver(playerScore, computerScore) {
  if (computerScore > playerScore) {
    fscore = " Computer won! ";
  } else if (computerScore == playerScore) {
    fscore = " It's a draw! ";
  } else {
    fscore = " " + Yourname + " " + "won! ";
  }
  startButton.removeEventListener("click", startGame);
  document.getElementById("message").innerHTML = fscore;
}

startButton.addEventListener("click", startGame);
