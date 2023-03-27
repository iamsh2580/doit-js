//set 사용하여 안에 숫자 집어넣기
//이 숫자들은 1~45범위
//이 숫자 내에서 무작위로 수를 추출
//추출된 6가지를 출력
//아니었다


 const btn=document.querySelector("button");
 const result=document.querySelector("#result");

const luckNum={
    cnt:6,
    max:45
}

btn.addEventListener("click",()=>{
    let {cnt,max}=luckNum;
    let myNum=new Set();
    for(let i=0;i<cnt;i++){
        myNum.add(Math.floor(Math.random()*max)+1);
    }
    result.innerText=`${[...myNum]}`;
})


//중복 제외로 셋을 이용하고 범위안에 6개 추출
