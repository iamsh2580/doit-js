function showData(name,age){
    alert(`나이가 ${age}세인 ${name}씨 환영합니다!`);
}

function getDate(callback){
    let userName=prompt("이름을 입력해주세요","홍길동");
    let userAge = prompt("나이를 입력해주세요",20);
    callback(userName,userAge);
}

getDate(showData);


