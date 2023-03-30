const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

// ctx.fillStyle = "yellow";
// ctx.strokeStyle = "red";

// ctx.font = "italic 60px serif";
// ctx.fillText("Javascript", 50, 70);
// ctx.strokeText("Javascript", 50, 70);
// ctx.font = "bold 60px sans-serif";
// ctx.fillText("Javascript", 50, 150);
// ctx.strokeText("Javascript", 50, 150);

//1. 이탈릭,육십,세리프 위친는 50 70
//2. 볼드 육십 세리프 위치는 50,150

ctx.fillStyle="red";
ctx.strokeStyle="blue";

ctx.font="italic 60px serif";
ctx.fillText("Hungry",50,70);
ctx.strokeText("Hungry",50,70);

ctx.font="bold 60px serif";
ctx.fillText("Help me",50,150);
ctx.strokeText("Help me",50,150);