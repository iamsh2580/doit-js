const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

// let img = new Image();
// img.onload = function() {
//   ctx.drawImage(img, 0, 0);
// } 
// img.src = "images/cat.jpg";

let img=new Image();
img.onload=function(){
  ctx.drawImage(img,0,0,canvas.width,canvas.height);
}
img.src="images/cat.jpg";