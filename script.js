let gameSeq = [];
let userSeq = [];
let btns = ["yellow","red","purple","green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", () => {
    if (started == false) {
        console.log("game started")
        started = true;
        levelUp ();
    }
})
function btnFlash(btn) {
    btn.classList.add("flash")//to add flash class
    setTimeout(() => {
        btn.classList.remove("flash")
    }, 500);
}
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level: ${level}`
    
    //random color selector code

    //to randomly select the color index from array btns
    let ranIndx = Math.floor((Math.random() * 3)) + 1;
    //to randomly select colour
    let ranColor = btns[ranIndx];
    gameSeq.push(ranColor)
    let btn = document.querySelector(`.${ranColor}`);

    btnFlash(btn);
}
function chkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp,1000);
     }
    }
    else {
        body = document.querySelector("body");
        body.style.backgroundColor = "red";
        setTimeout(() => {
            body.style.backgroundColor = "white";
        }, 300);
        h2.innerHTML = `Game over <b>your Score: ${level}</b><br> press any key to start !!!!`;
        reset();
    }

}
// process to get the button pressed form user
function btnPress() {
    let btn = this;
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor)
    btnFlash(btn)
    chkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function reset() {
    gameSeq = [];
    userSeq = [];
    started = false;
    level = 0;
}