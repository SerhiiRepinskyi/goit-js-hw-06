// Завдання 6
// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// 1. Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// 2. Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const textInputRef = document.querySelector("#validation-input");

textInputRef.addEventListener("blur", (event) => {
  console.log(event.currentTarget.value); // symbols entered
  console.log(textInputRef.dataset.length); // from data-length="6"

  if (event.currentTarget.value.length == textInputRef.dataset.length) {
    textInputRef.classList.add("valid");
    if (textInputRef.classList.contains("invalid")) {
      textInputRef.classList.remove("invalid");
    }
  } else {
    if (textInputRef.classList.contains("valid")) {
      textInputRef.classList.remove("valid");
    }
    textInputRef.classList.add("invalid");
  }
});

// js:13 - не строге порівняння!!! Ух)
