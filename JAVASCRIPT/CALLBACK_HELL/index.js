                    //LETS UNDERSTAND CALLBACK HELL IN SUCH A WAY THAT WE NEVER FORGOT
//LETS BUILDS ZOMATO APPLICAION

const orderDetail= {
    orderId:69696,
    food:["Biriyani","Chicken kasa", "coke"],
    cost:690,
    customer_name:"Tanu",
    customer_location:"Nk agrawal",
    restuarant_location:"daily darbar"
}
function placeorder(orderDetail, callback){
    console.log(`${orderDetail.cost} Payment is in progrss`);

    setTimeout(()=>{
        console.log("Your payment is recived and order get placed ")
        callback()
    },3000);
}

function preparingOrder(callback){
    console.log("Your food preparation is started");

    setTimeout(()=>{
        console.log("Your food is ready and deliver shortly")
        callback();
        
    },3500);
}

function calldeliveryboy(callback){
    console.log("bro take the order because order is ready so pickit up quickly");

    setTimeout(()=>{
        console.log("i am the og delivery boy and i have picked the order")
        callback();
    },3000);
}

function deliverorder(){
    console.log("I am on my way babyyyy");

    setTimeout(()=>{
        console.log("order delivered bro")
    },3000);
}
placeorder(orderDetail, ()=>{
    preparingOrder(()=>{
        calldeliveryboy(()=>{
            deliverorder();
        });
    });
});

// const callback=()=>{
//     preparingOrder();
// }  THIS IS HAPPENING IN THE CALLBACK INSIDE CALLBACK

// placeorder(()=>{
//     preparingOrder(()=>{
//         calldeliveryboy(()=>{
//             deliverorder();
//         });
//     });
// });  THIS IS CALLED CALLBACK HELL 


// AS WE KNOW THAT JAVASCRIPT DO NOT WAIT FOR ANYONE SO HOW SHOULD WE PRINT THE FIRST MESSAGE OF FIRST FUNCTION AND THEN AFTER PAYMENT IS RECIVED WE CALL THE 2ND FUNCTION SO THIS IS NOT POSSIBLE SO THIS IS CALLED CALLBACK HELL

//