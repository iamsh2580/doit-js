/*사용자가 프롬프트 창에 숫자를 입력했을 때 그 숫자는 함수로 넘겨주고,
함수에서는 숫자가 양수인지,음수인지 또는 0인지 판단하여
알림 창에 보여주는 프로그램을 작성 */

//parseInt vs Number 차이
//왜 전역으로 받으면 undefined가 되는거지..
// let userInput;

// function fuc(userInput){
//     userInput=parseInt(prompt("숫자를 입력하세요"));
//     if(userInput ===0){
//         document.write(`${userInput}은 0입니다.`);
//     }else if(userInput >0){
//         document.write(`${userInput}은 양수입니다.`);
//     }else if(userInput <0){
//         document.write(`${userInput}은 음수입니다.`);
//     }else{
//         document.write(" 숫자가 아닙니다.");
//     }
// }

// fuc();

let fuc =(n)=>{
    if(n>0){
        document.write(`${n}은 양수`);
    }else if(n<0){
        document.write(`${n}은 음수`);
    }else{
        document.write(`${n}은 0`);
    }
}

let num=parseInt(prompt("숫자를 입력"));

if (!isNaN(num)){
    fuc(num);
}else{
    document.write("숫자가 아닌 수를 입력했습니다");
}
