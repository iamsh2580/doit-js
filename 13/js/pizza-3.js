const pizza=()=>{
    return new Promise((resolve,reject)=>{
        resolve("피자주문");
    });
}

const step1=(msg)=>{
    console.log(msg);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("피자도우준비")
        },3000)
    });
}

const step2=(msg)=>{
    console.log(msg);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("토핑 완료");
        },1000);
    });
}

const step3=(msg)=>{
    console.log(msg);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("굽기완료");
        },3000);
    });
}

const step4=(msg)=>{
    console.log(msg);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("포장완료");
        },1000);
    });
}
// pizza()
//     .then(step1)
//     .then(step2)
//     .then(step3)
//     .then(step4)
//     .then(console.log)
//     .then(()=>{
//         console.log("피자 준비 완료!");
//     });

    pizza()
  .then((result) => step1(result)) // pizza()가 성공하면 step1() 실행
  .then((result) => step2(result)) // step1()이 성공하면 step2() 실행
  .then((result) => step3(result)) // step2()이 성공하면 step3() 실행
  .then((result)=>step4(result))
  .then((result) => console.log(result)) // step3()이 성공하면 "굽기 완료" 표시
  .then(() => {
    console.log('피자가 준비되었습니다. 🍕');
  });