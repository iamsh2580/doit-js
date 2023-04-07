const canvas=document.querySelector("canvas");
const ctx=canvas.getContext("2d");

// const btn=document.querySelector("button");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

function Circle(x,y,r,color){
    this.x=x;
    this.y=y;
    this.r=r;
    this.color=color;

    this.draw=function(){
        ctx.beginPath();
        ctx.fillStyle=this.color;
        ctx.arc(this.x,this.y,this.r,0,Math.PI*2,false);
        ctx.fill();
    }
}

//한번에 나오는 유형 (20개씩)
const objs=[];
for(let i=0;i<10;i++){
    const r= Math.floor((Math.random()*50))+10;
    const x= Math.random()*(canvas.width-r*2)+r;
    const y= Math.random()*(canvas.height-r*2)+r;
    const color=`rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`
    objs.push(new Circle(x,y,r,color));
}

for(let i=0;i<objs.length;i++){
    objs[i].draw();
}



//버튼 클릭시 나오는 유형
// btn.addEventListener("click",()=>{
//     let x= Math.floor((Math.random()*canvas.width)+1);
//     let y= Math.floor((Math.random()*canvas.height)+1);
//     let r= Math.floor(((Math.random()*canvas.height)+1)/2);
//     let color=randomRGB();

//     let item= new Circle(x,y,r,color);
//     item.draw();
// });

// function randomRGB(){
//     let red= Math.floor(Math.random() * 256);
//     let green=Math.floor(Math.random() * 256);
//     let blue=Math.floor(Math.random() * 256);
    

//     return `rgb(${red},${green},${blue})`;


