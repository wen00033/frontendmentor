const menuToggle = document.querySelector(".header-menu");
const menu = document.querySelector(".header-nav");
const overlay = document.getElementById("overlay");
//

menuToggle.addEventListener("click", function () {
  let toggle = menuToggle.getAttribute("data-toggle");
  if (toggle == "false") {
    menu.setAttribute("data-expanded", true);
    menuToggle.setAttribute("data-toggle", true);
    overlay.classList.replace("overlay-hidden", "overlay");
  } else {
    menu.setAttribute("data-expanded", false);
    menuToggle.setAttribute("data-toggle", false);
    overlay.classList.replace("overlay", "overlay-hidden");
    // document.body.classList.remove("no-scroll");
  }
});
