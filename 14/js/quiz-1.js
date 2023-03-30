const canvas=document.querySelector("canvas");
const ctx=canvas.getContext("2d");


ctx.fillStyle="yellow";

ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(300,100);
ctx.lineTo(150,300);
ctx.lineTo(200,0);
ctx.lineTo(250,300);
ctx.closePath();
ctx.stroke();
ctx.fill();
