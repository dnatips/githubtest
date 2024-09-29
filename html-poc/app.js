var message = "Hi there! What's going on?"
console.log(message)
console.log("Try testing HTML page with Javascript included in it through another .js file.")

function calculateShippingCost(price) {
    return (price <= 10) ? 5 : ((price <=20) ? 3 : 0);
}

let totalPrice = 19;
let shippingCost = calculateShippingCost(totalPrice);
console.log(`Shipping cost is ${shippingCost}.`);
console.log(new Date().toString());
