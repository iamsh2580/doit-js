const displayDate = document.querySelector("#today");

const today= new Date();
console.log(today.toDateString());

const year=(today.getFullYear());
const month=today.getMonth()+1;
const date =today.getDate();
const day1=today.getDay();

let day2="";

console.log(day1);

switch(day1){
    case 0:
        day2="일";
        break;
    case 1:
        day2="월";
        break;
    case 2:
        day2="화";
        break;
    case 3:
        day2="수";
        break;
    case 4:
        day2="목";
        break;
    case 5:
        day2="금";
        break;
    case 6:
        day2="토";
        break;
}

console.log(day2);

displayDate.innerText=`${year}년 ${month}월 ${date}일 ${day2}요일`;

console.log(today.toTimeString());

let displayTime=document.querySelector("#clock");

let clock = () => {
    let current =new Date();
    let hours=current.getHours();
    let mins = current.getMinutes();
    let secs  = current.getSeconds();

    let periods="AM";

    if (hours ===0){
        hours=12;
    }else if(hours >12){
        periods="PM";
    }

    hours=(hours<10)?"0"+hours:hours;
    mins=(mins<10)?"0"+mins:mins;

    displayTime.innerText=`${hours}시 ${mins}분 ${secs}초`;
    }

setInterval(clock,1000);