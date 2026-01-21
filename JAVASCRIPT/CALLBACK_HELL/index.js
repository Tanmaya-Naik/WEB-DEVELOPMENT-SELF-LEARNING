// ======================================================
// CALLBACK HELL EXPLAINED USING A FAKE ZOMATO FLOW 🍽️
// ======================================================

// Order details (not important for async logic, just context)
const orderDetail = {
    orderId: 69696,
    food: ["Biriyani", "Chicken kasa", "coke"],
    cost: 690,
    customer_name: "Tanu",
    customer_location: "Nk agrawal",
    restaurant_location: "daily darbar"
};

/*
--------------------------------------------------------
STEP 1: PLACE ORDER
--------------------------------------------------------
- This function starts the payment process.
- Payment is ASYNCHRONOUS (takes time).
- So we use a CALLBACK to say:
  "After payment is done, do the next step."
*/
function placeOrder(orderDetail, callback) {
    console.log(`${orderDetail.cost} payment is in progress`);

    // Simulating payment delay
    setTimeout(() => {
        console.log("Payment received, order placed");

        // After payment is completed,
        // call the next step via callback
        callback();
    }, 3000);
}

/*
--------------------------------------------------------
STEP 2: PREPARE FOOD
--------------------------------------------------------
- This should ONLY start after payment is successful.
- Again, food preparation takes time.
- So we accept a CALLBACK for the next step.
*/
function preparingOrder(callback) {
    console.log("Food preparation started");

    setTimeout(() => {
        console.log("Food is ready, will be delivered shortly");

        // Food is ready, move to next step
        callback();
    }, 3500);
}

/*
--------------------------------------------------------
STEP 3: CALL DELIVERY BOY
--------------------------------------------------------
- Delivery boy should be called ONLY
  after food is ready.
- Another async operation → another callback.
*/
function callDeliveryBoy(callback) {
    console.log("Calling delivery boy to pick up the order");

    setTimeout(() => {
        console.log("Delivery boy picked up the order");

        // Order picked up, move to final step
        callback();
    }, 3000);
}

/*
--------------------------------------------------------
STEP 4: DELIVER ORDER
--------------------------------------------------------
- Final step.
- No callback needed because the flow ends here.
*/
function deliverOrder() {
    console.log("Delivery boy is on the way");

    setTimeout(() => {
        console.log("Order delivered successfully");
    }, 3000);
}

/*
========================================================
CALLBACK HELL STARTS HERE 👇
========================================================

WHY THIS STRUCTURE EXISTS:
- JavaScript does NOT wait.
- Each async step must start ONLY after the previous step finishes.
- So we NEST callbacks inside callbacks.

THIS WORKS, BUT IT IS UGLY.
THIS IS CALLBACK HELL.
*/

placeOrder(orderDetail, () => {
    preparingOrder(() => {
        callDeliveryBoy(() => {
            deliverOrder();
        });
    });
});

/*
========================================================
WHY THIS IS CALLED CALLBACK HELL
========================================================

1. Code grows to the RIGHT instead of DOWN
2. Logic becomes hard to read
3. Debugging becomes painful
4. Adding one more async step = more nesting
5. Error handling becomes almost impossible

THIS IS NOT A BUG.
THIS IS A DESIGN PROBLEM.

--------------------------------------------------------
THIS PAIN IS THE REASON:
→ PROMISES WERE INTRODUCED
→ ASYNC / AWAIT WAS CREATED

NEXT STEP:
Rewrite this SAME FLOW using Promises,
then async/await, so your code looks like
something an adult engineer would maintain.
--------------------------------------------------------
*/
