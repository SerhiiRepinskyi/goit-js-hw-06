// Завдання 4
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// 1. Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// 2. Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// 3. Оновлюй інтерфейс новим значенням змінної counterValue.

const counter = {
  counterValue: 0,

  decrement() {
    this.counterValue -= 1;
  },

  increment() {
    this.counterValue += 1;
  },
};

const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  value: document.querySelector("#value"),
};

refs.decrementBtn.addEventListener("click", function () {
  // console.log("Клікнули на декремент");

  counter.decrement();
  refs.value.textContent = counter.counterValue;
  // console.log(counter);
});

refs.incrementBtn.addEventListener("click", function () {
  // console.log("Клікнули на інкремент");

  counter.increment();
  refs.value.textContent = counter.counterValue;
  // console.log(counter);
});
