const box = document.querySelector(".box");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  // box.style.backgroundColor = "red";
  box.classList.cod("red");
});

//-----------

const input = document.querySelector("input");
const text = document.getElementById("value");

// input.addEventListener("input", () => {
//   let value = input.value;

//   console.log(value);
// });

const digits = ["0", "1", "2", "3"];

input.addEventListener("input", (event) => {
  console.log(event);
  const value = event.target.value;
  const lastChar = value.at(-1);

  console.log(lastChar);

  if (digits.includes(lastChar)) {
    input.value = value.slice(0, -1);
  }
});

function valueText(e) {
  text.textContent = e.target.value;
}
