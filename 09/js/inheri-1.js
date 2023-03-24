function Book(title,price){
    this.title=title;
    this.price=price;   
}

Book.prototype.buy=function(){
    console.log(`${this.title}을(를) ${this.price}에 구매했다.`);

}

const book1= new Book("에스프레소 만들기",999999);
book1.buy();

function Textbook(title,price,major){
    Book.call(this,title,price);
    this.major=major;
}

Textbook.prototype.buyTextbook=function(){
    console.log(`${this.title}을 ${this.price}원에샀습니다 전공은 ${this.major}입니디ㅏ`);
}

const textbook1=new Textbook("혓바늘없애기",10000,"보건");
textbook1.buyTextbook();

Object.setPrototypeOf(Textbook.prototype,Book.prototype);

book2= new Textbook("수족냉증고치기",15000,"의료");
book2.buyTextbook();
book2.buy();