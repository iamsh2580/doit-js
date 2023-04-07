const canvas=document.querySelector("canvas");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const Circle={
    x:100,
    y:100,
    r:30,
    dx:4,
    dy:4,
    color:"pink"
}

function drawCircle(){
    ctx.beginPath();
    ctx.arc(Circle.x,Circle.y,Circle.r,0,Math.PI*2,false);
    ctx.fillStyle=Circle.color;
    ctx.fill();
}

function move(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawCircle();

    Circle.x+=Circle.dx;

    if(Circle.x+Circle.r>canvas.width || Circle.x-Circle.r<0){
        Circle.dx = -Circle.dx;
    }

    requestAnimationFrame(move);
}

move();