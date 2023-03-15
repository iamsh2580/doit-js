let number=Number(prompt("소수임을 확인할 숫자를 입력하세요"));
let isPrime;

if(number === 1){
    document.write("1은 소수도,합성수도 아닙니다.");
    
}else if(number===2){
    document.write("2는 소수입니다.");
}else{
    for(let i=2;i<number;i++){
        if(number%i === 0){
            isPrime=false
            break;
        }
        isPrime=true;
    }
    let result=(isPrime===true)?`${number}은(는) 소수입니다`:`${number}은(는) 소수가 아닙니다.`;
    document.write(result);
}

/*
3,5,7,11,13,17,19
소수: 그 전까지 수들로 나눴을떄 나누어 떨어지지않아야 소수입니다.
그 전 숫자를 다 확인해서 나누고 ->반복적으로 나눠봐야하고 나누어지는즉시 false로 바꿈, 
for,which 뭘쓰지? 
ifprime이 true 면 소수

for(3~본인까지 나누기){
    나누어서 ==0이 된다?
    isPrime=false;

}
//지금 막힌게 3부터 할건데 4넣었다.1,2,4니까. 2가있으니안되자나 2부터 시작? 2나누면 num%2==0 되니까 false상태, num%3!==0 이니까 true 상태
그래서 하나라도 ==0이 된다면? 그건 소수가 아니니까 isprime은 false 하고 내보내야함 
for(let i=2;i<number;i++){
    if(number%i === 0){
        isPrime=False
        break;
    isPrime=True;
}
let result=(isPrime===True)?`${number}은(는) 소수입니다`:`${number}은(는) 소수가 아닙니다.`;
document.write(result);
 */
