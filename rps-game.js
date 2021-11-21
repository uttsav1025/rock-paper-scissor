const moves=["rock","paper","scissor"];
let mlen= moves.length;

function computerPlay() {
    return moves[Math.floor(Math.random()*mlen)];
}

const computerSelection= computerPlay(moves);
const playerSelection= "rock";
console.log(computerSelection);

let result;
let win="Oh! You? won?";
let loss="I won!";
let draw="Haha!You got lucky.";
let c=0;
let p=0;

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

// let p=0;
// let c=0;
// function points(p,c){
//     if (result=="win"){
//         c=c+1;
//     }

//     else if (result=="loss"){
//         p=p+1;
//     }

//     else{
//         c=c+0.5;
//         p=p+0.5;
//     }

//     return c,p;
// }

// pointsystem=points(c,p);
console.log("Computer:"+c);
console.log("Player:"+p);




