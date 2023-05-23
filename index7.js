//HTML DOM

//window 針對網頁
//window.alert("Hi") // 網頁警示窗
//document

//無回呼，直接執行，網頁尚未跑好無法取得ElementById，如果<script>的行列在<p>上
const p1 = document.getElementById("title")
console.log(p1);

// <script>盡量寫在<body>中的最下方

// addEventListener監控網頁  callback 回呼  
//                        ↓事件   ↓執行
window.addEventListener("load", function () {
    const p1 = document.getElementById("title") // 取的符合ID的物件
    console.log(p1);
    p1.innerText = "早安"

    //點擊事件
    const b1 = document.getElementById("btn") // 取的符合ID的物件
    b1.addEventListener("click", function () {
        console.log("點下去了");
    })

    const box1 = document.getElementById("box")
    box1.innerHTML = "<p>Test</p>"

    const in1 = document.getElementById("input1")
    in1.addEventListener("keyup", function (e) {
        console.log("e.target.value)", e.target.value);
    })
})