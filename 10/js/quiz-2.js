const origin = document.querySelector("#origin");
const result = document.querySelector("#result");

let numbers = [2, 4, 6, 8, 10];

// 함수 작성할 부분
function tail(a){
    if(a.length>1){
        //첫번째 요소를 뺀 나머지
        let aa= a.slice(1);
        return aa;
    }else if(a.length ==1){
        return a;
    }
}

origin.innerText = numbers;
result.innerText = tail(numbers);

