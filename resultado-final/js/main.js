let btnOpenMenu = document.querySelector("#open-menu");
let btnCloseMenu = document.querySelector("#close-menu");
let menu = document.querySelector("#mobile-menu");

btnOpenMenu.addEventListener("click", () => {
    menu.classList.remove("disabled");
})

btnCloseMenu.addEventListener("click", () => {
    menu.classList.add("disabled");
})