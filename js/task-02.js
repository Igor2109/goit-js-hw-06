const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const elements = document.querySelector("#ingredients");

const createdUl = ingredients.map((el) => {
  let item = document.createElement("li");

  item.classList.add("item");
  item.textContent = el;
  return item;
});

elements.append(...createdUl);

console.log(elements);
console.log(createdUl);
