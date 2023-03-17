/*두개의 숫자를 입력받아 두 수의 최대공약수를 구하는 함수를 작성
최대공약수: 두 수 모두 나누어떨어지는 수 중에서 가장 큰 값 */

/*최대공약수...
두 수를 입력 받는다 
1. 각자의 약수를 찾는다 -> 각 약수에서 공통되는 제일 큰 값 ->놉
2. 두 수를 중 가장 작은 수의 값 까지 나눈다 -> 동시에 나눠지는걸 변수에 할당한다.->이걸로!
함수를 사용
*/
// let gcd;
// function findGCD(a,b){
//     //반복적으로 나눈다
//     if(a>b){
//     for(let i=0;i<=b;i++){
//         if(a%i===0 && b%i===0){
//                 gcd=i;
//         }
//     }}else{
//         for(let i=0;i<=a;i++){
//             if(a%i===0 && b%i===0){
//                     gcd=i;
//         }
//     }    
//     }
//     document.write(`${a}와 ${b}의최대공약수는 ${gcd}입니다.`);
// }

// let num1=parseInt(prompt("첫번째 숫자를 입력하세요"));
// let num2=parseInt(prompt("두번째 숫자를 입력하세요"));

// findGCD(num1,num2);

//삼항연산자!를 까먹었네!

let gcd;
function findGCD(a,b){
    let max = a>b?a:b;
    for(let j=0;j<=max;j++){
        if(a%j===0 && b%j ===0){
            gcd=j;
        }
    }    
    document.write(`${a}와 ${b}의 최대공약수는 ${gcd}`);
}

let num1=parseInt(prompt("1번째 숫자"));
let num2=parseInt(prompt("2번째 숫자"));

findGCD(num1,num2);