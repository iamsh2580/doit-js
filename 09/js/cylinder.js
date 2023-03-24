class Cylinder{
    constructor(cylDiameter,cylHeight){
        this.diameter=cylDiameter;
        this.height=cylHeight;
    }
    volume(){
        let radius=(this.diameter)/2;
        return (Math.PI*radius*radius*this.height).toFixed(2);
    }
}

const btn=document.querySelector("button");
const result=document.querySelector("#result");

btn.addEventListener("click",function(e){
    e.preventDefault();
    const diameter=document.querySelector("#cyl-diameter").value;
    const height=document.querySelector("#cyl-height").value;

    if(diameter==""||height==""){
        result.innerText=`지름과 높이를 입력`;
    }else{
        let cylinder=new Cylinder(diameter,height);
        result.innerText=`원기둥의 부피는 ${cylinder.volume()}입니다.`;
    }
});