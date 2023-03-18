const n1 = document.querySelector("#number1");
const n2 = document.querySelector("#number2");
const btn = document.querySelector("button");
let result= document.querySelector("#result");

btn.onclick=()=>{
    result.innerText=getGCD(n1.value,n2.value);
}

function getGCD(a,b){
    let gcd=0;
    let max=(a>b)?a:b;

    for(let i=0;i<=max;i++){
        if(a%i==0 && b%i==0){
            gcd=i;
        }
    }
    return gcd
}