// Завдання 10
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
// 1. Розміри найпершого <div> - 30px на 30px.
// 2. Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// 3. Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// =============== refs ===============
const refs = {
  inputNumber: document.querySelector("#controls input"),
  createBtn: document.querySelector("#controls button[data-create]"),
  destroyBtn: document.querySelector("#controls button[data-destroy]"),
  containerDivs: document.querySelector("#boxes"),
};

// =============== createBtn ===============
refs.createBtn.addEventListener("click", onClickCreateBtn);

function onClickCreateBtn(event) {
  if (!refs.inputNumber.value) {
    return;
  }

  createBoxes(refs.inputNumber.value);
  // const toAddDivsArray = createBoxes(refs.inputNumber.value);
  // refs.containerDivs.append(...toAddDivsArray);
}

function createBoxes(amount) {
  const divsArray = [];

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    divsArray.push(div);
  }
  // return divsArray;

  refs.containerDivs.append(...divsArray);
}

// =============== destroyBtn ===============
refs.destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  refs.containerDivs.innerHTML = "";
}
