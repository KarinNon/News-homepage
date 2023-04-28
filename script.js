var menu = document.getElementById("menu-button")
var body = document.querySelector("body");

var nav = document.getElementById("mobile-nav");
var closeButton = document.getElementById("close");

menu.addEventListener("click", () => {
    nav.style.display = "block";
})

closeButton.addEventListener("click", () => {
    nav.style.display = "none";
})