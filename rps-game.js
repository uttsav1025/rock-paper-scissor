function computerPlay() {
    // random rps 
    let moves=['Rock','Paper','Scissor'];
    let move = Math.floor(Math.random()*moves.length);
    return moves[move];
}

function score(playerSelection,computerSelection) {
    // declare win or loss
}

const playerSelection= "Rock";
const computerSelection= computerPlay();

console.log(score(playerSelection,computerSelection));