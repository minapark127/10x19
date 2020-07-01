const menuBtn = document.querySelectorAll(".js-menu");
const overlayMenu = document.querySelector(".js-overlay");

function loadOverlay(event) {
  if (overlayMenu.classList.contains("hiding")) {
    overlayMenu.classList.remove("hiding");
    // when open the menu after closing, scroll back to top
    // not remained at the past position
    overlayMenu.querySelector("section").scrollTo(0, 0);
  } else {
    overlayMenu.classList.add("hiding");
  }
}

menuBtn.forEach((menuBtn) => {
  menuBtn.addEventListener("click", loadOverlay);
});
