let close = document.querySelector(".close")
let shadow = document.querySelector(".shadow")
let nav = document.querySelector(".nav-list")
let menu = document.querySelector(".menu")

menu.addEventListener("click", () => {
    nav.classList.toggle("hide");
    shadow.classList.toggle("hide2");    
})

close.addEventListener("click", () => {
    nav.classList.toggle("hide");
    shadow.classList.toggle("hide2");
})

shadow.addEventListener("click", () => {
    if(!nav.classList.contains("hide")){
        nav.classList.add("hide");
        shadow.classList.add("hide2");
    }
})