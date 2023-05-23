// For 迴圈

let a = 10
a = a + 20
a += 20
console.log("a:", a);

// i++ -> i += 1 -> i = i + 1
for (let i = 0; i < 10; i++) {
    console.log("i:", i);
}

for (let z = 0; z < 10; z += 2) {
    console.log("z:", z);
}


let classA = [100, 70, 40]
for (let i = 0; i < 3; i++) {
    console.log("classA[i]:", classA[i]);
}

let classB = [150, 100, 87, 50]
classB.push(30)
for (let i = 0; i < classB.length; i++) {
    console.log("classB[i]:", classB[i]);
}


for (let i = 0; i < classA.length; i++) {
    if (i === 2) {
        classA[i] = 110
    }
}
console.log("classA:", classA);


const deta = [
    {
        name: "墮貓",
        host: "萌貓",
        salary: "Nope",
        work: ["打程式", "網頁維護", "遊戲製作"],
    },
    {
        name: "無名的貓",
        host: "萌貓",
        salary: "Nope",
        work: "Nope",
        interest: "跑酷"
    },
]

for (let i = 0; i < deta.length; i++) {
    if (i === 1) {
        let Cat = deta[i]
        console.log(Cat);
        console.log(Cat.host);
    }
}

// while 迴圈

// let condition = true <- 這是無限迴圈...
let condition = true
let target = 10
let i = 0

while (condition) {
    if (i === target) {    // 這是讓迴圈有停下來的時候
        condition = false
    }
    console.log(i);
    i++
}