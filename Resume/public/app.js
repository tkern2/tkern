const btn = document.querySelector("button.menu-button");
const menu = document.querySelector(".mobile-menu");
const goToTop = document.querySelector(".return-top");

// show mobile menu
btn.addEventListener("click", e => {
    menu.classList.toggle("hidden");
});

// scroll to top on click
goToTop.addEventListener("click", e => {
    scrollTo(0, 0);
});
