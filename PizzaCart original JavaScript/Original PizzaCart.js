/*var buyButton1 = document.querySelector(".buyButton1");
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



var smallTotal = 0;
var mediumTotal = 0;
var largeTotal = 0;

var inputAmount = 0





function buyButton11() {
    if (buyButton1) {
        smallTotal = 68.00;
     


        var roundedsmallTotal = smallTotal.toFixed(2);
        smallTotalOne.innerHTML = roundedsmallTotal;
        
        checkoutButton.classList.remove("hidden")
    }
    var gTotal = (smallTotal+mediumTotal+largeTotal).toFixed(2)
    grandTotalOne.innerHTML = gTotal
}
function plusButton11() {
    
    if (plusButton1) {
        
        smallTotal += 68.00
      

        var roundedsmallTotal =  smallTotal.toFixed(2);
        smallTotalOne.innerHTML = roundedsmallTotal;
        checkoutButton.classList.remove("hidden")
    }
    var gTotal = (smallTotal+mediumTotal+largeTotal).toFixed(2)
    grandTotalOne.innerHTML = gTotal
}
function minusButton11() {
console.log(smallTotalOne.innerHTML);
    if (smallTotalOne.innerHTML>0) {
        smallTotal -= 68.00
       
        var roundedsmallTotal = smallTotal.toFixed(2);
        smallTotalOne.innerHTML = roundedsmallTotal;
    }
    var gTotal = (smallTotal+mediumTotal+largeTotal).toFixed(2)
    grandTotalOne.innerHTML = gTotal
}


function buyButton22() {
    if (buyButton2) {
        mediumTotal = 89.00;

        var roundedMediumTotal = ediumTotal.toFixed(2);
        mediumTotalOne.innerHTML = roundedMediumTotal;
        checkoutButton.classList.remove("hidden")
    }
    var gTotal = (smallTotal+mediumTotal+largeTotal).toFixed(2)
    grandTotalOne.innerHTML = gTotal
}
function plusButton22() {
    if (plusButton2) {
        mediumTotal += 89.00;
         

        var roundedMediumTotal = mediumTotal .toFixed(2);
        mediumTotalOne.innerHTML = roundedMediumTotal;
        checkoutButton.classList.remove("hidden")
    }
    var gTotal =  (smallTotal+mediumTotal+largeTotal).toFixed(2)
    grandTotalOne.innerHTML = gTotal
}
function minusButton22() {
    if ( mediumTotalOne.innerHTML > 0) {
        mediumTotal -= 89.00
     
        var roundedMediumTotal = mediumTotal.toFixed(2);
        mediumTotalOne.innerHTML = roundedMediumTotal;
    }
    var gTotal = (smallTotal+mediumTotal+largeTotal).toFixed(2)
    grandTotalOne.innerHTML = gTotal
}


function buyButton33() {
    if (buyButton3) {
       largeTotal = 129.00;

        var roundedLargeTotal = largeTotal.toFixed(2);
        largeTotalOne.innerHTML = roundedLargeTotal;
        checkoutButton.classList.remove("hidden")

    }
    var gTotal = (smallTotal+mediumTotal+largeTotal).toFixed(2)
    grandTotalOne.innerHTML = gTotal
}
function plusButton33() {
    if (plusButton3) {
        largeTotal += 129.00;
      


        var roundedLargeTotal =largeTotal.toFixed(2);
        largeTotalOne.innerHTML = roundedLargeTotal;
        checkoutButton.classList.remove("hidden")
    }
    var gTotal = (smallTotal+mediumTotal+largeTotal).toFixed(2)
    grandTotalOne.innerHTML = gTotal
}
function minusButton33() {
    if (largeTotalOne.innerHTML>0) {
        largeTotal -= 129.00
       
        var roundedLargeTotal = pizzaShop. largeTotal.toFixed(2);
        largeTotalOne.innerHTML = roundedLargeTotal;
    }
    var gTotal = (smallTotal+mediumTotal+largeTotal).toFixed(2)
    grandTotalOne.innerHTML = gTotal
}

function TheCheckoutButton() {
    
    if (checkoutButton) {
       row1.classList.toggle("hidden")
     
    }
}

function ThePurchaseButton(){
    grandTotalOne.innerHTML=""
    

    var inputAmount = Number(Payments.value);
   
       
    if (inputAmount >= grandTotalOne.innerHTML ){
     row2.classList.remove("hidden");
       row3.classList.add("hidden");
        pizzaShop.enoughMoney()
        
   
        setTimeout(function(){

        row2.classList.add("hidden");

        smallTotalOne.innerHTML="0.00";
        mediumTotalOne.innerHTML="0.00"
        largeTotalOne.innerHTML="0.00"
        grandTotalOne.innerHTML="0.00"
        
           },5000)
        

        }
        
        else if(inputAmount <= grandTotalOne.innerHTML){
        row3.classList.remove("hidden");
        row2.classList.add("hidden");

        setTimeout(function(){
            row3.classList.add("hidden");
               },5000)
} 


}




plusButton1.addEventListener('click', plusButton11);
minusButton1.addEventListener('click', minusButton11);
plusButton2.addEventListener('click', plusButton22);
minusButton2.addEventListener('click', minusButton22);
plusButton3.addEventListener('click', plusButton33);
minusButton3.addEventListener('click', minusButton33);*/