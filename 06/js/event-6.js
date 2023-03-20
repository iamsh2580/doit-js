// const box = document.querySelector("#box");

// box.addEventListener("click", (e) => {
//   alert(`이벤트 발생 위치 : ${e.pageX}, ${e.pageY}`);
// });

const box=document.querySelector("#box");

box.addEventListener("click",(e)=>{
  alert(`이벤트가 발생한 위치는 ${e.pageX},${e.pageY}입니다`);
});