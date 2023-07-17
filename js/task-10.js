function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  inputEl: document.querySelector("input"),
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
};

const boxesEl = document.querySelector("#boxes");

refs.buttonCreate.addEventListener("click", buttonCreateOnClick);
refs.buttonDestroy.addEventListener("click", buttonDestroyOnClick);

function buttonCreateOnClick() {
  const inputValue = Number(refs.inputEl.value);

  boxesEl.innerHTML = "";
  createBoxes(inputValue);
}
function buttonDestroyOnClick() {
  boxesEl.innerHTML = "";
  refs.inputEl.value = "";
}

function createBoxes(amount) {
  let widthBox = 30;
  let heightBox = 30;
  const arreyBox = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${widthBox}px`;
    box.style.height = `${heightBox}px`;
    box.style.backgroundColor = getRandomHexColor();
    arreyBox.push(box);
    widthBox += 10;
    heightBox += 10;
  }
  boxesEl.append(...arreyBox);
}
