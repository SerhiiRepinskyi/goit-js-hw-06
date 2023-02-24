// Завдання 5
// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const textInputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

textInputRef.addEventListener("input", (event) => {
  outputRef.textContent = event.currentTarget.value.trim()
    ? event.currentTarget.value
    : "Anonymous";
  // trim() - видаляє пробільні символи з початку та кінця рядка;

  // ========== Version 2 ==========
  // outputRef.textContent = event.currentTarget.value.trim() || "Anonymous";
});
