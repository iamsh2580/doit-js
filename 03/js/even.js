//else-if 문 풀이
// let num = Number(prompt("숫자를 입력해주세요"));

// if(num !==null){
//     if(num ===0){
//         alert("0 입니다.");
//     }else if(num%2==1){
//         alert("홀수입니다.");
//     }else{
//         alert("짝수입니다.")
//     }
// }else{
//     alert("숫자를 입력하세요!");
// }

let num=Number(prompt("숫자를 입력해주세요!"));

let result= (num!==null)?((num%2===0)?`${num}은 짝수`:`${num}은 홀수`):"0입니다";
alert(result);