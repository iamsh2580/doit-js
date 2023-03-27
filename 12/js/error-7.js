let json='{"grade":3, "age":25}';

try{
    let user=JSON.parse(json);
    if(!user.name){
        throw new Error("사용자의 이름이 없다.");
    }
}catch(err){
    console.log(`error name:${err.name}`);
    console.log(`error message:${err.message}`);
}