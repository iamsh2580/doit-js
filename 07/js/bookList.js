const title= document.querySelector("#title");
const author = document.querySelector("#author");
const saveBtn = document.querySelector("#save");
const bookList = document.querySelector("#bookList");

saveBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    const item = document.createElement("li");
    item.innerHTML=`${title.value}-${author.value}
    <span class="deleteBtn">삭제</span>`;
    bookList.appendChild(item);

    title.value="";
    author.value="";

    const deleteBtns = document.querySelectorAll(".deleteBtn");

    for(let deleteBtn of deleteBtns){
        deleteBtn.addEventListener("click",function(){
            this.parentNode.parentNode.removeChild(this.parentNode);
        })
    }
});