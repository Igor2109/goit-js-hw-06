const categoriesUl = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesUl.children.length}`);

[...categoriesUl.children].forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(
    `Elements: ${Number([...item.lastElementChild.children].length)}`
  );
  console.log(`Names: ${item.lastElementChild.textContent}`);
});
