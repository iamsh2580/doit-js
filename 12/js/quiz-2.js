const btn=document.querySelector("button");
const userNum=document.querySelector("#user-number");
const result=document.querySelector("#result");

btn.addEventListener("click", () => {
    let n = userNum.value;
    try {
        if(n === ""|| isNaN(n)){
            throw "숫자입력";
        }
        n= parseInt(n);
        if(n<=10){
            result.innerText=n;
        }
        if(n>10){
            throw "10보다 작게 입력";
        }
    } 
    catch(err){
        alert(err)
    }finally{
        userNum.value="";
    }
});