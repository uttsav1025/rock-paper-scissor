let result;

let win="Oh! You? won?";
let loss="I won!";
let draw="Haha!You got lucky.";
let c=0;
let p=0;

//the button to play again
window.onload= function(){
    document.getElementById('playagain').onclick=function() {
//vas2 don't touch this block of code

const moves=["rock","paper","scissor"];
let mlen= moves.length;

//get a random of the three choices
function computerPlay() {
    return moves[Math.floor(Math.random()*mlen)];
}


const computerSelection= computerPlay(moves);
//my choice
const playerSelection= "rock";
console.log(computerSelection);


function score(playerSelection,computerSelection) {
    // declare win or loss and add points

    if (computerSelection=="rock") {
        result=draw;
        c=c+0.5;
        p=p+0.5;
    }
    else if(computerSelection=="scissor"){
        result=loss;
        p=p+1;
    }
    else{
        result=win;
        c=c+1;
    }
    
    return result;
}

console.log(score(playerSelection,computerSelection));

console.log("Computer:"+c);
console.log("Player:"+p);

//the play again function
}


}
//the play again function




