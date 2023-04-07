const getLocationBtn=document.querySelector("#getLocation");
const result=document.querySelector("#result");

getLocationBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition,errorPosition);
    }else{
        alert("지오로케이션을 지원하지 않습니다");
    }
});

function showPosition(position){
    result.innerHTML=`
    <b>위도:</b> ${position.coords.latitude},
    <b>경도:</b> ${position.coords.longitude}
    `;
}

function errorPosition(err){
    alert(err.message);
}