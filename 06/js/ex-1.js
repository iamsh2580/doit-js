// const button = document.querySelector("button");

// button.onclick = function() {
//   document.body.style.backgroundColor = "#222";
//   document.body.style.color = "#fff";
// }

const button =document.querySelector("button");

function backColorChange(){
  document.body.style.backgroundColor="#222";
  document.body.style.color="#fff";
  document.body.innerText=`현재 배경색은 ${document.body.style.backgroundColor}`

}

button.onclick=backColorChange;