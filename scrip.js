const itext = document.getElementById("text")
var listtext = document.getElementById("worklist")
var addtext = document.getElementById("button")

function enter(){
    itext.addEventListener('keypress',(e)=>{
        if(e.key === 'Enter'){
            addtext.click()
        }
    })
}

function check(){
    if(itext.value === "") {
        alert("please enter text to list")
        itext.focus()
    }
    let li = document.createElement("li")
    let list = `<div onclick="complet(this)">${itext.value}</div> <div onclick="del(this)"><i class="ri-delete-bin-2-fill"></i></div>`;
    li.innerHTML = list
    listtext.appendChild(li)
    itext.innerHTML=""
}

function complet(e){
    let pdiv = e.parentElement
    if(pdiv.querySelector("div").style.textDecoration === ""){
        pdiv.querySelector("div").style.textDecoration ="line-through"
    }
}

function del(e){
    let dtext = e.parentElement.querySelector("div").innerHTML
    console.log(dtext)
    if(confirm(`Are you sure? you want to delet ${dtext}`)){
        var x = e.parentElement.parentElement.parentElement.querySelector("li")
        x.remove()
    }   
}

