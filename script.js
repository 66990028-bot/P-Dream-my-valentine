// Falling hearts
setInterval(()=>{
let heart=document.createElement("div");
heart.className="heart";
heart.style.left=Math.random()*100+"vw";
heart.style.animationDuration=(3+Math.random()*3)+"s";
heart.innerHTML="💖";
document.body.appendChild(heart);
setTimeout(()=>heart.remove(),6000);
},300);

// Play music
function playMusic(){
let m=document.getElementById("music");
if(m) m.play();
}

// Runaway NO button
function runAway(btn){
btn.style.position="absolute";
btn.style.left=Math.random()*80+"%";
btn.style.top=Math.random()*80+"%";
}
