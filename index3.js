
let condition = 100 > 50 //Bool
console.log(condition);

// &&<and> ||<or> ! 邏輯運算子

// && <and> 兩邊結果都是true，結果才是true
let con = true && false
console.log(con);

// || <or> 兩邊值要有一邊是true，結果就是true
let con2 = true || false
console.log(con2);

// ! <> 把結果反向，true變false，false變true
let con3 = !true
console.log(con3);
let con4 = ! (true && false)
console.log(con4); // false變true


if (100 > 50/*條件*/) {
    // 條件成立時要執行的
    console.log("100 > 50 成立");
} else {
    console.log("Ereer");
}

if (100 < 50) {
    console.log("100 < 50 成立");
} else {
    console.log("Ereer");
}


// > < >= <= === !==<不等於>
// === 比較是否相等<完全>
let com = 100
let com2 = 70

if (com > com2) {
    console.log("com大於com2");
}
else {
    console.log("com2大於com");
}

// elif -> else if ()
if (com < 60) {
    console.log("意義不明");
} else if (com < 80) {
    console.log("不錯");
} else if (com < 100) {
    console.log("棒棒地");
} else {
    console.log("漂亮！！");
}


// switch case

let key = 10

switch (key) {
    case 100:
        console.log("？？");
        break;

    case 50:
        console.log("太高了");
        break;

    case 10:
        console.log("漂亮");
        break;

    case 0:
        console.log("0");
        break;
}