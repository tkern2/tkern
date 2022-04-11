const btn = document.querySelector("button.menu-button");
const menu = document.querySelector(".mobile-menu");
const goToTop = document.querySelector(".return-top");


btn.addEventListener("click", e => {
    menu.classList.toggle("hidden");
});

goToTop.addEventListener("click", e => {
    scrollTo(0,0);
});
