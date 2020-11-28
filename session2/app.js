class Person {
    name;
    age;
    address;

    constructor (name,age,address) {
        console.log(name,age,address);
        this.name = name;
        this.age =age;
        this.address =address;
        // console.log(this)
    }

    speak() {
        console.log("Hello World")
    }

    introduce() {
        console.log(`Chào mọi ng mình tên là ${this.name}. Minh nam nay ${this.age} tuoi.`)
    }

    
}

class Boy extends Person {
    size;
    handsome;
    rich;
    constructor(name,age,address,size,handsome,rich) {
        super(name,age,address);
        this.size = size;
        this.handsome = handsome;
        this.rich = rich;
    }
} 

class Girl extends Person {
    size;
    beauty;
    good;
    constructor(name,age,address,size,beauty,good) {
        super(name,age,address);
        this.size = size;
        this.beauty = beauty;
        this.good = good;
        
    }
} 

class GoodBoy extends Boy {
    tedious;
    constructor(name,age,address,size,handsome,rich,tedious) {
        super(name,age,address,size,handsome,rich);
        this.tedious =tedious;
    }
}

class BadBoy extends Boy {
    salty;
    constructor(name,age,address,size,handsome,rich,salty) {
        super(name,age,address,size,handsome,rich);
        this.salty =salty;
    }
}

class YellowBoy extends Boy {
    payment;
    constructor(name,age,address,size,handsome,rich,payment) {
        super(name,age,address,size,handsome,rich);
        this.payment =payment;
    }
}

let gb = new GoodBoy("MJ",28,"HP",29,"NICE",true,false);
gb.introduce();
let bb = new BadBoy("FB",30,"HN",35,"VERY HANDSOME",true,false);
let yb= new YellowBoy("YL",34,"DN",45,"NORMAL",true,true);
let girl = new Girl("Trang",24,"HN",21,true,true);

// let name ="Minh";
// let age = 18;
// let address ="DD";

// let person1 = new Person(name;age;address);
// let person2 = new Person(name ="Moi";age=16;address="HM")
// let person3 = new Person(name ="MAI";age=28;address="HP")
// console.log(person1);

// person1.name = name;
// person1.age = age;
// person1.address = address;
//Hayx taoj 1 class gồm các tính chất sau 
// class OldGirlfriend: name;age;address; favorites ; hair; weight; height
// tạo 3 object từ OldGirlfriend

// class OldGirlfriend {
//     name;
//     age;
//     address; 
//     favorites ; 
//     hair; 
//     weight; 
//     height;

//     constructor(name,age,address, favorites , hair, weight, height){
//         this.name= name;
//         this.age = age;
//         this.address = address; 
//         this.favorites = favorites; 
//         this.hair = hair; 
//         this.weight = weight; 
//         this.height = height ;
//         console.log(this)
//     }

// }

// class OldGirlfriend extends Person {
//     favorites ; 
//     hair; 
//     weight; 
//     height;

//     constructor(name,age,address, favorites , hair, weight, height){
//                 super(name,age,address); // MUST CALLLL
//                 this.favorites = favorites; 
//                 this.hair = hair; 
//                 this.weight = weight; 
//                 this.height = height ;
//                 console.log(this)
//             }
//     getMarried() {
//         console.log(`${this.name} gui thiep moi cuoi`)    
//     }
// Chỉ kế thừa một chiều
// }

// let old1 = new OldGirlfriend("Hien", 18, "HP", "Cooking", "Long", "48", "1m65");
// old1.speak();
// old1.introduce();
// let old2 = new OldGirlfriend("Phuong", 16, "DN", "Laundry", "Short", "50", "1m70");

// let old3 = new OldGirlfriend("Linh", 19, "HN", "Knitting", "Long", "45", "1m65");


class MyMath {
    a;
    b;
    static sum(a,b){
        return a +b;
    }

    static subtract(a,b){
        return a -b;
    }

    static multiply(a,b){
        return a * b;
    }

    static divide(a,b) {
        if(b!=0) return a/b;
        return false;
    }

}
/* static (method/property) của class
(method/property) của object tạo từ class
*/
console.log(MyMath.sum(1,2))