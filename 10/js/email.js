//@ 앞 세자리만 가린다.. 
//1. @를 구분한다 -> indexof("@") -> @위치가 나온다
//2. 앞에 세자리만 특장하고 나머지는 *로 바꾼다  (땡))
//보여준다

//indexOf("@")를 하면 위치가 나오는데.. 
//@위치로 substring(0,@위치)하면 아이디 부분만 나옴
//근데 어차피 출력은 다 나와야하니까.. 선별된건 저장해봤자 안되는거 아냐?

//split(나눌 문자)를 서서 나오는 배열의 2번째 자리 수까지 * 으로 바꿔야하?
const userEmail=document.querySelector("#userEmail");
const btn=document.querySelector("button");
const result=document.querySelector("#result");
// btn.addEventListener("click",()=>{
// let uE=userEmㅣail.value;
// let a= uE.split("@")[0].slice(0,3);
// let b=uE.split("@")[1];

// result.innerText=`
// ${a}...@${b}
// `;
// });

//문제2 사용자 이름을 절반만 표시하려면?
//아이디를 추출하고 -> split("@")[0]
//그 수를 센 다음에.. ->length
//아이디 숫자의 절반 수를 찾는다 halfId= /2
//subString의 마지막 위치에 절반수를 넣으면 끝!

btn.addEventListener("click",()=>{
    let id=(userEmail.value).split("@")[0];
    let email=(userEmail.value).split("@")[1];
    let idHalfLen=Math.floor((id.length)/2);
    
    let userHalfId=id.substring(0,idHalfLen);

    result.innerText=`
    ${userHalfId}...@${email}
    `;
    console.log(userHalfId);


});
