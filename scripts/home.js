function userDialog() {
  const name = prompt("Як тебе звати?");
  const age = prompt("Скільки тобі років?");
  const confirmMessage = `Ваше ім'я ${name} та вік ${age} років. Інформація корректна?`;

  if (confirm(confirmMessage)) {
    alert("Дякуємо за інформацію!");
  } else {
    alert("Будь-ласка оновіть сторінку і спробуйте ще раз.");
  }
}

function developerInfo(lastName, firstName, position = "Front-end Developer") {
  alert(
    `Іноформація про розробника: \nІм'я: ${firstName} \nПрізвище: ${lastName} \nПосада: ${position}`
  );
}

function compareStrings(str1, str2) {
  if (str1.length > str2.length) {
    alert(`Довша стрічка: ${str1}`);
  } else if (str1.length < str2.length) {
    alert(`Довша стрічка: ${str2}`);
  } else {
    alert("Стрічки рівні.");
  }
}

function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
  setTimeout(() => {
    document.body.style.backgroundColor = "";
  }, 3000);
}

function redirectTo(url) {
  location.href = url;
}

function manipulateDOM() {
  const preview = document.getElementById("preview");
  const title = document.getElementById("preview-title");
  if (title) {
    title.innerHTML = "Використання getElementById.";
  }

  const query_title = document.querySelectorAll(".preview-title");
  query_title.forEach((e) => {
    e.textContent = "Використання querySelectorAll.";
  });

  const innerElement = document.createElement("div");
  innerElement.innerHTML = "<strong>Приклад Inner HTML</strong>";
  preview.append(innerElement);

  //   document.write("<p>Приклад document write.</p>");

  //   const newElement = document.createElement("p");
  //   const textNode = document.createTextNode("Приклад TextNode.");
  //   newElement.appendChild(textNode);
  //   document.body.append(newElement);

  const textElement = document.createElement("div");
  textElement.textContent = "Приклад TextContent.";
  preview.prepend(textElement);

  const replaceElement = document.createElement("span");
  replaceElement.textContent = "Приклад replaceElement.";
  textElement.replaceWith(replaceElement);

  // replaceElement.remove();
}

document.addEventListener("DOMContentLoaded", () => {
  // redirectTo("https://www.google.com/");
  userDialog();
  developerInfo("Dmytro", "Oborskyi");
  compareStrings("Hello", "World");
  changeBackgroundColor("yellow");
  manipulateDOM();
});
