document.addEventListener("DOMContentLoaded", function () {

  const header = document.querySelector(".site-header, header");

  if (!header) {
    console.log("American Federation header not found.");
    return;
  }

  const menuButton =
    header.querySelector(".menu-toggle") ||
    header.querySelector(".menu-btn") ||
    header.querySelector(".hamburger") ||
    header.querySelector("button");

  const navigation =
    header.querySelector(".site-nav") ||
    header.querySelector(".nav-menu") ||
    header.querySelector("nav") ||
    document.querySelector(".site-nav") ||
    document.querySelector(".nav-menu") ||
    document.querySelector("nav");

  if (!menuButton || !navigation) {
    console.log("American Federation menu elements not found.");
    return;
  }

  menuButton.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();

    navigation.classList.toggle("menu-open");
  });

  navigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navigation.classList.remove("menu-open");
    });
  });

});
