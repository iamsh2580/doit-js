let students=["a","b","c"];
console.log(`현재 students: ${students}`);
localStorage.setItem("students",JSON.stringify(students));

let localData;
if(localStorage === null){
    localData=[];
}else{
    localData=JSON.parse(localStorage.getItem("students"));
}

localData.push("d");
localStorage.setItem("students",JSON.stringify(localData));
console.log(`추가 후 students : ${localData}`);

//삭제
let indexOfValue=localData.indexOf("b");
localData.splice(indexOfValue,2);
console.log(`삭제 후 students:${localData}`);
localStorage.setItem("students",JSON.stringify(localData));

//전체 삭제
localStorage.removeItem("students");