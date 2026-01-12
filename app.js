let gameSeq=[];
let userSeq=[];

let btns=["yellow","purple","green","pink"];

let started=false;
let level=0;
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game started");
        started=true;
         levelUp();
    }
   
});

 function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 300);
 }

 function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 300);
 }
 
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
//random btn choose
let randIdx=Math.floor(Math.random()*3);
let randcolor=btns[randIdx];
let randBtn=document.querySelector(`.${randcolor}`)
    btnFlash(randBtn);
    // console.log(randIdx);
    console.log(randcolor); 
    // console.log(randBtn);
    gameSeq.push(randcolor);
    console.log(gameSeq);
};

function checkAns(idx){
    // console.log(`current level: ${level}`);
    if(gameSeq[idx]===userSeq[idx]){
        // console.log("same value");
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,500);
        }
    }else{
        h2.innerText="Game Over! please press any key to restart.";
        h3.innerText=`Game score is ${level}`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor="white";
            
        }, 1000);

            reset();
    }
}

function btnPress(){
    console.log(this);
    let btn=this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);


};

let allBtn=document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click" ,btnPress);
};

function reset(){
    started=false;
    level=0;
    userSeq=[];
    gameSeq=[];
};