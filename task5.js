//Task 1: E-commerce Cart System

let cart1 = [
  { name: "Shirt", price: 500 },
  { name: "Shoes", price: 1500 }
];

let cart2 = [
  { name: "Watch", price: 2000 }
];

// 1. Merge carts using spread
let mergedCart = [...cart1, ...cart2];

// 2. Add 1 new product (push)
mergedCart.push({ name: "Bag", price: 1000 });

// 3. Remove last product (pop)
mergedCart.pop();

//  4. Calculate total price
let total = mergedCart.reduce((sum, item) => sum + item.price, 0);

//  Output
console.log("Final Cart:", mergedCart);
console.log("Total Price:", total);


// Task 2: User Profile Management

let user = {
  name: "Naveen",
  role: "Trainee",
  salary: 20000
};

let update = {
  role: "Developer",
  salary: 50000
};

// 1. Merge objects using spread
let updatedUser = { ...user, ...update };

//  2. Destructure values
let { name, role, salary } = updatedUser;

//  3. Print formatted output
console.log(`${name} is now a ${role} earning ${salary}`);


// Task 3: Function with Rest Operator (Team Score System)

function teamScore(teamName, ...scores) {
  //  Print team name
  console.log("Team:", teamName);

  //  Print all scores
  console.log("Scores:", scores);

  //  Total score
  let total = scores.reduce((sum, score) => sum + score, 0);

  // Highest score
  let highest = Math.max(...scores);

  //  Output results
  console.log("Total Score:", total);
  console.log("Highest Score:", highest);
}

//  Example call
teamScore("Warriors", 80, 95, 70, 100);


// Task 4: Nested Data Extraction (API Response Simulation)

let apiData = {
  user: {
    name: "Naveen",
    address: {
      city: "Bangalore",
      pincode: 560001
    }
  }
};

// Rename during destructuring
let {
  user: {
    name: userName,
    address: { city, pincode }
  }
} = apiData;

// Output
console.log(`${userName} lives in ${city} - ${pincode}`);


// Task 5: Array Dashboard (Admin Panel)

let users = ["A", "B", "C", "D", "E"];

// 👉 1. Remove "C" and "D" & add "X", "Y" in same place
users.splice(2, 2, "X", "Y");  
// index 2 → start at "C"
// remove 2 items → "C", "D"
// add "X", "Y"

// 👉 2. Get first 3 users using slice
let firstThree = users.slice(0, 3);

// 👉 3. Check if "B" exists
let hasB = users.includes("B");

// 👉 4. Find index of "E"
let indexE = users.indexOf("E");

// 👉 Output
console.log("Updated Users:", users);
console.log("First 3 Users:", firstThree);
console.log("Is B present?", hasB);
console.log("Index of E:", indexE);

//  Task 6: Data Cleaning Tool 


let messyData = [1, 2, [3, 4, [5]], null, undefined, "hello"];

// 👉 1. Flatten the array (deep flatten)
let flatData = messyData.flat(Infinity);

// 👉 2. Remove null and undefined
let cleanData = flatData.filter(item => item != null);

// 👉 Output
console.log("Clean Array:", cleanData);


// task 7 :  Sorting Bug Fix (Real Industry Issue ⚠️)

let prices = [1000, 200, 50, 5000];

// 👉 Ascending sort
prices.sort((a, b) => a - b);

console.log(prices);


// task 8 :    Analytics Report Generator
let orders = [
  { id: 1, amount: 100 },
  { id: 2, amount: 200 },
  { id: 3, amount: 300 }
];

// 👉 1. Total revenue
let totalRevenue = orders.reduce((sum, order) => sum + order.amount, 0);

// 👉 2. Average order value
let average = totalRevenue / orders.length;

// 👉 Output
console.log("Total Revenue:", totalRevenue);
console.log("Average Order Value:", average);

//  task 9 : Inventory Management System

let inventory1 = ["Shirt", "Shoes", "Watch"];
let inventory2 = ["Bag", "Cap"];

// 👉 1. Add items
inventory1.push("Belt");
console.log("After Add:", inventory1);

// 👉 2. Remove last item
inventory1.pop();
console.log("After Remove:", inventory1);

// 👉 3. Update item using splice
// Replace "Shoes" with "Sneakers"
let index = inventory1.indexOf("Shoes");
if (index !== -1) {
  inventory1.splice(index, 1, "Sneakers");
}
console.log("After Update:", inventory1);

// 👉 4. Search item using includes
let hasWatch = inventory1.includes("Watch");
console.log("Is Watch available?", hasWatch);

// 👉 5. Merge inventories using spread
let finalInventory = [...inventory1, ...inventory2];
console.log("Final Inventory:", finalInventory);

// Task 10: Interview Level Challenge

function processData(...data) {
  // 👉 1. Flatten all values
  let flatData = data.flat(Infinity);

  // 👉 2. Remove duplicates (using Set)
  let uniqueData = [...new Set(flatData)];

  // 👉 3. Sort ascending
  let sortedData = uniqueData.sort((a, b) => a - b);

  // 👉 4. Return final result
  return sortedData;
}

// 👉 Example call
let result = processData(1, 2, [3, 4], [5, [6]]);
console.log(result);