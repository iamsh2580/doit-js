const canvas=document.querySelector("canvas");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

function Rect(x,y,w,h,c){
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.c=c;

    this.dx=Math.floor(Math.random()*10)+1;
    this.dy=Math.floor(Math.random()*10)+1;

    this.draw=function(){
        ctx.beginPath();
        ctx.fillStyle=this.c;
        ctx.fillRect(this.x,this.y,this.w,this.h,this.c);
    }

    this.animation=function(){
        this.x +=this.dx;
        this.y +=this.dy;

        if(this.x+this.w>canvas.width || this.x<0){
            this.dx = -this.dx;
        }

        if(this.y+this.h>canvas.height || this.y<0){
            this.dy = -this.dy;
        }
        this.draw();
    }
}

const r1 = new Rect(10, 10, 50, 50, "red");
const r2 = new Rect(20, 20, 30, 30, "blue");


function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    r1.animation();
    r2.animation();

    requestAnimationFrame(update);
}

r1.draw();
r2.draw();
update();