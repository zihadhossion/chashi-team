//sticky bar for window scroll
window.addEventListener("scroll", () => {
    const stickyDesk = document.querySelector(".desk-bar");
    const stickyMob = document.querySelector(".mob-bar");

    if (window.scrollY > 0) {
        stickyDesk.classList.add("sticky");
        stickyMob.classList.add("sticky");

    } else {
        stickyDesk.classList.remove("sticky");
        stickyMob.classList.remove("sticky");
    }
})


//toggle menu bar
const menuBar = document.querySelector(".mob-bar .menu-bar");
const navLinks = document.querySelector(".mob-bar .navlist-container");
menuBar.addEventListener("click", () => {
    navLinks.classList.toggle("hidden");
})

//mobile list sub menu
function showSubMenu(step) {
    const navItem = document.querySelector(`.mobile-list .sm${step}`);
    navItem.classList.toggle("hidden");
}