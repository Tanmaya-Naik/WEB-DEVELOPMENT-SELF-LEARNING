//a callback function in js is function pass as an argument

// function greet(){
//     console.log("Hello bro how are u")
// }

// function dance(){
//     console.log("I am dancinh")
// }

// function meet(callback){
//     console.log("Nice to meet u buddy")
//     callback()
//     console.log("I have findish")
// }

// meet(greet);
// meet(dance);


//REAL WORLD CASE
//U ORDER IN ZOMATO PLEACED ORDER START PREPARING MEAL 

function placedorder(){
    console.log("start preparing")
}
function blinkitplaced(){
    console.log("start preparing blinkit")
}

function payment(amount,callback){
    console.log(`${amount} payment has initialized`);
    console.log("Payement is recived")
    callback()
    
}

payment(500,placedorder);
payment(5000,blinkitplaced);