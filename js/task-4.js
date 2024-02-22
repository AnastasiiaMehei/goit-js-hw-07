const form = document.querySelector(".login-form");
const inputs = document.querySelectorAll("input");
form.addEventListener("submit", formSubmit);
function formSubmit(evt) {
  evt.preventDefault();
  const object = {};
  for (const input of inputs) {
    let prop = input.name;
    object[prop] = input.value.trim();
    if (input.value.length === 0) {
      return alert("All form fields must be filled in");
    }
  }
  console.log(object);
  form.reset();
}
