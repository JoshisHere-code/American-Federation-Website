document.addEventListener("DOMContentLoaded", function () {

  // Find the mobile menu button
  const menuButton =
    document.querySelector(".menu-toggle") ||
    document.querySelector(".menu-btn") ||
    document.querySelector(".hamburger") ||
    document.querySelector("header button") ||
    document.querySelector(".site-header button");

  // Find the navigation menu
  const navigation =
    document.querySelector(".site-nav") ||
    document.querySelector(".nav-menu") ||
    document.querySelector(".navigation") ||
    document.querySelector("header nav") ||
    document.querySelector("nav");

  if (!menuButton || !navigation) {
    console.log("American Federation menu elements not found.");
    return;
  }

  menuButton.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();

    navigation.classList.toggle("menu-open");

    if (navigation.classList.contains("menu-open")) {
      navigation.style.display = "flex";
      navigation.style.flexDirection = "column";
      navigation.style.visibility = "visible";
      navigation.style.opacity = "1";
      navigation.style.maxHeight = "1000px";
    } else {
      navigation.style.display = "";
      navigation.style.visibility = "";
      navigation.style.opacity = "";
      navigation.style.maxHeight = "";
    }
  });

  // Close the menu after selecting a link
  navigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navigation.classList.remove("menu-open");
      navigation.style.display = "";
      navigation.style.visibility = "";
      navigation.style.opacity = "";
      navigation.style.maxHeight = "";
    });
  });

});
