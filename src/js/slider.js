const ul = document.querySelectorAll(".js-slider__ul");
const placeholder = document.querySelector(".js-slider__placeholder");
const img = placeholder.querySelector("img");

function loadImg(text) {
  img.setAttribute("src", `src/images/${text}.jpg`);
}

function hoverHandler(event) {
  const text = event.target.firstElementChild.innerHTML;
  const clearText = text.slice(1);
  loadImg(clearText);
}

ul.forEach((ul) => {
  const link = ul.querySelectorAll("a");
  link.forEach((link) => {
    link.addEventListener("mouseenter", hoverHandler);
  });
});
