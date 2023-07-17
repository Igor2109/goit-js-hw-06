const input = document.querySelector("#font-size-control");
const spanTxt = document.querySelector("#text");

input.addEventListener("input", onRange);

function onRange(event) {
  spanTxt.style.fontSize = event.currentTarget.value + "px";
}

// function onRange(event) {
//   spanTxt.style.fontSize = `${event.target.value}px`;
// }
