// class 類別

// function deta(name) {
//     this.name = name
// }

//class的基本操作
class Test {
    constructor(initName) {
        this.name = initName
    }
}

const Test1 = new Test("墮貓");
console.log("Test1", Test1);
console.log(Test1.name);



// this
class Deta {
    // 構造函數
    constructor(initName) {
        this.name = initName
        //this
        this.mmm = this.hello.bind(this) // 綁定物件函數
    }

    // 類別函數
    hello () {
        console.log("早安～", this.name);
    }

    // 綁定物件函數
    Hi = () => {
        console.log("Hi～", this.name);
    }
}
const Deta1 = new Deta("墮貓");
console.log("Deta1:", Deta1);
Deta1.hello()
Deta1.Hi()


const A = { name : "無名的貓" }
// 物件函數，函數裡的this.name跟隨著A物件的name
A.hello = Deta1.hello
A.hello()

// 函數被綁定，所以this的name沒有跟著A的name
A.mmm = Deta1.mmm
A.mmm()

A.Hi = Deta1.Hi
A.Hi()

// 賦予物件A函數
A.OMG = function () {
    console.log("呀！！");
}
A.OMG()



// 繼承
class Car {
    constructor (initName) {
        this.name = initName
    }
    start() {
        console.log("車子啟動");
    }
}

// 內容相似，導致重複
// class Porshe {
//     start() {
//         console.log("車子啟動");
//     }
// }

// 使用繼承
class Porahe extends Car {
    constructor (Name) {
        super(Name)
    }

    //蓋過繼承的函數，但可以使用super執行繼承的函數
    start() {
        console.log("啟動中");
    }

    //將繼承下來的start加工
    start2() {
        super.start() //執行繼承下來的函數
        console.log("沒有改裝");
    }
}

const P1 = new Car("CC");
console.log(P1.name);
P1.start()

const P2 = new Porahe("墮貓的車");
console.log(P2.name);
P2.start()
P2.start2()