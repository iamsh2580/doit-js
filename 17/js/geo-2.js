const geoBtn=document.querySelector("#getLocation");
const result=document.querySelector("#result");

geoBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition,errorPosition);
    
        const options={
            enableHighAccuracu:true,
            timeout:5000,
            maximumAge:0
        };

        let watchId=navigator.geolocation.watchPosition(showPosition,errorPosition,options);

        setTimeout(function(){
            navigator.geolocation.clearWatch(watchId);
        },30000)
    
    }else{

        alert("지오로케이션을 지원하지 않습니다.");
    }
});

function showPosition(position){
    result.innerHTML=`
    <b>위도 : </b> ${position.coords.latitude},
    <b>경도 : </b> ${position.coords.longitude}`;
};

function errorPosition(err){
    alert(err.message);
}