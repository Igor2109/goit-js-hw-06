const btnDecr = document.querySelector('[data-action="decrement"]');
const btnIncr = document.querySelector('[data-action="increment"]');
const spanValue = document.querySelector("#value");

let counterValue = 0;

btnDecr.addEventListener("click", onClickDecrement);
btnIncr.addEventListener("click", onClickIncrement);

function onClickDecrement() {
  counterValue -= 1;
  spanValue.textContent = counterValue;
}

function onClickIncrement() {
  counterValue += 1;
  spanValue.textContent = counterValue;
}
