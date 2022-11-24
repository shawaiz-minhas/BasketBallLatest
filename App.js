let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");

let val = 0;
let val2= 0

function one1(){
    val+=1;
    score1.innerHTML = val
}
function two1(){
    val+=2;
    score1.innerHTML = val
}
function three1(){
    val+=3;
    score1.innerHTML = val
}


function one2(){
    val2+=1;
    score2.innerHTML = val2
}
function two2(){
    val2+=2;
    score2.innerHTML = val2
}
function three3(){
    val2+=3;
    score2.innerHTML = val2
}
function newGame(){
    val =0;
    val2 =0;
    score1.innerText = 0;
    score2.innerText = 0;
}