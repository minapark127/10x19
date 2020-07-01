const menuBtn = document.querySelectorAll(".js-menu");
const overlayMenu = document.querySelector(".js-overlay");
const overlayBody = overlayMenu.querySelector("section");
const overlayMenuCL = overlayMenu.classList;

const BROWN = "#b07833";

function loadOverlay(event) {
  //replacing animation effect
  if (event.target.innerHTML === "menu") {
    overlayMenuCL.replace("scale-out-tr", "scale-in-tr");
    overlayBody.style.color = "white";

    //add text animation after overlay menu animation
    overlayMenu.addEventListener(
      "animationend",
      overlayBody.classList.add("slide-in-bottom")
    );
  } else if (event.target.innerHTML === "close") {
    //changing text colours for smoother animation
    overlayBody.style.color = BROWN;
    overlayMenuCL.replace("scale-in-tr", "scale-out-tr");
  }

  //delay toggle - display none for animation effect
  setTimeout(toggleHiding, 400);
  function toggleHiding() {
    overlayMenuCL.toggle("hiding");
  }

  // when open the menu after closing, scroll back to top
  // not remaining at the past position
  overlayBody.scrollTo(0, 0);
}

menuBtn.forEach((menuBtn) => {
  menuBtn.addEventListener("click", loadOverlay);
});
