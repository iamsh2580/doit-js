const btn = document.querySelector("#order");
const orderInfo = document.querySelector("#orderInfo");
const title=document.querySelector("#container > h2")

btn.addEventListener("click",()=>{
    let newP=document.createElement("p");
    let ordetItem = document.createTextNode(title.innerText);
    newP.appendChild(ordetItem);
    orderInfo.appendChild(newP);

    newP.style.color="green";
},{once:true});