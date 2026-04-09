//1: E-Commerce Discount System


function calculateDiscount(productName, price) {
    let finalPrice;

    if (price > 1000) {
        finalPrice = price - (price * 0.20);
    } else {
        finalPrice = price - (price * 0.10);
    }

    console.log("Product:", productName);
    console.log("Final Price:", finalPrice);

    return finalPrice;
}

// Example call
calculateDiscount("Shoes", 2000);


//2: Order Processing using Callback

// Higher-order function
function placeOrder(callback) {
    console.log("Order placed");
    
    const amount = 500;
    
    // calling the callback function
    callback(amount);
}

// Callback function
function payment(amount) {
    console.log(`Payment of ${amount} successful`);
    
    // after payment success
    orderSuccess();
}

// Final success function
function orderSuccess() {
    console.log("Order delivered");
}

// Function call
placeOrder(payment);


//3: Employee Data Loop System

const employees = [
  { name: "Navi", salary: 50000 },
  { name: "John", salary: 70000 }
];

for (let i = 0; i < employees.length; i++) {
  if (employees[i].salary > 60000) {
    console.log(employees[i].name + " → High Salary");
  } else {
    console.log(employees[i].name + " → Normal Salary");
  }
}


// 4: Login Attempts (While Loop)
let correctPassword = "1234";
let enteredPassword = "";
let attempts = 0;
let maxAttempts = 3;

while (attempts < maxAttempts) {
    attempts++;
    console.log("Attempt " + attempts);

    // Simulating user input
    if (attempts === 2) {
        enteredPassword = "1234"; // correct on 2nd attempt
    } else {
        enteredPassword = "wrong";
    }

    if (enteredPassword === correctPassword) {
        console.log("Login success");
        break;
    }
}

//5: Coupon Generator (Generator Function)
// Generator function
function* offerGenerator() {
  yield "10% OFF";
  yield "20% OFF";
  yield "Free Delivery";
  yield "Cashback";
}

const offers = offerGenerator();

// Simulating button clicks using .next()
console.log(offers.next().value); // Click 1
console.log(offers.next().value); // Click 2
console.log(offers.next().value); // Click 3
console.log(offers.next().value); // Click 4

//6: Shopping Cart Total (for...of)

let cart = [100, 200, 300, 400];

let total = 0;

for (let price of cart) {
  total += price;
}

console.log("Total Bill: " + total);


//7 : User Profile System (for...in)

let user = {
  name: "Navi",
  role: "Developer",
  location: "India"
};

for (let key in user) {
  console.log(key + " : " + user[key]);
}

//  8: Factory Pattern (Function Reuse)


function createPhone() {
  return "Phone";
}

function createBattery() {
  return "Battery";
}

function createCharger() {
  return "Charger";
}

// Reusing functions
function createOrder() {
  return createPhone() + " + " + createBattery() + " + " + createCharger();
}

console.log("Your Order: " + createOrder());


//9: College Form with Default Values


function employee(name, department = "Not Assigned") {
  console.log("Name: " + name);
  console.log("Department: " + department);
}

// Calls
employee("Navi", "IT");
employee("John"); // no department given



// 10: Currying - EMI Calculator

function emi(principal) {
  return function(rate) {
    return function(time) {
      return (principal * rate * time) / 100;
    };
  };
}

// Example
let resultemi = emi(10000)(2)(12);
console.log("EMI:", resultemi);

// 11: Even/Odd Analyzer
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i + " → Even");
  } else {
    console.log(i + " → Odd");
  }
}


// 12: Function Scope Debugging

if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a); // ✅ 10 (var is function-scoped)
//console.log(b); // ❌ ReferenceError: b is not defined
//console.log(c); // ❌ ReferenceError: c is not defined


//13: Real-Time Alert System (IIFE)


(() => {
  console.log("🔥 Flash Sale: 50% OFF on Shirts");
})();


// 14: Marks Calculator with Return

function marks(m1, m2, m3) {
  let total = m1 + m2 + m3;
  let average = total / 3;

  return {
    total: total,
    average: average
  };
}

let result = marks(80, 90, 70);

console.log("Total:", result.total);
console.log("Average:", result.average);

// 15: Retry Offer System (Generator + Condition)

// Generator function
function* offersGenerator() {
  yield "10% OFF";
  yield "20% OFF";
  yield "Free Delivery";
}

// Create generator
const offer = offersGenerator();

// Simulating button clicks
let results = offer.next();

while (!results.done) {
  console.log(results.value);
  results = offer.next();
}

// When all offers are done
console.log("All offers expired");
