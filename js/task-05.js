const refs = {
  txtInput: document.querySelector("#name-input"),
  spanOutput: document.querySelector("#name-output"),
};
refs.txtInput.addEventListener("input", enterName);
function enterName(event) {
  refs.spanOutput.textContent = event.target.value || "Anonymous";
  //   refs.spanOutput.textContent = event.currentTarget.value;
  //   if (event.currentTarget.value.trim() === "") {
  //     refs.spanOutput.textContent = "Anonymous";
  //   }
}
