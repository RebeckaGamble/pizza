const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

document.getElementById("orders")
document.getElementById("greeting")


//1.2 - Greeting the customer
const greeting = (X, Y, Z) => {
  alert(
    `Hey,! Happy to serve your pizza. On our menu we have ${X}, ${Y}, and ${Z}`
  );
};

//2.3 Ask the user which pizza they want
const checkOrderName = () => {
  let orderName = prompt(
    "Enter the name of the pizza you want to order today."
  ).toLowerCase(); //make the user input all lowercase

  //add ' pizza' if only written ex. 'hawaiian'
  if (!orderName.includes("pizza")) {
    orderName += " pizza";
  }
  //3.1 - check if pizza is on the menu
  if (
    orderName === "vegetarian pizza" ||
    orderName === "hawaiian pizza" ||
    orderName === "pepperoni pizza"
  ) {
    return orderName;
  } else {
    alert("Sorry, we dont have that on the menu!"); //if input is something that is not on the menu
    return checkOrderName(orderName); //Enter pizza name again
  }
};

//2.3 - ask the user how many pizzaz
const quantity = (orderName) => {
  let orderQuantity = prompt(`How many of ${orderName} do you want?`);
  if (orderQuantity >= 1) {
    return orderQuantity;
  } else {
    alert("You need to order atleast one pizza"); //if not 1 or more pizzaz
    return quantity(orderName); //Enter quantity again
  }
};

const cookingTime = (orderQuantity) => {
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    return "The pizzas will take 10 minutes.";
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return "The pizzas will take 15 minutes.";
  } else if (orderQuantity > 6) {
    return "The pizzas will take 20 minutes.";
  }
};

//2.4 - Finalizing the order
const totalCost = (orderName, orderQuantity) => {
  const orderTotal = orderQuantity * pizzaPrice;
  const cookingTimeMsg = cookingTime(orderQuantity);

  alert(
    `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. ${cookingTimeMsg}`
  );
};

const pizzaBot = () => {
  greeting(vegetarian, hawaiian, pepperoni);
  const orderName = checkOrderName();
  const orderQuantity = quantity(orderName);
  totalCost(orderName, orderQuantity);
};

pizzaBot();
