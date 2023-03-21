const btn = document.querySelector("button");

btn.addEventListener("click",()=>{
    const newp = document.createElement("p");
    const textNode=document.createTextNode("Typsescript");
    newp.appendChild(textNode);

    let basisNode=document.querySelectorAll("p")[2];
    document.body.insertBefore(newp,basisNode);
});