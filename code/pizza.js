const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const pizzaPrice = 80;

// 1.2 - Greeting the customer
const greeting = (X, Y, Z) => {
  document.getElementById(
    "greeting"
  ).innerHTML = `Hey,! Happy to serve your pizza. <br><br>
  On our menu we have: <br><br><ul><li> ${X}</li><li> ${Y}</li><li> ${Z}</li></ul> <br><br>
  <hr>`;
};

const cookingTime = (orderQuantity) => {
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    return "The pizzas will take 10 minutes.";
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return "The pizzas will take 15 minutes.";
  } else if (orderQuantity >= 6) {
    return "The pizzas will take 20 minutes.";
  }
};

const orderForm = document.getElementById("orderForm");
orderForm.addEventListener("submit", function (e) {
  e.preventDefault();

  placeOrder();
});

const placeOrder = () => {
  document.getElementById("typeErr").textContent = "";
  document.getElementById("quantErr").textContent = "";
  //inputs
  let pizzaTypeInput = document
    .getElementById("pizzaTypeInput")
    .value.toLowerCase();

  const quantityInput = parseInt(
    document.getElementById("quantityInput").value
  );

  //add ' pizza' if only written ex. 'hawaiian'
  if (!pizzaTypeInput.includes("pizza")) {
    pizzaTypeInput += " pizza";
  }

  if (
    pizzaTypeInput === "vegetarian pizza" ||
    pizzaTypeInput === "hawaiian pizza" ||
    pizzaTypeInput === "pepperoni pizza"
  ) {
    //must order atleast one pizza
    if (quantityInput >= 1) {
      const orderTotal = quantityInput * pizzaPrice;
      const cookingTimeMsg = cookingTime(quantityInput);

      document.getElementById(
        "yourOrder"
      ).textContent = `Great, I'll get started on your ${quantityInput} ${pizzaTypeInput} right away, it will cost ${orderTotal} kr. ${cookingTimeMsg}`;

      //open order
      document.getElementById("yourOrder").classList.add("open");

      clearText();
      clearErr();
    } else {
      document.getElementById("quantErr").innerHTML =
        "<strong>You need to order at least one pizza!</strong>";
    }
  } else {
    document.getElementById("typeErr").innerHTML =
      "<strong>Sorry, we don't have that on the menu!<strong>";
    //return;
  }
};

//clear error
const clearErr = () => {
  document.getElementById("typeErr").textContent = "";
  document.getElementById("quantErr").textContent = "";
};

//clear input fields
const clearText = () => {
  document.getElementById("pizzaTypeInput").value = "";
  document.getElementById("quantityInput").value = "";
};

//press enter to go to next input field
const handleEnter = (e, nextInputId) => {
  if (e.key === "Enter") {
    e.preventDefault();

    const nextInput = document.getElementById(nextInputId);
    if (nextInput) {
      nextInput.focus();
    }
  }
};

const pizzaBot = () => {
  greeting(vegetarian, hawaiian, pepperoni);
};

pizzaBot();
