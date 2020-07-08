const ul = document.querySelectorAll(".js-slider__ul");
const placeholder = document.querySelector(".js-slider__placeholder");
const img = placeholder.querySelector("img");

const MOBILEMAXWIDTH = "(max-width: 767px)";

const mobile = window.matchMedia(MOBILEMAXWIDTH);

function makeImgContainer(text) {
  const footer = document.querySelector("footer");
  const section = document.createElement("section");
  const imgResponsive = document.createElement("img");
  section.appendChild(imgResponsive);
  section.classList.add("responsive-img-container");
  imgResponsive.classList.add("responsive-img-container__img");
  imgResponsive.setAttribute("src", `src/images/${text}.jpg`);
  document.querySelector(".wrapper").insertBefore(section, footer);
  hideMain();
}

function hideMain() {
  document.querySelector("main").classList.add("hiding");
}
function loadImg(text) {
  img.setAttribute("src", `src/images/${text}.jpg`);
}

function getImgName(event) {
  const text = event.target.firstElementChild.innerHTML;
  const clearText = text.slice(1);
  if (mobile.matches) {
    makeImgContainer(clearText);
  } else {
    loadImg(clearText);
  }
}

ul.forEach((ul) => {
  const link = ul.querySelectorAll("a");
  link.forEach((link) => {
    link.addEventListener("mouseenter", getImgName);
  });
});
