const itext = document.getElementById("#text")
var listtext = document.getElementById(".work_list")

var addtext = document.getElementById("button")

function check(){
    if(itext.value === "") {
        alert("please enter text to list")
        itext.focus()
    }

    let li = document.createElement("li")
    const list = `<div>${itext.value}</div>`;

    li.innerHTML = list;
    listtext.appendchild(li)
}