const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const form = document.querySelector("#form");

const showForm = () => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let user = {
      email: inputEmail.value,
      password: inputPassword.value,
    };
    console.log(user);
  });
};
showForm();
