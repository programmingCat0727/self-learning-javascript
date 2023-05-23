
// 陣列 Array
let classA = ["user1", "user2", "user3", "user4"]
console.log("player:", classA);

classA.push("Nope") //在陣列最後新增
console.log("playerNew:", classA);

console.log(classA.length); //陣列個數

//print 陣列中單一的值
console.log('第一筆', classA[0]);
console.log('第二筆', classA[1]);
console.log('第五筆', classA[4]);
console.log('第七筆', classA[6]); //在classA陣列中不存在第七筆值，所以回傳 undefined


// 物件 Object
const deta = {
    name: "墮貓",
    host: "萌貓",
    salary: "Nope",
    work: ["打程式", "網頁維護", "遊戲製作"],
}

const deta2 = {
    name: "無名的貓",
    host: "萌貓",
    salary: "Nope",
    work: "Nope",
    interest: "跑酷"
}

const printDeta = [
    deta,
    deta2
]

console.log("Name", deta.name); // print 物件中單一的值
console.log(printDeta);
