//서버에서 회원 정보 가져와 표시하기1
const url="https://jsonplaceholder.typicode.com/users";

// fetch(url)
// .then(Response=>Response.json())
// .then(users=>console.log(users));

async function init(){
    const Response=await fetch(url);
    const users=await Response.json();
    display(users);
}


function display(users){
    const result=document.querySelector("#result");
    let string="";
    users.forEach(user => {
        string+=`
        <table>
            <tr>
                <th>이름</th>
                <td>${user.name}</td>
            </tr>
            <tr>
                <th>아이디</th>
                <td>${user.username}</td>
            </tr>
            <tr>
                <th>이메일</th>
                <td>${user.email}</td>
            </tr>
        </table>

        `;
    });
    result.innerHTML=string;
}
init();


{/* <ul>
<li>${user.name}</li>
<li>${user.username}</li>
<li>${user.email}</li>
</ul> */}