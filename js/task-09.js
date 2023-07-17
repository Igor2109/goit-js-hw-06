function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  button: document.querySelector(".change-color"),
  body: document.querySelector("body"),
  span: document.querySelector(".color"),
};
refs.button.addEventListener("click", onChange);
function onChange() {
  let color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.span.textContent = color;
}
