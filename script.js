const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function ThemNo(){
    if(inputBox.value === ''){
        alert("Chưa nhập kìa cha");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = "";
    LuuDL();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        LuuDL();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        LuuDL();
    }
}, false);

function LuuDL(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function HienNo(){
    listContainer.innerHTML = localStorage.getItem("data");
}
HienNo();