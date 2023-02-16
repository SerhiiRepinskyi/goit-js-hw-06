// Завдання 1
// Напиши скрипт, який:
// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// 2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const listByClass = categories.querySelectorAll(".item"); // Псевдомасив елементів ".item"
console.log(`Number of categories: ${listByClass.length}`);

listByClass.forEach((elem) => {
  // console.log(elem);

  const textTitle = elem.firstElementChild.textContent;
  // Текстовий контент першого дочірнього елемента (h2)
  console.log(`Category: ${textTitle};`);

  const listByTag = elem.lastElementChild.children;
  // Псевдомасив елементів (li) останнього дочірнього елемента (ul)
  console.log(`Elements: ${listByTag.length};`);
});

// console.log("========== Version 2 ==========");

// listByClass.forEach((elem) => {
//   console.log(`Category: ${elem.querySelector("h2").textContent};`);

//   console.log(`Elements: ${elem.querySelectorAll("ul > li").length};`);
// });
