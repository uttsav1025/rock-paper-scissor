let result;
let fscore;

let win="Oh! You? won?";
let loss="I won!";
let draw="Haha!You got lucky.";
let c=0;
let p=0;
let i=0;
Yourname=prompt("Enter your name:");

//the button to play again
window.onload= function(){
    document.getElementById('playagain').onclick=function() {
//vas2 don't touch this block of code


while(i<=4){



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

i=i+1;

console.log(score(playerSelection,computerSelection));

console.log("Computer:"+c);
console.log("Player:"+p);

//the play again function
}//while

let fscore;

function finalscore(c,p) {

    if (c>p){
        fscore="Computer won!"
    }
    else if(c==p){
        fscore="It's a draw!"
    }

    else{
        fscore=Yourname+" "+"won!"
    }
    return fscore;
}


console.log(finalscore(c,p));

    }//onload


}
//the play again function




