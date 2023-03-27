//서버 연결을 위한 객체 생성
let xhr=new XMLHttpRequest();
//서버와 연결
xhr.open("GET","student.json");
xhr.send();

xhr.onreadystatechange= function(){
    if(xhr.readyState == 4 && xhr.status ==200){
        let student=JSON.parse(xhr.responseText);
        document.getElementById("result").innerHTML=`
        <h1>${student.name}</h1>
        <ul>
        <li>전공: ${student.major}</li>
        <li>학년: ${student.grade}</li></ul>
        `;
    }
}