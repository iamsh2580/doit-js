//json파일을 읽어온다
fetch('student-2.json')
//json파일 객체로 변경
.then(response=>response.json())
//객체출력
.then(json=>{
    let output='';
    json.forEach(student=>{
        output+=`
        <h2>${student.name}</h2>
        <ul>
            <li>전공: ${student.major}</li>
            <li>학년: ${student.grade}</li>
        </ul>
        <hr>
        `;
    });
    document.querySelector("#result").innerHTML=output;
})
.catch(error=>console.log(error));