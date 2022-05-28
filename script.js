let result;
let fscore;

let win="Oh! You? won?";
let loss="I won!";
let draw="Haha!You got lucky.";
let c=0;
let p=0;
let i=0;
Yourname=prompt("Enter your name:");

window.onload= function(){
    document.getElementById('playagain').onclick=function() {

const moves=["rock","paper","scissor"];
let mlen= moves.length;

function computerPlay() {
    return moves[Math.floor(Math.random()*mlen)];
}

const computerSelection= computerPlay(moves);

rock.addEventListener('click',function(){
    playerSelection="rock"
});

paper.addEventListener('click',function(){
    playerSelection="paper"
});

scissor.addEventListener('click',function(){
    playerSelection="scissor"
});

// playerSelection=prompt("Enter your move in lowercaps:");

console.log(computerSelection);

document.getElementById("playerselection").innerHTML =playerSelection.toUpperCase();
document.getElementById("computerselection").innerHTML =computerSelection.toUpperCase();


function score(playerSelection,computerSelection) {
    
    if (computerSelection=="rock" && playerSelection=="paper"|| computerSelection=="paper" && playerSelection=="scissor" || computerSelection=="scissor" && playerSelection=="rock") {
        result=win;
        p=p+1;
    }
    else if(computerSelection==playerSelection){
        result=draw;
        p=p+0.5;
        c=c+0.5;
    }
    else{
        result=loss;
        c=c+1;
    }
    
    return result;
}

i=i+1;

console.log(score(playerSelection,computerSelection));
document.getElementById("computerscore").innerHTML = c;
document.getElementById("playerscore").innerHTML = p;
document.getElementById("playername").innerHTML =Yourname.toUpperCase();
document.getElementById("computer").innerHTML = "COMPUTER";
console.log("Computer:"+c);
console.log("Player:"+p);

let fscore;

while(i>=5){

function finalscore(c,p) {

    if (c>p){
        fscore=" Computer won! "
    }
    else if(c==p){
        fscore=" It's a draw! "
    }

    else{
        fscore=" "+Yourname+" "+"won! "
    }
    return fscore;
}


console.log(finalscore(c,p));
document.getElementById("message").innerHTML =fscore;
i=0;
c=0;
p=0;
    }
    
}

}
