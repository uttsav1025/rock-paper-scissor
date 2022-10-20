let result;
let fscore;

let win = "Oh! You? won?";
let loss = "I won!";
let draw = "Haha!You got lucky.";
let isOn = false;
let basedOnFive = true;
let c = 0;
let p = 0;
let i = 0;
let moves = 5;
// let playerSelectionHandler;
const startButton = document.getElementById("playagain");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const removeEventListnerHandler = [rock, paper, scissor];
Yourname = prompt("Enter your name:");

const autoStart = () => {
  startButton.click();
};

// document.getElementById("playagain").onclick = function () {
//   const moves = ["rock", "paper", "scissor"];
//   let mlen = moves.length;

//   function computerPlay() {
//     return moves[Math.floor(Math.random() * mlen)];
//   }

//   const computerSelection = computerPlay(moves);

//   rock.addEventListener("click", () => {
//     playerSelection = "rock";
//     autoStart();
//   });

//   paper.addEventListener("click", () => {
//     playerSelection = "paper";
//     autoStart();
//   });

//   scissor.addEventListener("click", () => {
//     playerSelection = "scissor";
//     autoStart();
//   });

//   // playerSelection=prompt("Enter your move in lowercaps:");

//   console.log(computerSelection);

//   document.getElementById("playerselection").innerHTML =
//     playerSelection.toUpperCase();
//   document.getElementById("computerselection").innerHTML =
//     computerSelection.toUpperCase();

//   function score(playerSelection, computerSelection) {
//     if (
//       (computerSelection == "rock" && playerSelection == "paper") ||
//       (computerSelection == "paper" && playerSelection == "scissor") ||
//       (computerSelection == "scissor" && playerSelection == "rock")
//     ) {
//       result = win;
//       p = p + 1;
//     } else if (computerSelection == playerSelection) {
//       result = draw;
//       p = p + 0.5;
//       c = c + 0.5;
//     } else {
//       result = loss;
//       c = c + 1;
//     }

//     return result;
//   }

//   i = i + 1;

//   console.log(score(playerSelection, computerSelection));
//   document.getElementById("computerscore").innerHTML = c;
//   document.getElementById("playerscore").innerHTML = p;
//   document.getElementById("playername").innerHTML = Yourname.toUpperCase();
//   document.getElementById("computer").innerHTML = "COMPUTER";
//   console.log("Computer:" + c);
//   console.log("Player:" + p);

//   while (i >= 5) {
//     function finalscore(c, p) {
//       if (c > p) {
//         fscore = " Computer won! ";
//       } else if (c == p) {
//         fscore = " It's a draw! ";
//       } else {
//         fscore = " " + Yourname + " " + "won! ";
//       }
//       return fscore;
//     }

//     console.log(finalscore(c, p));
//     document.getElementById("message").innerHTML = fscore;
//     i = 0;
//     c = 0;
//     p = 0;
//   }
// };

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
    result = win;
    p = p + 1;
  } else if (computerChoice == playerChoice) {
    result = draw;
    p = p + 0.5;
    c = c + 0.5;
  } else {
    result = loss;
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

startButton.addEventListener("click", startGame);

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
