class Pet{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
    run(){
        alert(`${this.name} is running`);
    }
}

const dog=new Pet("buddle","ivory");
dog.run();

class Cat extends Pet{
    constructor(name,color,breed){
        super(name,color);
        this.breed=breed;
    }
    viewInfo(){
        alert(`이름: ${this.name} 품종:${this.breed} 색깔:${this.color}`);
    }
}

let cat1= new Cat("버들","ivory","sigoljobjong");
cat1.viewInfo();
cat1.run();