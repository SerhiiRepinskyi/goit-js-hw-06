// Завдання 8
// Напиши скрипт управління формою логіна.
// 1. Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// 2. Під час відправлення форми сторінка не повинна перезавантажуватися.
// 3. Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// 4. Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// 5. Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault(); // скасувати перезавантаження сторінки після "submit"

  const {
    elements: { email, password },
  } = event.currentTarget;
  //   const mail = event.currentTarget.elements.email.value;
  //   const password = event.currentTarget.elements.password.value;
  //   console.log(`Email: ${email.value}; Password: ${password.value}`);

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  const user = {
    email: email.value,
    password: password.value,
  };

  console.log(user);

  event.currentTarget.reset(); // очистити поля форми
}
