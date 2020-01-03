let menuButton = document.getElementById("menu-btn")
let menu = document.getElementById("menu")
let navLinks = document.querySelectorAll(".menu li a")
let menuCloseButton = document.getElementById("menu-close-btn")
menuButton.addEventListener("click", () => {
    menu.classList.add("active")
})
menuCloseButton.addEventListener("click", () => {
    menu.classList.remove("active")
})
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", () => {
        menu.classList.remove("active")
    })
}