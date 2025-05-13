// Хендлер сабміту форми
const contactForm = document.getElementById("contact-form");

function handleSubmit(e) {
  e.preventDefault();
  console.log("Зв'яжемося з вами найближчим часом!");
}

contactForm.onsubmit = handleSubmit;

// Декілька хендлерів для події
const contactFormName = document.getElementById("contact-form__name");

function handler1(e) {
  console.log("Handler 1:", e.target.value);
}

function handler2(e) {
  console.log("Handler 2:", e.target.value);
}

contactFormName.addEventListener("input", handler1);
contactFormName.addEventListener("input", handler2);

// Призначення об'єкта в якості хендлера
const contactFormLastName = document.getElementById("contact-form__last-name");
const objectHandler = {
  handleEvent(e) {
    console.log("Object handler:", e.currentTarget);
  },
};

contactFormLastName.addEventListener("input", objectHandler);

// Видаляємо хендлер через 10 секунд
setTimeout(() => {
  contactFormLastName.removeEventListener("input", objectHandler);
  console.log("Object handler removed!");
}, 10000);
