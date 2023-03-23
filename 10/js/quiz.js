//문제
//1.원래 배열을 표시 td형태로 
//2.배열의 요소를 모두 더한 후, 
//3.더한 값을 마지막 배열에 넣기 

const origin = document.querySelector("#origin");
const result = document.querySelector("#result");

let numbers = [2, 4, 6, 8, 10];
showArray(origin,numbers); //?

let sum=0;
for(let i=0; i<numbers.length;i++){
    sum += numbers[i];
}
numbers.push(sum);
showArray(result,numbers);

function showArray(area,arr){
    let str;
    str="<table><tr>";
    for(let i=0;i<arr.length;i++){
        str += "<td>"+arr[i]+"</td>";
    }
    str+="</tr></table>"
    area.innerHTML = str;
}