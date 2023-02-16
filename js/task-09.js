// Завдання 9
// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// ==============================

const refs = {
  changeColorBtn: document.querySelector("button.change-color"),
  body: document.querySelector("body"),
  textSpanColor: document.querySelector("span.color"),
};

refs.changeColorBtn.addEventListener("click", onChangeColorBtn);

function onChangeColorBtn() {
  const bckgColor = getRandomHexColor();

  refs.body.style.backgroundColor = bckgColor;
  refs.textSpanColor.textContent = bckgColor;
}
