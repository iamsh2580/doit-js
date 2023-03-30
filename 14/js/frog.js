const canvas=document.querySelector("canvas");
const ctx=canvas.getContext("2d");

//얼굴
ctx.fillStyle="green";
ctx.strokeStyle="black";
ctx.scale(1,0.7);
ctx.beginPath();
ctx.arc(200,150,100,0,Math.PI*2,true);
ctx.fill();
ctx.stroke();

// 왼쪽 눈
ctx.fillStyle="white";
ctx.strokeStyle="black";
ctx.scale(1,0.9);
ctx.beginPath();
ctx.arc(150,70,20,0,Math.PI*2,true);
ctx.fill();
ctx.stroke();
//왼쪽 눈동자
ctx.beginPath();
ctx.fillStyle="black";
ctx.arc(150,70,10,0,Math.PI*2,true);
ctx.fill();

// 오른 눈
ctx.fillStyle="white";
ctx.strokeStyle="black";
ctx.scale(1,0.9);
ctx.beginPath();
ctx.arc(250,80,20,0,Math.PI*2,true);
ctx.fill();
ctx.stroke();
//오른쪽 눈동자
ctx.beginPath();
ctx.fillStyle="black";
ctx.arc(250,80,10,0,Math.PI*2,true);
ctx.fill();

//입
ctx.strokeStyle="pink";
ctx.beginPath();
ctx.arc(200,200,50,0,(Math.PI/180)*180,false);
ctx.lineWidth=3;
ctx.stroke();
ctx.closePath();