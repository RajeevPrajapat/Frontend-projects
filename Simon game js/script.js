let gameseq=[];
let userseq=[];
let level=0;
let started = false;

let btns = ['red' , 'yellow' ,'green' , 'purple'];

let h2 = document.querySelector("h2");

document.addEventListener("keypress" ,function(){
    if(started == false){
        console.log("game starete");
        started = true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    userseq =[];
    level++;
    h2.innerHTML = `Level ${level}`;
    // random btn choose
    let random = Math.floor(Math.random() * 3);
    let randColor = btns[random];
    gameseq.push(randColor)
    console.log(gameseq);
    let randbtn = document.querySelector
    (`.${randColor}`);

    btnFlash(randbtn);
}

function checkAns(ii){
    if (userseq[ii] === gameseq[ii]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerText = `Game over at level  
        ${level} ! press any key to start game.`;
        reset();
    }
}

function btnPress(){
    let btn = this;
    btnFlash(btn)
    bt= btn.getAttribute("id")
    userseq.push(bt);
    console.log(userseq);

    checkAns(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click",btnPress)
}

function reset(){
    userseq = [];
    gameseq = [];
    started = false;
    level = 0;
}














