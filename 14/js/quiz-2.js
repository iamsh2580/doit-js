const canvas=document.querySelector("canvas");
const ctx=canvas.getContext("2d");

let img= new Image();
img.onload=function(){
    ctx.drawImage(img,0,0,canvas.width,canvas.height);
}
img.src="images/cat.jpg";

ctx.beginPath();
ctx.ellipse(200,200,150,200,0,0,(Math.PI)*2);
ctx.clip();
