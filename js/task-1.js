const elements = document.querySelectorAll(".item");
const numberElement = elements.length;
const text = document.querySelectorAll("h2");
console.log(text.innerHTML);
const textContent = elements.textContent;
console.log(`Number of categories: ${numberElement}`);
console.log(textContent);
console.log(`Category: ${textContent}`);
