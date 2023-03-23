// function openPopup() {
//   window.open("notice.html", "이벤트팝업", "width=600 height=500 left=300 top=200")
// }
// const bttn = document.querySelector("button");
// bttn.onclick = openPopup;

function openPopup(){
window.open("notice.html","","width=300 height=300 left=200 top=200");
}

const btn=document.querySelector("button");

btn.addEventListener("click",openPopup);