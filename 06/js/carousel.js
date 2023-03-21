const container=document.querySelector("#container");
const pics=["pic-1.jpg","pic-2.jpg","pic-3.jpg","pic-4.jpg","pic-5.jpg"];

container.style.backgroundImage=`url(images/${pics[0]})`;
const arrows=document.querySelectorAll(".arrow");
let i =0;


arrows.forEach(arrow=>{
    arrow.addEventListener("click",(e)=>{
        if(e.target.id ==="left"){
            i--;
            if(i<0){
                i=pics.length-1;
                
            }
        }else if(e.target.id === "right"){
            i++;
            if(i>=pics.length){
                //01234 에서 5가된다면? 4에서 5=0 -4가되어야하니까 
                i=0;
            }    
        }
        container.style.backgroundImage=`url(images/${pics[i]})`;
    })
});

window.addEventListener("contextmenu",(e)=>{
    e.defaultPrevented();
    alert("마우스 오른쪽 버튼은 사용할 수 없다.");
})