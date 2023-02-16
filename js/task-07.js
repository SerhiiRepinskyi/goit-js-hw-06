// Завдання 7
// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputFontSizeControlRef = document.querySelector("#font-size-control");
const textSpanRef = document.querySelector("#text");

inputFontSizeControlRef.addEventListener("input", (event) => {
  //   console.log(event.currentTarget.value);
  //   console.log(textSpanRef.textContent);

  textSpanRef.style.fontSize = `${event.currentTarget.value}px`;
});
