// BUTTONS
function goToChannel(){
  window.open("https://youtube.com/@bhumixcore","_blank");
}

function goToShop(){
  window.location.href="shop.html";
}

function goToStart(){
  window.location.href="start.html";
}

function goToLogin(){
  window.location.href="login.html";
}

// PARTICLE CANVAS (EXTREME EFFECT)
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<100;i++){
  particles.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    vx:(Math.random()-0.5)*2,
    vy:(Math.random()-0.5)*2
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p=>{
    p.x += p.vx;
    p.y += p.vy;


    ctx.fillStyle="#00f0ff";
    ctx.fillRect(p.x,p.y,2,2);
  });

  requestAnimationFrame(animate);
}

animate();

