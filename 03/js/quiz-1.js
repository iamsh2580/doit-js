/*문제
1, 3, 5, 7, 9, 11, 13, 15, 17, 19
위 배열에서 10보다 큰 값을 찾아
1.10보다 큰지 반복 필요
배열에서 뺴와야하니까 foreach?? 그 안에 if >10 맞으면 true 아니면 false??  

2.큰 수는 바로 출력? 또는 배열에 저장하여 출력

1>10? false 11>10 true -> 저장 또는 출력 -> 저장 어떻게?

let result;

for(){
    let=(num>10)?true:false;
}
 */

// let numbers=[1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

// numbers.forEach(function(number){
//     if(number>10){
//         document.write(`${number}.`);
//     }
// });

//너무 복잡하게 생각했나..ㅎㅎ

const arr=[1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

for(let i=0;i<arr.length;i++){
    if(arr[i]>10){
        document.write(`${arr[i]}는 10보다 큽니다<br>`);
    }
}