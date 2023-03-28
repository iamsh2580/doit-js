const order=new Promise((resolve,reject)=>{
    let coffee=prompt("어떤 커피를 주문?","헤이즐럿라떼");

    if(coffee !=null && coffee!=""){
        document.querySelector(".start").innerText=`${coffee}를 주문합니다`;
        setTimeout(()=>{
            resolve(coffee);
        },3000)
    }else{
        reject("주문하지 않았습니다.")
    }
})

function display(result){
    document.querySelector(".end").innerText=`${result}가 나왔습니다~`;
    document.querySelector(".end").classList.add("active");
    document.querySelector(".start").classList.add("done");
}
function showErr(err){
    console.log(err);
}

order.then(display).catch(showErr);