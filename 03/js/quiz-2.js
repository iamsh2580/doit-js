/* 사용자에게 1보다 큰 수를 입력하게 한 후 입력한 숫자까지 짝수만 더하는 프로그램 작성 */

let num=parseInt(prompt("1보다 큰 수 하나를 입력하시오"));
let sum=0;

if(num>1){
/*반복 입력한 수까지
이것이 짝수입니까?
합계에 더하기
*/
    for(let i=0;i<=num;i++){
        if(i%2==0){
            sum +=i
        }
    }
    document.write(`${num} ----- ${sum}`);
}else{
    document.write("1보다 큰 수를 입력하세요!");
}

/**합계 출력 */