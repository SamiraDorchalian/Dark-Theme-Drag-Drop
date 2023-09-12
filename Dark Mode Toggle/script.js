const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

function updataBody(){
    if(inputEl.checked){
        bodyEl.style.background = "black";
    }else{
        bodyEl.style.background = "white";
    }
}

inputEl.addEventListener("input", () =>{
    updataBody();
    updataLocalStorage();
});

function updataLocalStorage(){
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}

updataBody();