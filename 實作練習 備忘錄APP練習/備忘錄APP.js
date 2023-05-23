const content = document.getElementById("content")
const date = document.getElementById("date")
const time = document.getElementById("time")
const addedBtn = document.getElementById("addedBtn")
const deletedBtn = document.getElementById("deletedBtn")
const list = document.getElementById("list")


const listContent = []


function reder() {
    //渲染介面的list
    let htmlStr = ""

    //console.log(listContent);

    // for (let i = 0; i < listContent.length; i++) {
    //     console.log(listContent[i]);
    //     
    // }

    // ↓↓↓↓↓↓↓↓

    listContent.forEach(function (item) {
        //console.log("item", item);
        htmlStr = htmlStr + `
        <div class="item">
            <div>
                <p>內容：${item.content}</p>
                <p>時間：${item.date} ${item.time}</p>
            </div>
        </div>
        `
    })
    //console.log(htmlStr);

    list.innerHTML = htmlStr
    
}


addedBtn.addEventListener("click", function () {
    //console.log(content.value);
    //console.log(date.value);
    //console.log(time.value);

    listContent.unshift({  //從前方加入新的值
        content: content.value,
        date: date.value,
        time: time.value
    })

    reder()

})


deletedBtn.addEventListener("click", function () {
    listContent.pop() //移除最後的值

    reder()

})