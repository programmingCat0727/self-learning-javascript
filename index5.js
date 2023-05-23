// function 函數
// 為了簡化程式，簡化維護作業

// 一般的 function
function hello () {
    console.log("早安～");
}

function hello2 () {
    console.log("晚安...");
}

// 執行
hello()
hello2()


// 有參數的 funcyion
function addMoney(price1, price2, discount/*傳入3參數 */) {
    console.log("price1", price1);
    console.log("price2", price2);
    console.log("discount", discount);
    console.log(price1 + price2 - discount);
}

addMoney(1200, 700, 100)

addMoney(200, 300)


// 有回傳值的 funcyion (return)
function addMoney2(price1, price2, discount) {
    let result = price1 + price2 - discount
    return result
}

let total = addMoney2(3000, 1500, 300)
console.log("total:", total);


//整合
function test_AddMoney(price1, price2, discount) {
    let result = price1 + price2 - discount
    let message = "普通"

    // 邏輯順序要注意
    if (result >= 10000) {
        message = "尊榮"
        return message

    } else if (result >= 5000) {
        message = "白金"
        return message

    } else {
        return message
    }
    
}

let message = test_AddMoney(300, 500, 0)
console.log(message);

let message2 = test_AddMoney(4500, 700, 100)
console.log(message2);

let message3 = test_AddMoney(6700, 7500, 700)
console.log(message3);


// 構造函數 function
function deta(name) {
    this.name = name
}

const deta1 = new deta("墮貓");
const deta2 = new deta("無名的貓");

console.log(deta1);
console.log(deta2);


//函數宣告方式
function name(params) {}
let name1 = function (params) {}
let name2 = () => {}