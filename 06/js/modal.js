const openBtn=document.querySelector("#open");
const modalBox=document.querySelector("#modal-box");
const closeBtn=document.querySelector("#close");

openBtn.addEventListener("click",()=>{
    modalBox.classList.toggle("active");
    
});

closeBtn.addEventListener("click",()=>{
    modalBox.classList.toggle("active");
})