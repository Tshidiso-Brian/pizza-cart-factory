var buyButton1 = document.querySelector(".buyButton1");
var buyButton2 = document.querySelector(".buyButton2");
var buyButton3 = document.querySelector(".buyButton3");
var smallTotalOne = document.querySelector(".smallTotalOne");
var mediumTotalOne = document.querySelector(".mediumTotalOne");
var largeTotalOne = document.querySelector(".largeTotalOne");
var grandTotalOne = document.querySelector(".grandTotalOne");
var plusButton1 = document.querySelector(".plusButton1");
var minusButton1 = document.querySelector(".minusButton1");
var plusButton2 = document.querySelector(".plusButton2");
var minusButton2 = document.querySelector(".minusButton2");
var plusButton3 = document.querySelector(".plusButton3");
var minusButton3 = document.querySelector(".minusButton3");
var checkoutButton = document.querySelector(".checkoutButton");
var row1 = document.querySelector(".row1");
var row2 = document.querySelector(".row2");
var row3 = document.querySelector(".row3");
var row4 = document.querySelector(".row4");
var payButton = document.querySelector(".payButton");
var Payments = document.querySelector(".Payments");
var message = document.querySelector(".message");

buyButton1.addEventListener('click', buyButton11);
buyButton2.addEventListener('click', buyButton22);
buyButton3.addEventListener('click', buyButton33);
checkoutButton.addEventListener('click', TheCheckoutButton);
payButton.addEventListener('click', ThePurchaseButton);


var inputAmount = 0


const pizzaShop = PizzaCart();


function buyButton11() {
    if (buyButton1) {
       
        pizzaShop.buySmallPizza();


        var roundedsmallTotal = pizzaShop.smallPizzaTotal().toFixed(2);
        smallTotalOne.innerHTML = roundedsmallTotal;
        
        checkoutButton.classList.remove("hidden")
    }
    var gTotal = pizzaShop.grandTotalPizza().toFixed(2)
    grandTotalOne.innerHTML = gTotal
}
function plusButton11() {
    
    if (plusButton1) {
        
       
       pizzaShop.addSmallPizza();

        var roundedsmallTotal = pizzaShop.smallPizzaTotal().toFixed(2);
        smallTotalOne.innerHTML = roundedsmallTotal;
        checkoutButton.classList.remove("hidden")
    }
    var gTotal = pizzaShop.grandTotalPizza().toFixed(2)
    grandTotalOne.innerHTML = gTotal
}
function minusButton11() {
console.log(smallTotalOne.innerHTML);
    if (smallTotalOne.innerHTML>0) {
       
       pizzaShop.minusSmallPizza();
        var roundedsmallTotal = pizzaShop.smallPizzaTotal().toFixed(2);
        smallTotalOne.innerHTML = roundedsmallTotal;
    }
    var gTotal = pizzaShop.grandTotalPizza().toFixed(2)
    grandTotalOne.innerHTML = gTotal
}


function buyButton22() {
    if (buyButton2) {
       
       pizzaShop.buyMediumPizza()


        var roundedMediumTotal = pizzaShop.mediumPizzaTotal().toFixed(2);
        mediumTotalOne.innerHTML = roundedMediumTotal;
        checkoutButton.classList.remove("hidden")
    }
    var gTotal = pizzaShop.grandTotalPizza().toFixed(2)
    grandTotalOne.innerHTML = gTotal
}
function plusButton22() {
    if (plusButton2) {
      
         pizzaShop.addMediumPizza();

        var roundedMediumTotal = pizzaShop.mediumPizzaTotal().toFixed(2);
        mediumTotalOne.innerHTML = roundedMediumTotal;
        checkoutButton.classList.remove("hidden")
    }
    var gTotal = pizzaShop.grandTotalPizza().toFixed(2)
    grandTotalOne.innerHTML = gTotal
}
function minusButton22() {
    if ( mediumTotalOne.innerHTML > 0) {
        
        pizzaShop.minusMediumPizza()
        var roundedMediumTotal = pizzaShop.mediumPizzaTotal().toFixed(2);
        mediumTotalOne.innerHTML = roundedMediumTotal;
    }
    var gTotal = pizzaShop.grandTotalPizza().toFixed(2)
    grandTotalOne.innerHTML = gTotal
}


function buyButton33() {
    if (buyButton3) {
    

      pizzaShop.buyLargePizza()
console.log(pizzaShop.buyLargePizza)

        var roundedLargeTotal = pizzaShop.largePizzaTotal().toFixed(2);
        largeTotalOne.innerHTML = roundedLargeTotal;
        checkoutButton.classList.remove("hidden")

    }
    var gTotal = pizzaShop.grandTotalPizza().toFixed(2)
    grandTotalOne.innerHTML = gTotal
}
function plusButton33() {
    if (plusButton3) {
      
       pizzaShop.addLargePizza();


        var roundedLargeTotal = pizzaShop.largePizzaTotal().toFixed(2);
        largeTotalOne.innerHTML = roundedLargeTotal;
        checkoutButton.classList.remove("hidden")
    }
    var gTotal = pizzaShop.grandTotalPizza().toFixed(2)
    grandTotalOne.innerHTML = gTotal
}
function minusButton33() {
    if (largeTotalOne.innerHTML>0) {
      
       pizzaShop.minusLargePizza()
        var roundedLargeTotal = pizzaShop.largePizzaTotal().toFixed(2);
        largeTotalOne.innerHTML = roundedLargeTotal;
    }
    var gTotal = pizzaShop.grandTotalPizza().toFixed(2)
    grandTotalOne.innerHTML = gTotal
}

function TheCheckoutButton() {
    
    if (checkoutButton) {
     
      pizzaShop.checkout()
    }
}

function ThePurchaseButton(){
   var inputAmount = Number(Payments.value);
        
   pizzaShop.action(inputAmount)      

}


plusButton1.addEventListener('click', plusButton11);
minusButton1.addEventListener('click', minusButton11);
plusButton2.addEventListener('click', plusButton22);
minusButton2.addEventListener('click', minusButton22);
plusButton3.addEventListener('click', plusButton33);
minusButton3.addEventListener('click', minusButton33);