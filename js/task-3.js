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

/* <input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1> */
