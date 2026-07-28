// =====================================
// OPERATION: BIRTHDAY
// script.js
// =====================================

const screens = document.querySelectorAll(".screen");

function showScreen(id){

screens.forEach(screen=>{

screen.classList.remove("active");

});

document.getElementById(id).classList.add("active");

window.scrollTo(0,0);

}

// =====================================
// LOADING SCREEN
// =====================================

let progress=0;

const progressBar=document.getElementById("progress-bar");

const progressText=document.getElementById("loading-number");

const loading=setInterval(()=>{

progress++;

progressBar.style.width=progress+"%";

progressText.innerText=progress+"%";

if(progress>=100){

clearInterval(loading);

setTimeout(()=>{

showScreen("briefing");

startTyping();

},700);

}

},30);

// =====================================
// BRIEFING TYPEWRITER EFFECT
// =====================================

function startTyping(){

const lines=document.querySelectorAll(".briefing-text p");

lines.forEach(line=>{

line.style.opacity="0";

});

lines.forEach((line,index)=>{

setTimeout(()=>{

line.style.transition="opacity .7s";

line.style.opacity="1";

},index*700);

});

}

// =====================================
// QUIZ ONE
// =====================================

function wrongQuizOne(){
 
document.getElementById("quiz1-result").innerHTML=

"❌ Access Denied.<br>Incorrect medical clearance.";

}

function correctQuizOne(){

document.getElementById("quiz1-result").innerHTML=

"✅ Medical knowledge verified.<br>Proceeding to identity verification...";

setTimeout(()=>{

showScreen("quiz2");

},1700);

}

// =====================================
// QUIZ TWO
// =====================================

function wrongQuizTwo(){

document.getElementById("quiz2-result").innerHTML=

"❌ Voice profile mismatch.<br>Try again.";

}

function correctQuizTwo(){

document.getElementById("quiz2-result").innerHTML=

"✅ Voice profile matched.<br><br>Frequently Used Expression Detected:<br><strong>\"Basically\"</strong>";

setTimeout(()=>{

showScreen("decrypt");

startDecrypt();

},2200);

}
// =====================================
// DECRYPTION ANIMATION
// =====================================

function startDecrypt(){

let percent=0;

const decryptBar=document.getElementById("decrypt-bar");

const decryptNumber=document.getElementById("decrypt-number");

const decryptLoading=setInterval(()=>{

percent++;

decryptBar.style.width=percent+"%";

decryptNumber.innerText=percent+"%";

if(percent>=100){

clearInterval(decryptLoading);

setTimeout(()=>{

showScreen("letter");

},900);

}

},35);

}

// =====================================
// BUTTON HOVER EFFECTS
// =====================================

const allButtons=document.querySelectorAll("button");

allButtons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-2px)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0px)";

});

});

// =====================================
// SMALL BLUEPRINT FLICKER EFFECT
// =====================================

setInterval(()=>{

document.body.style.filter="brightness(1.03)";

setTimeout(()=>{

document.body.style.filter="brightness(1)";

},120);

},5000);

// =====================================
// PREVENT IMAGE DRAGGING
// =====================================

document.querySelectorAll("img").forEach(image=>{

image.draggable=false;

});

// =====================================
// CONSOLE EASTER EGG
// =====================================

console.log("%cOPERATION: BIRTHDAY","color:#5fd1ff;font-size:22px;font-weight:bold;");

console.log("%cMission Status: ACTIVE","color:white;");

console.log("%cCommander: General Khalidah","color:#8adfff;");

console.log("%cFailure is NOT an option.","color:#ff6b6b;font-weight:bold;");
// =====================================
// OPTIONAL POLISH
// =====================================

// Allow pressing Enter on focused buttons
document.querySelectorAll("button").forEach(button=>{

button.addEventListener("keyup",(event)=>{

if(event.key==="Enter"){

button.click();

}

});

});

// Disable right-click on images
document.querySelectorAll("img").forEach(image=>{

image.addEventListener("contextmenu",(event)=>{

event.preventDefault();

});

});

// Smooth fade-in for all screens
screens.forEach(screen=>{

screen.style.transition="opacity .6s ease";

});

// Restart mission from the end
const restartButton=document.querySelector("#complete .main-btn");

if(restartButton){

restartButton.addEventListener("click",()=>{

location.reload();

});

}

// =====================================
// END OF FILE
// =====================================
