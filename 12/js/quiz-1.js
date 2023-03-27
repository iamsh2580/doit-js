const url="https://reqres.in/api/products/10";
const result=document.querySelector("#result");

let xhr=new XMLHttpRequest();
xhr.open("GET",url);
xhr.send();

xhr.onreadystatechange=function(){
    if (xhr.readyState ==4 && xhr.status==200){
        let goods=JSON.parse(xhr.responseText);
        console.log(goods);
        result.innerHTML=`
        <p>상품명:${goods.data.name}</p>
        <p>생산년도:${goods.data.year}</p>
        `;
    }
}