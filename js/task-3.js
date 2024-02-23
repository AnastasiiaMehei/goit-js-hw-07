const element = document.querySelector("#name-input");
const elementOutput = document.querySelector("#name-output");
console.log(elementOutput);
element.addEventListener("input", inputForm);
function inputForm(evt) {
  elementOutput.textContent = evt.target.value;
  if (!evt.target.value) {
    elementOutput.textContent = "Anonymous";
  }
}
