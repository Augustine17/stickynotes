let cnt = document.querySelector(".left_container");
// console.log(cnt);
let btn = document.getElementById("btn");
let notes = document.querySelector(".allnotes")
let nn = document.querySelector(".nonotes")

btn.addEventListener("click",()=>{
    let txt = cnt.children[0].children[0].value
    let color = cnt.children[0].children[1].value
    if(txt === ""){
        emptyField();
        alert("You need to add a note")
        return
    }
    // console.log(txt,color);
    stickyNote(txt,color)
    cnt.children[0].children[0].value=""
    nn.style.display = "none"
    removeNote()
})

function emptyField(){
    cnt.children[0].children[0].classList.add("shake");
    setTimeout(function() {
        cnt.children[0].children[0].classList.remove("shake");
        }, 5000);
}

function removeNote(){
    let btns = document.querySelectorAll(".btn2");
    btns.forEach((btn)=>{
        btn.addEventListener("click",(e)=>{
            e.target.parentElement.remove()
        })
    })
}

function stickyNote(text,col){
    let div = document.createElement("div");
    div.innerHTML = `<div>${text}</div>
    <button class="btn2">x</button>`
    div.style.background = col
    div.classList.add("notebox")
    // console.log(notes);
    notes.appendChild(div)
}
