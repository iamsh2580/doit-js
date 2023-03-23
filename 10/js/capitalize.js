//문제: 영어 소문자로 된 문자열에서 첫번째만 대문자로 변경

//문자열을 입력받은 뒤 배열로 저장한다 -> spilt("") 또는 [...] 또는 Array.from()
//배열 제일 앞 문자만 바꿔치기... 가능할듯 ? [0]=대문자 이렇게
//그리고 한 번 배열채로 출력해보고 되면 배열을 문자열로 바꿔준다 .join("")

// const inputWord=prompt("문자를 입력하세요");
// array1=Array.from(inputWord);
// console.log(array1); //uppsecase는 문자열만 되ㅂ니다.
// array1[0].toUpperCase();
// array1.join("");

// document.write(array1);

//.toUpperCase()를 사용하면 된다!

//다시!
//문자열 입력 받는다 ->   prompt()
//문자열의 첫번째 문자를 찾는다 => slice(0);
//첫번째 문자를 uppercase를 한다
//배열로 저장한다

// const inputWord=prompt("문자열을 입력하세요");
// let FirstW=inputWord.slice(0,1);
// lastW= inputWord.slice(1);
// FirstW = FirstW.toUpperCase();
// document.write(FirstW,lastW);

//더 쉽게
const string=prompt("입력");
const result =[string[0].toUpperCase(),...string.slice(1)].join("");
document.write(result);


