const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", inputSubmit);

function inputSubmit(event) {
  event.preventDefault();

  const dataUser = {
    email: loginForm.elements.email.value,
    password: loginForm.elements.password.value,
  };
  if (dataUser.email === "" || dataUser.password === "") {
    return alert("Please fill the field!");
  }
  console.log(dataUser);
  loginForm.reset();
}
