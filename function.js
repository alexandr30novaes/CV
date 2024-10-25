var btn = document.querySelector("#btn-exp")
var menuSide = document.querySelector(".aside")

btn.addEventListener("click", function(){
    if(menuSide.classList.contains("expandir")){
        menuSide.classList.remove("expandir")
    }else{
        menuSide.classList.add("expandir")
    }
})

