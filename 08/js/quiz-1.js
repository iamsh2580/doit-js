//생년월일을 입력하고 계산 버튼을 클릭하면 
//생일로부터 지금까지 며칠이 지났는지,
//또는 몇 시간이 지났는지 보여주는 프로그램



const myYear = document.querySelector("#year");
const myMonth = document.querySelector("#month");
const myDate = document.querySelector("#date");
const btn = document.querySelector("#bttn");

const current = document.querySelector("#current");
const  days = document.querySelector("#days");
const hours = document.querySelector("#hours");

let today=new Date();
let todayYear=today.getFullYear();
let todayMonth=today.getMonth()+1;
let todayDate=today.getDate();
let todayHrs=today.getHours();
let todayMins=today.getMinutes();
current.innerText=`${todayYear}년 ${todayMonth}월 ${todayDate}일 ${todayHrs}시 ${todayMins}분 현재`;

btn.addEventListener("click",()=>{
    const birthDay=new Date(myYear.value,myMonth.value-1,myDate.value);

    let passed=today.getTime()-birthDay.getTime();
    let passedDay=Math.floor(passed/(1000*60*60*24));
    let passedHrs=Math.floor(passed/(1000*60*60));

    // 출력
    days.innerText=`날짜로는 ${passedDay}일이 흐르고,`
    hours.innerText=`시간으로는 ${passedHrs}시간이 흘렀습니다.`


    myYear.value="";
    myMonth.value="";
    myDate.value="";
});
