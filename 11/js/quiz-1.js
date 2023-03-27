class Lecture{
    constructor(hasTutor,lecId,members){
        this.hasTutor=hasTutor;
        this.lecId=lecId;
        this.members=members;
    }

}

function getStudents(classRoom){
    let {hasTutor,lecId,members}=classRoom
    let tutor,students;
    (hasTutor)?[tutor,...students]=members:[...students]=members;
    return students    
}

const class1=new Lecture(false,"k01",["kim","lee","park"]);
const class2=new Lecture(true,"k02",["jo","choi","jung"]);