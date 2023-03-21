const btn = document.querySelector("#bttn");
const notiBox = document.querySelector("#noti-box");

btn.addEventListener("click",(e)=>{
    e.preventDefault();

    const noti=document.createElement('div');
    noti.innerText=`알림 내용이 표시됩니다.`;
    noti.classList.add("noti");
    notiBox.appendChild(noti);

    setTimeout(()=>{
        noti.remove();
    },3000);
});