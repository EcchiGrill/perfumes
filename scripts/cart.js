// Підсвічування елементів списку
const shippingInfo = document.getElementById("shipping-info");

function highlightListHandler(event) {
  this.querySelectorAll("li").forEach((li) =>
    li.classList.remove("highlighted")
  );
  event.target.classList.add("highlighted");
}

shippingInfo.onclick = highlightListHandler;

// Прийом проектування «Поведінка»
const cartMenu = document.getElementById("cartMenu");

const cartMenuHandler = (e) => {
  if (e.target.tagName !== "BUTTON") return;

  const action = e.target.dataset.action;
  switch (action) {
    case "updateQuantity":
      console.log("Updating quantity...");
      break;

    case "clearCart":
      console.log("Clearing cart...");
      break;

    case "checkout":
      console.log("Checkout...");
      break;

    default:
      break;
  }
};

cartMenu.addEventListener("click", cartMenuHandler);
