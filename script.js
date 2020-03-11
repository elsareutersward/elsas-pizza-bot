//Constants
const pizzaPrice = 80
var pizzas = document.getElementsByClassName("pizza");
var selectedPizza;


//Functions
const greeting = () => {
    document.getElementById("greeting").innerHTML = `Hey! Happy to serve your pizza. 
    On our menu we have Vegetarian Pizza, Hawaiian Pizza and Pepperoni Pizza. 
    Select the pizza of your choosing by clicking the pictures below 👇`
}

function toggle() {
    if (selectedPizza) {
        selectedPizza.classList.toggle("active");
    }
    this.classList.toggle("active");
    selectedPizza = this;
}

function getOrderName() {
    if (selectedPizza) {
        return selectedPizza.id;
    } else {
        return
    }
}

function getInputValue() {
    return document.getElementById("pizzaQuantity").value;
}

const totalCost = (orderQuantity) => {
 return orderQuantity * pizzaPrice
}

const cookingTime = (orderQuantity) => {
 if (orderQuantity <= 2) {
    return 10;
 } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return 15;
 } else if (orderQuantity > 5) {
    return 20;
 } else {
    return 0;
 }
}


//Stuff that do stuff
greeting()

for (var i = 0; i < pizzas.length; i++) {
 pizzas[i].onclick = toggle
}

function orderPizza() {
    const pizzaName = getOrderName();
    const orderQuantity = getInputValue();
    if (orderQuantity && orderQuantity == 1 && pizzaName) {
        console.log(orderQuantity)
       document.getElementById("greeting").innerHTML = 
        `Great, I'll get started on your ${pizzaName} right away, it will cost ${totalCost(orderQuantity)} kr. 
        The pizza will take ${cookingTime(orderQuantity)} minutes.`  
    } else if (orderQuantity && orderQuantity > 1 && pizzaName) {
       document.getElementById("greeting").innerHTML = 
        `Great, I'll get started on your ${pizzaName}s right away, it will cost ${totalCost(orderQuantity)} kr. 
        The pizzas will take ${cookingTime(orderQuantity)} minutes.`   
    } else {
      document.getElementById("greeting").innerHTML = `Please select a pizza from the menu and your desired quantity`  
    }
  }


  