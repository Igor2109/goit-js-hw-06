const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const Elements = document.querySelector("#ingredients");

const createdUl = ingredients.map((el) => {
  let item = document.createElement("li");

  item.classList.add("item");
  item.textContent = el;
  return item;
});

Elements.append(...createdUl);

console.log(Elements);
console.log(createdUl);
