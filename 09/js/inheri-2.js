class BookC{
    constructor(title,price){
        this.title=title;
        this.price=price;
    }
    buy(){
        console.log(`${this.title}은 ${this.price}원 입니다.`);
    }
}

const book1=new BookC("자료구조",34000);
book1.buy();

class TextbookC extends BookC{
    constructor(title,price,major){
        super(title,price);
        this.major=major;
    }
    buyTextbook(){
        console.log(`${this.major}서적, ${this.title}을 ${this.price}에 구매했습니다.`);
    }

}



const textbook1=new TextbookC("암호화",27000,"정보보호");
textbook1.buyTextbook();
textbook1.buy();

TextbookC.prototype