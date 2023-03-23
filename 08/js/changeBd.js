


function changeBg(){
    const bgCount=5;
    let rd=Math.floor(Math.random()*bgCount)+1;

    document.body.style.backgroundImage=`url(images/bg-${rd}.jpg)`
}

document.addEventListener("load",changeBg());

