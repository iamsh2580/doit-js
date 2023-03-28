const url="http://dummyjson.com/quotes";

fetch(url)
.then(response=>response.json())
.then(data=>{
    const rdNum=Math.floor((Math.random()*30));
    const quoteItem=`${data.quotes[rdNum].quote}`;
    const authorItem=`${data.quotes[rdNum].author}`;
    document.querySelector(".quote").innerHTML=quoteItem;
    document.querySelector(".author").innerHTML=authorItem;
})
.cathch(error=>console.log(error));

