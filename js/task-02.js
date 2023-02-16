// Завдання 2
// Напиши скрипт, який для кожного елемента масиву ingredients:
// 1. Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2. Додасть назву інгредієнта як його текстовий вміст.
// 3. Додасть елементу клас item.
// 4. Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsContainerRef = document.querySelector("#ingredients");

const makeIngredientCard = (ingredient) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = ingredient;
  itemRef.classList.add("item");

  return itemRef;
};

const elements = ingredients.map(makeIngredientCard); // array <li>
// console.log(elements);

ingredientsContainerRef.append(...elements);
// console.log(ingredientsContainerRef);
