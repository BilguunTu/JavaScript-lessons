const SignUpButton = document.getElementById("signUp");
const SignInButton = document.getElementById("signIn");
const Container = document.getElementById("container");

SignUpButton.addEventListener("click", () => {
  Container.classList.add("right-panel-active");
});

SignInButton.addEventListener("click", () => {
  Container.classList.remove("right-panel-active");
});
