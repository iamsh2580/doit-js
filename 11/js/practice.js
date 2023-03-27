/* 전개구문
    값을 펼쳐 주는 구문
*/
//1. 나머지 매개변수로 사용할 때
// function addNum(...numbers){
//     let sum=0;
//     for(let number of numbers){
//         sum += number;
//     }
//     return sum;
// }

//2. 전개구문을 사용해 배열 연결
const animal =["cat","dog"]
const color=["red","green","blue"]

let pr1= animal.concat(color);
let pr2=[...animal,...color];
console.log(`concat은 ${pr1}`);
console.log(`전개구문은 ${pr2}`);

//3. 전개구문을 사용해 배열 복사하기
/* 배열,객체는 참조형 변수, 배열을 복사해서 사용*/
const favorite=color
favorite[1]="yellow"
console.log(favorite);

/*객체의 프로퍼티 */
//1. 대괄호 표기법
const book={
    title:"JS",
    pages:761
}
book["publiched data"]='2022-01';
console.log(book);

function add(a,b){
    return a+b;
}
const obj={
    [`${add(10,20)}key`]:"계산식 키"
}
console.log(obj)

/*구조 분해 할당
    자료의 구조를 분해해서 변수에 할당하는 기능*/

// const fruit=["사과","멜론"]
// let apple=fruit[0]
// let melon=fruit[1]

let [apple,melon]=["사과","멜론"]
console.log(apple+melon)

//나머지 변수를 이용해 구조분해할당하기
let [teacher,...students]=["kim","park","lee"]
console.log(teacher);
console.log(students);

/*배열을 변형하는 메서드 */
//여러 개의 값을 처리할 때 배열로 변환하여 사용하곤하죠
//배열을 변형하는 메서드를 배워봅시다

//1. 배열요소에 같은 함수 적용 - map()
//map은 각 배열 요소에 똑같은 함수를 실행한 후
// 그 결과를 새로운 배열로 반환하는 메서드
let numbers=[1,2,3,4,5]
let newNum=numbers.map(number=>number*2);
console.log(newNum);
let newNum2=numbers.map((number,index)=>index+(number+3))
//1,2,3,4,5 -> 01234+3씩 -> 34567 -> 46 8 10 12
console.log(newNum2)

//특정 조건으로 골라내는 fliter()
let scores=[90,35,54,66,82]
highScore=scores.filter(score=> score>=80)
console.log(highScore)
let highScore2=scores.filter((score,index)=>{
if(score>=80){
    console.log(`${index}:${score}`)
    return score;
}
});
console.log(highScore2);

//값 하나로 누적하는 reduce()
/* 배열 원소에 차례대로 함수를 실행해 하나의 결괏값을 만드는 누산기
reduce(함수,(누산기,현잿값,인덱스,원래 배열),초깃값)
*/
let result=numbers.reduce((total,current)=>total+current,0)
console.log(result)

//맵이란?
//키,값으로 이루어져있지만 키는 모든 자료형 사용 가능
let bag=new Map([
    ["color","white"],
    ["haveHandle",true],
    [100,"is cm"]
])
bag.set("brand","nike").set("made","korea")
console.log(bag)

//셋이란
//키 없이 여러 개의 값을 모아놓은것이 배열과 같지만
// 값이 중복되지 않는다
let numSet1=new Set()
numSet1.add("one")
numSet1.add("two")

let numSet2=new Set().add("three").add("four")
let numSet3=new Set([1,2,3,5,4,1,1,3,3,2,7])


//이터러블 객체