const input = document.querySelector("#validation-input");

input.addEventListener("blur", onBlur);

function onBlur(event) {
  const length = event.target.value.length;
  const dataLength = Number(input.dataset.length);
  if (length === dataLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
