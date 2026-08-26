document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".nav");

    if (!menuButton || !menu) {
        return;
    }

    menuButton.addEventListener("click", function () {
        menu.classList.toggle("open");
    });
});
