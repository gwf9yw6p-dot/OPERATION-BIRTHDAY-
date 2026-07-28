// ======================================
// OPERATION: BIRTHDAY
// script.js
// ======================================

const screens = document.querySelectorAll(".screen");

function nextScreen(id){

screens.forEach(screen=>{

screen.classList.remove("active");

});

document.getElementById(id).classList.add("active");

window.scrollTo({

top:0,

behavior:"smooth"

});

}

// ======================================
// QUIZ ONE
// ======================================

function correctQuizOne(){

document.getElementById("quizOneResult").innerHTML=

"✅ Medical clearance confirmed.";

setTimeout(()=>{

nextScreen("quiz2");

},1200);

}

function wrongQuizOne(){

document.getElementById("quizOneResult").innerHTML=

"❌ Access denied. Try again.";

}

// ======================================
// QUIZ TWO
// ======================================

function correctQuizTwo(){

document.getElementById("quizTwoResult").innerHTML=

"✅ Identity verified.";

setTimeout(()=>{

nextScreen("access");

},1200);

}

function wrongQuizTwo(){

document.getElementById("quizTwoResult").innerHTML=

"❌ Voice recognition failed. Try again.";

}
// ======================================
// ACCESS SCREEN
// ======================================

const accessButton=document.querySelector("#access .primary-btn");

if(accessButton){

accessButton.addEventListener("mouseenter",()=>{

accessButton.style.transform="translateY(-3px) scale(1.03)";

});

accessButton.addEventListener("mouseleave",()=>{

accessButton.style.transform="translateY(0) scale(1)";

});

}

// ======================================
// SMALL ENTRANCE ANIMATION
// ======================================

function animateCurrentCard(){

const active=document.querySelector(".screen.active .glass-card, .screen.active .letter-card");

if(!active) return;

active.animate(

[

{

opacity:0,

transform:"translateY(25px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],

{

duration:500,

easing:"ease-out"

}

);

}

const originalNextScreen=nextScreen;

nextScreen=function(id){

originalNextScreen(id);

setTimeout(animateCurrentCard,50);

};

// Animate first screen on page load
window.addEventListener("load",()=>{

animateCurrentCard();

});

// ======================================
// RESTART BUTTON
// ======================================

const restartButton=document.querySelector("#finish .primary-btn");

if(restartButton){

restartButton.addEventListener("click",()=>{

location.reload();

});

}
// ======================================
// EXTRA POLISH
// ======================================

// Allow Enter or Space to activate focused buttons
document.querySelectorAll("button").forEach(button=>{

button.addEventListener("keydown",(event)=>{

if(event.key==="Enter"||event.key===" "){

event.preventDefault();

button.click();

}

});

});

// Add a subtle click animation to every button
document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",()=>{

button.animate(

[
{transform:"scale(1)"},
{transform:"scale(.96)"},
{transform:"scale(1)"}
],
{
duration:180,
easing:"ease-out"
}

);

});

});

// ======================================
// END OF FILE
// ======================================
