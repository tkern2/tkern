const btn = document.querySelector("button.menu-button");
const menu = document.querySelector(".mobile-menu");
const goToTop = document.querySelector(".return-top");

// show and hide mobile menu
btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

// scroll to top button
goToTop.addEventListener("click", e => {
    scrollTo(0, 0);
});
