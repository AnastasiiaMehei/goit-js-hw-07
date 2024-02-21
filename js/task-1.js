const elements = document.querySelectorAll(".item");
console.log(elements);
const numberElement = elements.length;
console.log(`Number of categories: ${numberElement}`);

const elLi = elements.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
});
