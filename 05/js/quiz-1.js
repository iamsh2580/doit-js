const detailBtn=document.querySelector("#view");
const detailCont=document.querySelector("#detail");

detailBtn.onclick= function(){
    detailCont.classList.toggle("hidden");
}