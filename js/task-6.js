const input = document.querySelector("input");
const buttonCreate = document.querySelector("button[data-create]");
buttonCreate.addEventListener("click", createBoxes);
const divBoxes = document.querySelector("#boxes");
function createBoxes() {
  if (input.value >= 1 && input.value <= 100) {
    for (let i = 0; i < input.value; i++) {
      const newBox = document.createElement("div");
      divBoxes.append(newBox);
      console.log(newBox);
      newBox.style.backgroundColor = getRandomHexColor();
      newBox.style.height = `${30 + 10 * i}px`;
      newBox.style.width = `${30 + 10 * i}px`;
    }
  }
}
const buttonDestroy = document.querySelector("button[data-destroy]");
buttonDestroy.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  divBoxes.innerHTML = "";
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
